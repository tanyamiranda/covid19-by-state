import {DATA_FIELD_COLORS,USA_IDENTIFIER, DATA_FIELD_DISPLAY_NAMES} from './data-fields';
import POPULATION_ESTIMATES from './population-estimates';

const URL_STATE_META_DATA = "https://api.covidtracking.com/v1/states/info.json";
const URL_STATE_TOTALS_DATA = "https://api.covidtracking.com/v1/states/current.json";
const URL_COUNTRY_TOTALS_DATA = "https://api.covidtracking.com/v1/us/current.json";
const URL_COUNTY_LEVEL_DATA = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"
const URL_STATES_HISTORY_DATA = "https://api.covidtracking.com/v1/states/daily.json";
const URL_COUNTRY_HISTORY_DATA = "https://api.covidtracking.com/v1/us/daily.json";
const URL_DEATHS_BY_AGE_DATA = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Total' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by state,age_group&$order=state, age_group";

export const getDateListFromData = (stateData) => {

    const datesList = stateData.map(item => item.date)
        .filter((value, index, self) => self.indexOf(value) === index);

    const newDateList = [];

    datesList.forEach(item => {
        var dateString = String(item);
        var month = Number(dateString.substring(4,6));
        var day = Number(dateString.substring(6,8));

        newDateList.push(month + "/" + day);
    });

    return newDateList;
}

export const getHistoryByState = (stateHistoryData, state, startDate, endDate) => {
    
    return stateHistoryData
        .filter(stateData => stateData.state === state && stateData.date >= startDate && stateData.date <= endDate)
        .sort(function (a, b) {
            return a.date - b.date;
        });
    
}    

export const getAgeGroupForState = (deathsByAgeGroups, stateName) => {
    
    return deathsByAgeGroups
        .filter(data => data.state.toLowerCase() === stateName.toLowerCase() && data.age_group.includes('year'))
        .sort((a,b) => compareAgeGroupValues(a.age_group,b.age_group));
    
}    

export const formatAgeGroupNames = (ageGroups) => {
    
    const shortNames = [];

    ageGroups.forEach(group => {
        const groupName = group.replace("years and over","+").replace("years","").replace("year","").replace("Under","<"); 
        shortNames.push(groupName);
    });

    return shortNames;
}

const compareAgeGroupValues = (a, b) => {

    let numA = Number(a.substring(0,2).replace("-","").toLowerCase().replace("un","0"));
    let numB = Number(b.substring(0,2).replace("-","").toLowerCase().replace("un","0"));

    if (numA > numB) return 1;
    if (numA < numB) return -1;

    return 0;
}

export const getChartDataset = (data, fieldNames) => {

    const fieldDatasets = [];

    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        fieldDatasets.push({
            fieldName: fieldName, 
            label: DATA_FIELD_DISPLAY_NAMES[fieldName],
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            borderWidth: 1.5,
            data: []
        })
    })

    data.forEach(row => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.fieldName === fieldName))    
            fieldData.data.push(!row[fieldName] || row[fieldName] < 0 ? 0 : row[fieldName]);
        })
    });

    return fieldDatasets;
}

export const getAgeGroupChartDataset = (covidDeaths, allDeaths) => {

    const ageGroupDataSet = [
        {    
            label: "Covid-19",
            backgroundColor: "red",
            data:covidDeaths 
        },
        { 
            label: "All Deaths",
            backgroundColor: "blue",
            data:allDeaths
        }
    ];

    return ageGroupDataSet;
}

export const getFreshData = async() => {
    
    //console.log("Fetching Data from https://covidtracking.com/...");

    let stateHistoryData = [];
    let stateInformation = [];
    let countryHistoryData = [];
    let stateCountyInfo = [];
    let deathsByAgeGroups = []

    try {

        stateInformation = await fetchStateData();
        //stateCountyInfo = await fetchCountyData();
        stateHistoryData = await fetchJsonData(URL_STATES_HISTORY_DATA);
        countryHistoryData = await fetchJsonData(URL_COUNTRY_HISTORY_DATA);
        deathsByAgeGroups = await fetchJsonData(URL_DEATHS_BY_AGE_DATA);

        return {
            statesHistoryData: stateHistoryData,
            stateInformation: stateInformation,
            countryHistoryData: countryHistoryData,
            stateCountyInfo: stateCountyInfo,
            deathsByAgeGroups: deathsByAgeGroups
        }

    } catch (error) {
        console.log(error);
    }
}

