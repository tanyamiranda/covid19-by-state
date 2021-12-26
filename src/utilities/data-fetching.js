import {STATE_INFO} from './states-meta-data';

//const URL_DEATHS_BY_AGE_DATA = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=year,state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Year' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by year,state,age_group&$order=year,state,age_group"+ CDC_TOKEN;;
const URL_COUNTY_LEVEL_DATA = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv"


/* New Data Sets from CDC */
const CDC_TOKEN = "&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N";
const URL_CDC_CASES_DEATHS_BY_STATE_TOTAL = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=state,max(tot_cases) as total_cases,max(tot_death) as total_deaths&$group=state&$order=state" + CDC_TOKEN;
const URL_CDC_CASES_DEATHS_BY_STATE_HISTORY= "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date,state" + CDC_TOKEN;
const URL_CDC_CASES_DEATHS_USA_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,'USA' as state,sum(new_case) as new_case,sum(new_death) as new_death&$group=submission_date&$order=submission_date" + CDC_TOKEN;

const URL_CDC_DATA_AGE_GROUPS_PER_MONTH = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=year,month,state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by year,month,state,age_group&$order=year,month,state,age_group"+ CDC_TOKEN;

const URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,%20inpatient_beds_used_covid%20as%20inpatient_beds_covid,total_staffed_adult_icu_beds%20as%20icu_beds,%20staffed_icu_adult_patients_confirmed_covid%20as%20icu_beds_covid&$order=date,state not in ('AS','FM','GU','MH','MP','PW','VI')" + CDC_TOKEN;
const URL_CDC_HOSPITAL_DATA_BY_STATE_TOTALS = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,%20inpatient_beds_used_covid%20as%20inpatient_beds_covid,total_staffed_adult_icu_beds%20as%20icu_beds,%20staffed_icu_adult_patients_confirmed_covid%20as%20icu_beds_covid&$where=state not in ('AS','FM','GU','MH','MP','PW','VI') and date=";
const URL_CDC_HOSPTIAL_DATA_USA_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,%22USA%22%20as%20state,sum(inpatient_beds)%20as%20impatient_beds,%20sum(inpatient_beds_used_covid)%20as%20inpatient_beds_covid,%20sum(total_staffed_adult_icu_beds)%20as%20icu_beds,%20sum(staffed_icu_adult_patients_confirmed_covid)%20as%20icu_beds_covid&$group=date&$order=date&$where=state not in ('AS','FM','GU','MH','MP','PW','VI')" + CDC_TOKEN;
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

