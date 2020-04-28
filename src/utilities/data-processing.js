import {DATA_FIELD_COLORS} from './data-fields';

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

export const getHistoryByState = (stateHistoryData, state, startFromDate) => {

    return stateHistoryData
        .filter(stateData => stateData.state === state && stateData.date >= startFromDate )
        .sort(function (a, b) {
            return a.date - b.date;
        });
    
}    

export const getChartDataset = (stateData, fieldNames) => {

    const fieldDatasets = [];

    // Initialize the datasets for each field.
    fieldNames.forEach ((fieldName, index) => {
        fieldDatasets.push({
            label: fieldName,
            fill: false,
            backgroundColor: DATA_FIELD_COLORS[index],
            borderColor: DATA_FIELD_COLORS[index],
            data: []
        })
    })

    stateData.forEach(dayRecord => {
        fieldNames.forEach (fieldName => {
            const fieldData = fieldDatasets.find((data => data.label === fieldName))    
            fieldData.data.push(!dayRecord[fieldName] ? 0 : dayRecord[fieldName]);
        })
    });

    return fieldDatasets;
}


export const getStatesInfo = (stateInfo) => {
    
    const stateNames = []; 

    stateInfo.forEach(data => {
        stateNames[data.state] = {
            name: data.name,
            website: data.covid19Site,
            twitter: data.twitter,
            notes: data.notes
        }
    })
    
    return stateNames;
}


export const getFormattedDateForFiltering = (date) => {
    var d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return year + month + day;
}

export const getFreshData = async() => {
    
    //console.log("Fetching Data from https://covidtracking.com/...");

    let historyData = null;
    let stateInfo = null;
    let countryData = null;

    try {

        const stateInfoRes = await fetch('https://covidtracking.com/api/v1/states/info.json');
        if (stateInfoRes.ok) {
            
            const json = await stateInfoRes.json();
            stateInfo = getStatesInfo(json);
        }
        else {
            throw Error(stateInfoRes.statusText);
        }

        const historicalDataRes = await fetch('https://covidtracking.com/api/v1/states/daily.json');
        if (historicalDataRes.ok) {
            
            const json = await historicalDataRes.json();
            historyData = json;
        }
        else {
            throw Error(historicalDataRes.statusText);
        }

        const statesCurrentDataRes = await fetch('https://covidtracking.com/api/v1/states/current.json');
        if (statesCurrentDataRes.ok) {
            
            const json = await statesCurrentDataRes.json();
            json.forEach(data => {
                stateInfo[data.state].grade = data.dataQualityGrade
            });
        }
        else {
            throw Error(statesCurrentDataRes.statusText);
        }

        const countryDataRes = await fetch('https://covidtracking.com/api/v1/us/daily.json');
        if (countryDataRes.ok) {
            
            const json = await countryDataRes.json();
            countryData = json;
        }
        else {
            throw Error(countryDataRes.statusText);
        }

        return {
            statesHistoryData: historyData,
            stateInformation: stateInfo,
            countryHistoryData: countryData
        }

    } catch (error) {
        console.log(error);
    }
}

export const getCountryHistoryData = (countryHistoryData, startFromDate) => {

    return countryHistoryData
        .filter(data => data.date >= startFromDate )
        .sort(function (a, b) {
            return a.date - b.date;
        });
    
}