export const getCountryHistoryData = (countryHistoryData, startDate, endDate) => {

    return countryHistoryData
        .filter(data => data.date >= startDate && data.date <= endDate )
        .sort(function (a, b) {
            return a.date - b.date;
        });
    
}

export const fetchJsonData = async(url) => {
    try{

        let json = null;

        // U.S. States Historical Data
        const response = await fetch(url);
        if (response.ok) {
            json = await response.json();
        }
        else {
            throw Error(response.statusText);
        }
        
        return json;
    }
    catch (error) {
        console.log("fetchJsonData() error!", error);
    }
}

const fetchStateData = async() => {

    try {
        const stateInformation = [];

        // U.S. States Data - 1 record per state
        const stateJson = await fetchJsonData(URL_STATE_META_DATA);
        stateJson.forEach(data => {
            stateInformation[data.state] = {
                name: data.name,
                website: data.covid19Site,
                twitter: data.twitter,
            }
        })

        // U.S. States Latest Toals Data - 1 record per state
        const statesLatestJson = await fetchJsonData(URL_STATE_TOTALS_DATA);
        statesLatestJson.forEach(data => {
            stateInformation[data.state].totalDeath = data.death;
            stateInformation[data.state].totalPositive = data.positive;
            stateInformation[data.state].totalTestResults = data.totalTestResults;
            stateInformation[data.state].totalRecovered = data.recovered;
            stateInformation[data.state].hospitalizedCurrently = data.hospitalizedCurrently;

            let population = POPULATION_ESTIMATES[stateInformation[data.state].name];
            if (population === undefined)
                population=-1;

            stateInformation[data.state].estimatedPopulation = population;
        });
        
        // U.S. Country-Wide Current Data stored as a record in states data 
        const countryJson = await fetchJsonData(URL_COUNTRY_TOTALS_DATA);
        countryJson.forEach(data => {    
            stateInformation[USA_IDENTIFIER] = {
                estimatedPopulation: POPULATION_ESTIMATES[USA_IDENTIFIER],
                totalPositive: data.positive,
                totalDeath: data.death,
                totalTestResults: data.totalTestResults,
                totalRecovered: data.recovered,
                hospitalizedCurrently: data.hospitalizedCurrently,
                name: "United States",
                dataQualityGrade: "N/A",
                twitter:"https://twitter.com/CDCgov",
                website:"https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            }
        });
    
        return stateInformation;
    }
    catch (error) {
        console.log("fetchStateData() error!", error)
    }
        
}

export const fetchCountyData = async() => {

    try {
        const url = URL_COUNTY_LEVEL_DATA;
        
        let stateCountyData = [];

        const response = await fetch(url);
        if (response.ok) {
            const csvText = await response.text();
            stateCountyData = parseCountyCSVData(csvText);
            stateCountyData.filter(data => data.deaths > 0 || data.cases > 0);
        }
        else {
            throw Error(response.statusText);
        }

        return stateCountyData;
    }
    catch (error) {
        
    }
}

//Parsing County Data specific to dataset specs
function parseCountyCSVData(csv){

    var lines=csv.split("\n");

    var result = [];

    for(var i=1;i<lines.length;i++){

        const currentline=lines[i].split(",");
        const county = {};
        county.county = currentline[1];
        county.stateName = currentline[2];
        county.cases = currentline[4]
        county.deaths = currentline[5];
        result.push(county);
    }

    return result; 
}

export const formatYAxisDisplay = (labelText) => {

    const label = Number(labelText);

    if (label >= 1000000) {
        return label / 1000000 + 'M';
    }
    else if (label >= 10000) {
        return label / 1000 + 'K';
    }
    else {
        return label;
    }
}


export const combineAgeGroupValues = (ageGroupSet1) => {

    var result = [];
    ageGroupSet1.reduce(
        function(age_group_sum, value) {
            if (!age_group_sum[value.age_group]) {
                age_group_sum[value.age_group] = {
                    age_group: value.age_group,
                    sum_covid_19_deaths: !Number(value.sum_covid_19_deaths) ? 0 : Number(value.sum_covid_19_deaths),
                    sum_total_deaths: !Number(value.sum_total_deaths) ? 0 : Number(value.sum_total_deaths)
                };
                result.push(age_group_sum[value.age_group])
            }
            else {
                age_group_sum[value.age_group].sum_covid_19_deaths += !Number(value.sum_covid_19_deaths) ? 0 : Number(value.sum_covid_19_deaths);
                age_group_sum[value.age_group].sum_total_deaths += !Number(value.sum_total_deaths) ? 0 : Number(value.sum_total_deaths);
            }
            return age_group_sum;
        }
    , {});

    return result;

}