export const getFreshData = async() => {
    
    let stateCountyInfo = [];
    let deathsByAgeGroups = []
    let cdcHistoryByJurisdiction = [];
    let cdcTotalsByJurisdiction = [];
    let cdcHospitalDataByJurisdiction=[];
    let cdcHospitalDataLastUpdate = "";

    try {
        
        let dataHistoryByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_HISTORY);
        let dataHistoryUSA = await fetchJsonData(URL_CDC_CASES_DEATHS_USA_HISTORY);
        cdcHistoryByJurisdiction = dataHistoryByState.concat(dataHistoryUSA);

        let dataHospitalByState = await fetchJsonData(URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY);
        let dataHospitalUSA =await fetchJsonData(URL_CDC_HOSPTIAL_DATA_USA_HISTORY);
        cdcHospitalDataByJurisdiction = dataHospitalByState.concat(dataHospitalUSA);

        // Get current hospital data per state 
        cdcHospitalDataLastUpdate = dataHospitalByState[dataHospitalByState.length -1].date;
        let hospitalTotalsURL = URL_CDC_HOSPITAL_DATA_BY_STATE_TOTALS + "'" + cdcHospitalDataLastUpdate + "'" + CDC_TOKEN;

        let dataHospitalTotals = await fetchJsonData(hospitalTotalsURL);
        let dataCasesDeathsByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_TOTAL);

        cdcTotalsByJurisdiction = await getTotalsByJurisdiction(dataCasesDeathsByState, dataHospitalTotals);
        
        deathsByAgeGroups = await fetchJsonData(URL_CDC_DATA_AGE_GROUPS_PER_MONTH);

        return {
            stateCountyInfo: stateCountyInfo,
            deathsByAgeGroups: deathsByAgeGroups,
            cdcTotalsByJurisdiction: cdcTotalsByJurisdiction,
            cdcHistoryByJurisdiction: cdcHistoryByJurisdiction,
            cdcHospitalDataByJurisdiction: cdcHospitalDataByJurisdiction
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


const getTotalsForUSA = (totalsByState) => {

    let total_cases = 0;
    let total_deaths = 0;
    let inpatient_beds = 0;
    let inpatient_beds_covid = 0;
    let icu_beds = 0;
    let icu_beds_covid = 0;
    let partiallyVaccinated = 0;
    let fullyVaccinated = 0;

    totalsByState.forEach(data => {
        total_cases += Number(data.total_cases);
        total_deaths += Number(data.total_deaths);
        inpatient_beds += Number(data.inpatient_beds);
        inpatient_beds_covid += Number(data.inpatient_beds_covid);
        icu_beds += Number(data.icu_beds);
        icu_beds_covid += Number(data.icu_beds_covid);
        partiallyVaccinated += Number(data.partiallyVaccinated);
        fullyVaccinated += Number(data.fullyVaccinated);
    })

    let totals = {
        state:"USA", 
        total_cases: total_cases, 
        total_deaths: total_deaths,
        inpatient_beds: inpatient_beds,
        inpatient_beds_covid: inpatient_beds_covid,
        icu_beds: icu_beds,
        icu_beds_covid: icu_beds_covid,
        partiallyVaccinated: partiallyVaccinated,
        fullyVaccinated: fullyVaccinated
    }

    return totals;
}

const getTotalsByJurisdiction = async(dataCasesDeathsByState, dataHospitalTotals) => {

    let totalsByState= [];
    let stateKeys = Object.keys(STATE_INFO);
    
    stateKeys.forEach((state) => {

        if (state !== "USA") {

            let casesDeathsData =dataCasesDeathsByState.find(data => data.state===state);
            let hospitalData = dataHospitalTotals.find(data => data.state===state);
            if (!hospitalData)
                hospitalData = {
                    inpatient_beds: 0,
                    inpatient_beds_covid: 0,
                    icu_beds: 0,
                    icu_beds_covid: 0
                }

            totalsByState.push({
                state: state,
                total_cases: Number(casesDeathsData.total_cases),
                total_deaths: Number(casesDeathsData.total_deaths),
                inpatient_beds: Number(hospitalData.inpatient_beds),
                inpatient_beds_covid: Number(hospitalData.inpatient_beds_covid),
                icu_beds: Number(hospitalData.icu_beds),
                icu_beds_covid: Number(hospitalData.icu_beds_covid)
            });
        }
    })

    let dataTotalsUSA = getTotalsForUSA(totalsByState);
    totalsByState.push(dataTotalsUSA);
    

    return totalsByState;
}

export const mergeVaccinationsData = (dataModerna, dataPfizer, dataJJ) => {

    let vaccinesByState = [];

    let stateKeys = Object.keys(STATE_INFO);
    
    stateKeys.forEach((state) => {

        const stateName = STATE_INFO[state].name.toUpperCase();

        let fullyVaccinated = 0;
        let partiallyVaccinated = 0;

        let moderna = dataModerna.find(data => data.jurisdiction.toUpperCase()===stateName);
        let pfizer = dataPfizer.find(data => data.jurisdiction.toUpperCase()===stateName);
        let jj = dataJJ.find(data => data.jurisdiction.toUpperCase()===stateName);

        if (moderna) { 
            partiallyVaccinated += Number(moderna.first_dose);
            fullyVaccinated += Number(moderna.second_dose);
        }

        if (pfizer) { 
            partiallyVaccinated += Number(pfizer.first_dose);
            fullyVaccinated += Number(pfizer.second_dose);
        }

        //JJ only required 1 dose
        if (jj) { 
            fullyVaccinated += Number(jj.first_dose);
        }

        vaccinesByState.push({
            state: state,
            partiallyVaccinated: partiallyVaccinated,
            fullyVaccinated: fullyVaccinated
        })

    });

    return vaccinesByState;

}