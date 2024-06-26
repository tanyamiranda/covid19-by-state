import {getStateCodes} from './states-data';

// Added to queries because CDC decided to stop keeping track of data. 
// This way the app will only show valid data until the date of collection and not show any emopty charts.
const DATASET_CUTOFF_DATE = "2023-05-01";

// CDC Access Token to be allowed to pull more than 5k worth of records
const CDC_QUERY_ACCESS_TOKEN = "&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N";

// Cases and Deaths over time
//const URL_CDC_CASES_DEATHS_BY_STATE_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date, state";
//const URL_CDC_CASES_DEATHS_USA_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,'USA' as state,sum(new_case) as new_case,sum(new_death) as new_death&$group=submission_date&$order=submission_date";

const URL_CDC_CASES_DEATHS_BY_STATE_HISTORY = "https://data.cdc.gov/resource/pwn4-m3yp.json?$select=end_date as date,state,new_cases as new_case,new_deaths as new_death&$order=date,state&$where=date<'" + DATASET_CUTOFF_DATE + "'";
const URL_CDC_CASES_DEATHS_USA_HISTORY = "https://data.cdc.gov/resource/pwn4-m3yp.json?$select=end_date as date,'USA' as state,sum(new_cases) as new_case,sum(new_deaths) as new_death&$group=date&$order=date&$where=date<'" + DATASET_CUTOFF_DATE + "'";

// Cases and Deaths by age groups
const URL_CDC_DEATHS_BY_AGE = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=start_date as date,state,age_group,covid_19_deaths,total_deaths where start_date < '"+ DATASET_CUTOFF_DATE + "' and sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') order by start_date,state,age_group ";

// Hospital Data over time
const URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,inpatient_beds_used_covid as inpatient_beds_covid,total_staffed_adult_icu_beds as icu_beds, staffed_icu_adult_patients_confirmed_covid as icu_beds_covid&$order=date, state&$where=date<'" + DATASET_CUTOFF_DATE + "'";
const URL_CDC_HOSPTIAL_DATA_USA_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,'USA' as state,sum(inpatient_beds)as inpatient_beds,sum(inpatient_beds_used_covid) as inpatient_beds_covid,sum(total_staffed_adult_icu_beds) as icu_beds,sum(staffed_icu_adult_patients_confirmed_covid) as icu_beds_covid&$group=date&$order=date&$where=date<'" + DATASET_CUTOFF_DATE + "'";

const URL_NYC_HOSPITAL_DATA = "https://health.data.ny.gov/resource/jw46-jpb7.json?$select=as_of_date as date,'NYC' as state, sum(total_staffed_acute_care) as inpatient_beds, sum(patients_currently) as inpatient_beds_covid, sum(total_staffed_icu_beds_1) as icu_beds, sum(patients_currently_in_icu) as icu_beds_covid where as_of_date < '" + DATASET_CUTOFF_DATE + "' and ny_forward_region = 'NEW YORK CITY' group by date, state order by date desc";

// Vaccinations over time
//const URL_CDC_VACCINATIONS_BY_AGE = "https://data.cdc.gov/resource/gxj9-t96f.json?$select=cdc_case_earliest_dt as date,'USA' as state,agegroupvacc as age_group,administered_dose1_pct * 100 as first_dose_pct,series_complete_pop_pct * 100 as completed_pct&$order=cdc_case_earliest_dt";

// Excess Deaths by Age Group
const URL_CDC_EXCESS_DEATHS_BY_AGE = "https://data.cdc.gov/resource/m74n-4hbs.json?$select=weekending as date, 'USA' as state, agegroup as age_group, percent_above_average_weighted, covid19_weighted where RaceEthnicity='All Race/Ethnicity Groups' and Sex='All Sexes' and agegroup not in ('All Ages', 'Not stated') and MMWRyear in ('2020','2021','2022','2023') order by date";



