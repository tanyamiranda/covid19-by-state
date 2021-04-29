import {DATA_FIELD_COLORS, DATA_FIELD_DISPLAY_NAMES} from './data-fields';
import {getFormattedDateForFiltering} from './formatting';

const URL_DEATHS_BY_AGE_DATA = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Total' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by state,age_group&$order=state, age_group";
const URL_COUNTY_LEVEL_DATA = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"


/* New Data Sets from CDC */
const CDC_TOKEN = "&$limit=50000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N";
const URL_CDC_CASES_DEATHS_BY_STATE_TOTAL = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=state,max(tot_cases) as total_cases,max(tot_death) as total_deaths&$group=state&$order=state" + CDC_TOKEN;
const URL_CDC_CASES_DEATHS_BY_STATE_HISTORY= "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date,state" + CDC_TOKEN;
const URL_CDC_CASES_DEATHS_USA_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date%20as%20date,%27USA%27%20as%20state,sum(new_case)%20as%20new_case,sum(new_death)%20as%20new_death&$group=submission_date&$order=submission_date" + CDC_TOKEN;

/*
As of March 2020, The Covid Tracking project ended its funding, so all datapoints have to
now be sourced directly from CDC. The link below has all related data links:
https://covidtracking.com/about-data/data-summary

const URL_STATE_META_DATA = "https://api.covidtracking.com/v1/states/info.json";
const URL_STATE_TOTALS_DATA = "https://api.covidtracking.com/v1/states/current.json";
const URL_STATES_HISTORY_DATA = "https://api.covidtracking.com/v1/states/daily.json";
const URL_COUNTRY_TOTALS_DATA = "https://api.covidtracking.com/v1/us/current.json";
const URL_COUNTRY_HISTORY_DATA = "https://api.covidtracking.com/v1/us/daily.json";

*/

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
    
    let stateCountyInfo = [];
    let deathsByAgeGroups = []
    let cdcHistoryByJurisdiction = [];
    let cdcTotalsByJurisdiction = [];

    try {

        let dataHistoryByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_HISTORY);
        let dataTotalsByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_TOTAL);
        let dataHistoryUSA = await fetchJsonData(URL_CDC_CASES_DEATHS_USA_HISTORY);
        let dataTotalsUSA = await getTotalsForUSA(dataTotalsByState);

        cdcHistoryByJurisdiction = dataHistoryByState.concat(dataHistoryUSA);
        cdcTotalsByJurisdiction = dataTotalsByState.concat(dataTotalsUSA);
        deathsByAgeGroups = await fetchJsonData(URL_DEATHS_BY_AGE_DATA);

        return {
            stateCountyInfo: stateCountyInfo,
            deathsByAgeGroups: deathsByAgeGroups,
            cdcTotalsByJurisdiction: cdcTotalsByJurisdiction,
            cdcHistoryByJurisdiction: cdcHistoryByJurisdiction
        }

    } catch (error) {
        console.log(error);
    }
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

export const getCDCDataSet = (selectedDateRange, cdcHistoryByJurisdiction, selectedState) =>{
    const now = new Date();
    const yesterday = new Date();
    now.setDate(now.getDate() - Number(selectedDateRange));
    const startDate = getFormattedDateForFiltering(now);
    const endDate = getFormattedDateForFiltering(yesterday);

    let dataSet = cdcHistoryByJurisdiction
        .filter(stateData => stateData.state === selectedState && stateData.date.substr(0,10).replace('-','') >= startDate && stateData.date.substr(0,10).replace('-','') <= endDate)
        .sort(function (a, b) {
            return a.date - b.date;
        });

    return dataSet;
}

export const getDateListFromCDCData = (dataSet) => {

    const datesList = dataSet.map(item => item.date)
        .filter((value, index, self) => self.indexOf(value) === index);

    const newDateList = [];

    datesList.forEach(item => {
        var dateString = String(item);
        var month = Number(dateString.substring(5,7));
        var day = Number(dateString.substring(8,10));

        newDateList.push(month + "/" + day);
    });

    return newDateList;
}

export const getTotalsForUSA = (cdcTotalsByJurisdiction) => {

    let totalCases = 0;
    let totalDeaths = 0;

    cdcTotalsByJurisdiction.forEach(data => {
        totalCases += Number(data.total_cases);
        totalDeaths += Number(data.total_deaths);
    })

    return {"state":"USA", "total_cases": "" + totalCases, "total_deaths": "" + totalDeaths}

}