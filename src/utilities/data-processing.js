import {DATA_FIELD_COLORS,USA_IDENTIFIER, DATA_FIELD_DISPLAY_NAMES} from './data-fields';
import POPULATION_ESTIMATES from './population-estimates';

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

export const getChartDataset = (stateData, fieldNames) => {

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

    stateData.forEach(dayRecord => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.fieldName === fieldName))    
            fieldData.data.push(!dayRecord[fieldName] || dayRecord[fieldName] < 0 ? 0 : dayRecord[fieldName]);
        })
    });

    return fieldDatasets;
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
        stateCountyInfo = await fetchCountyData();
        stateHistoryData = await fetchJsonData('https://covidtracking.com/api/v1/states/daily.json');
        countryHistoryData = await fetchJsonData('https://covidtracking.com/api/v1/us/daily.json');
        deathsByAgeGroups = await fetchJsonData('https://data.cdc.gov/resource/9bhg-hcku.json?$select=data_as_of,state,age_group,sum(covid_19_deaths)&$group=data_as_of,state,age_group&$where=sex%20in%20(%27Male%27,%27Female%27)&$order=state');

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
        const stateJson = await fetchJsonData('https://covidtracking.com/api/v1/states/info.json');
        stateJson.forEach(data => {
            stateInformation[data.state] = {
                name: data.name,
                website: data.covid19Site,
                twitter: data.twitter
            }
        })

        // U.S. States Latest Toals Data - 1 record per state
        const statesLatestJson = await fetchJsonData('https://covidtracking.com/api/v1/states/current.json');
        statesLatestJson.forEach(data => {
            stateInformation[data.state].dataQualityGrade = data.dataQualityGrade;
            stateInformation[data.state].totalDeath = data.death;
            stateInformation[data.state].totalPositive = data.positive;
            stateInformation[data.state].totalTestResults = data.totalTestResults;
            stateInformation[data.state].totalRecovered = data.recovered;

            let population = POPULATION_ESTIMATES[stateInformation[data.state].name];
            if (population === undefined)
                population=-1;

            stateInformation[data.state].estimatedPopulation = population;
        });
        
        // U.S. Country-Wide Current Data stored as a record in states data 
        const countryJson = await fetchJsonData('https://covidtracking.com/api/v1/us/current.json');
        countryJson.forEach(data => {    
            stateInformation[USA_IDENTIFIER] = {
                estimatedPopulation: POPULATION_ESTIMATES[USA_IDENTIFIER],
                totalPositive: data.positive,
                totalDeath: data.death,
                totalTestResults: data.totalTestResults,
                totalRecovered: data.recovered,
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
        const url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"
        
        let stateCountyData = [];

        const response = await fetch(url);
        if (response.ok) {
            const csvText = await response.text();
            stateCountyData = parseCountyCSVData(csvText);
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