export const getFreshData = async() => {
    
    try {  
        // Get cases and deaths data history for each state and USA and merge
        const dataHistoryByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const dataHistoryUSA = await fetchJsonData(URL_CDC_CASES_DEATHS_USA_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const cdcHistoryByJurisdiction = dataHistoryByState.concat(dataHistoryUSA);

        // Get hospital data history for each state, NYC, USA and then merge
        const dataHospitalByState = await fetchJsonData(URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const dataHospitalUSA =await fetchJsonData(URL_CDC_HOSPTIAL_DATA_USA_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const dataHospitalNYCOnly = await fetchJsonData(URL_NYC_HOSPITAL_DATA + CDC_QUERY_ACCESS_TOKEN);
        const cdcHospitalDataByJurisdiction = dataHospitalByState.concat(dataHospitalUSA).concat(dataHospitalNYCOnly);

        /* **********************************
        Removed Totals Sections from Dashboard.

        // Get cases and deaths TOTALS from history
        const dataCasesDeathsTotals = getTotalsForEachState(cdcHistoryByJurisdiction);

        // Get last sumbission date to use for getting totals
        const lastDate = (dataHospitalByState.reduce(function(prev, current) {
            return (prev.date > current.date) ? prev : current
        })).date

        // Get NYC last date
        const nycLastDate = (dataHospitalNYCOnly.reduce(function(prev, current) {
            return (prev.date > current.date) ? prev : current
        })).date

        // Get hospital data TOTALS from history
        const dataHospitalTotals = cdcHospitalDataByJurisdiction
            .filter(function (data) {
                const date = data.date;
                return (data.state==='NYC' && date===nycLastDate) || date === lastDate;
            });    
        
        // Merge TOTALS for cases and deaths and hospitals into one object 
        const cdcTotalsByJurisdiction = await getTotalsByJurisdiction(dataCasesDeathsTotals, dataHospitalTotals);
        */

        // Get CDC Monthly Death Totals by Age Groups 
        const deathsByAgeGroups = await fetchJsonData(URL_CDC_DEATHS_BY_AGE + CDC_QUERY_ACCESS_TOKEN);
        
        // Get Vaccinations by Age Groups   
        //const cdcVaxByAgeGroup = await fetchJsonData(URL_CDC_VACCINATIONS_BY_AGE + CDC_QUERY_ACCESS_TOKEN);

        // Get CDC Excess Deaths by Age Groups
        const cdcExcessDeathsByAgeGroups = await fetchJsonData(URL_CDC_EXCESS_DEATHS_BY_AGE + CDC_QUERY_ACCESS_TOKEN);

        return {
            dataRefreshTimestamp: new Date(),
            //cdcTotalsByJurisdiction: cdcTotalsByJurisdiction,
            cdcHistoryByJurisdiction: cdcHistoryByJurisdiction,
            cdcHospitalDataByJurisdiction: cdcHospitalDataByJurisdiction,
            //cdcVaxByAgeGroup: cdcVaxByAgeGroup,
            cdcExcessDeathsByAgeGroup: cdcExcessDeathsByAgeGroups,
            cdcDeathsByAgeGroup : deathsByAgeGroups
        }

    } catch (error) {
        console.log(error);
    }
}


export const fetchJsonData = async(url) => {
    try{
        let json = null;

        //console.log("url = " + url);

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

export const getTotalsForUSA = (totalsByState) => {

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

export const getTotalsByJurisdiction = async(dataCasesDeathsByState, dataHospitalTotals) => {

    let totalsByState= [];
    let stateKeys = getStateCodes();
    
    stateKeys.forEach((state) => {

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
      
    })

    return totalsByState;
}


export const getTotalsForEachState = (stateHistoryData) => {
    var totals = [];
    stateHistoryData.forEach((record) => {
                
        const new_case = Number(record.new_case);
        const new_death = Number(record.new_death);
        const state = record.state;

        // Debugging - CDC records have negative values, was affecting totals
        // if (new_case < 0 || new_death < 0)
        //    console.log("negative values found: " + JSON.stringify(record)); 

        const stateTotal = totals.find(data => data.state===state);

        if (!stateTotal) {
            const newStateTotal = {
                state: state,
                total_cases: new_case,
                total_deaths: new_death
            }

            totals.push(newStateTotal);
        }
        else {
            stateTotal.total_cases += new_case;
            stateTotal.total_deaths += new_death;
        }
    });

    return totals;
}
