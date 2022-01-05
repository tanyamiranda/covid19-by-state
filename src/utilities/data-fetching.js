import {STATE_INFO} from './states-meta-data';

// CDC Access Token to be allowed to pull more than 5k worth of records
const CDC_QUERY_ACCESS_TOKEN = "&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N";

// Cases and Deaths over time
const URL_CDC_CASES_DEATHS_BY_STATE_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date";
const URL_CDC_CASES_DEATHS_USA_HISTORY = "https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,'USA' as state,sum(new_case) as new_case,sum(new_death) as new_death&$group=submission_date&$order=submission_date";

// Cases and Deaths by age groups
const URL_CDC_DATA_AGE_GROUPS_PER_MONTH = "https://data.cdc.gov/resource/9bhg-hcku.json?$select=year,month,state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by year,month,state,age_group&$order=year,month";

// Hospital Data over time
const URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,inpatient_beds_used_covid as inpatient_beds_covid,total_staffed_adult_icu_beds as icu_beds, staffed_icu_adult_patients_confirmed_covid as icu_beds_covid&$order=date";
const URL_CDC_HOSPTIAL_DATA_USA_HISTORY = "https://healthdata.gov/resource/g62h-syeh.json?$select=date,'USA' as state,sum(inpatient_beds)as inpatient_beds,sum(inpatient_beds_used_covid) as inpatient_beds_covid,sum(total_staffed_adult_icu_beds) as icu_beds,sum(staffed_icu_adult_patients_confirmed_covid) as icu_beds_covid&$group=date&$order=date";

export const getFreshData = async() => {
    
    try {  
        // Get cases and deaths data history for each state and USA and merge
        const dataHistoryByState = await fetchJsonData(URL_CDC_CASES_DEATHS_BY_STATE_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const dataHistoryUSA = await fetchJsonData(URL_CDC_CASES_DEATHS_USA_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const cdcHistoryByJurisdiction = dataHistoryByState.concat(dataHistoryUSA);

        // Get cases and deaths TOTALS from history
        const dataCasesDeathsTotals = getCaseDeathTotalsFromHistoryData(cdcHistoryByJurisdiction);

        // Get hospital data history for each state and USA and merge
        const dataHospitalByState = await fetchJsonData(URL_CDC_HOSPITAL_DATA_BY_STATE_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const dataHospitalUSA =await fetchJsonData(URL_CDC_HOSPTIAL_DATA_USA_HISTORY + CDC_QUERY_ACCESS_TOKEN);
        const cdcHospitalDataByJurisdiction = dataHospitalByState.concat(dataHospitalUSA);

        // Get last sumbission date to use for getting TOTALS
        const lastDate = (cdcHospitalDataByJurisdiction.reduce(function(prev, current) {
            return (prev.date > current.date) ? prev : current
        })).date

        // Get hospital data TOTALS from history
        const dataHospitalTotals = cdcHospitalDataByJurisdiction
            .filter(function (data) {
                const date = data.date;
                return date === lastDate;
            });    
        
        // Merge TOTALS for cases and deaths and hospitals into one object 
        const cdcTotalsByJurisdiction = await getTotalsByJurisdiction(dataCasesDeathsTotals, dataHospitalTotals);
        
        // Get CDC Monthly Death Totals by Age Groups 
        const deathsByAgeGroups = await fetchJsonData(URL_CDC_DATA_AGE_GROUPS_PER_MONTH + CDC_QUERY_ACCESS_TOKEN);
        
        return {
            dataRefreshTimestamp: new Date(),
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

const getTotalsByJurisdiction = async(dataCasesDeathsByState, dataHospitalTotals) => {

    let totalsByState= [];
    let stateKeys = Object.keys(STATE_INFO);
    
    stateKeys.forEach((state) => {

        //if (state !== "USA") {

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
       // }
    })

    //let dataTotalsUSA = getTotalsForUSA(totalsByState);
    //totalsByState.push(dataTotalsUSA);
    

    return totalsByState;
}

export const getCaseDeathTotalsFromHistoryData = (stateHistoryData) => {

    var result = [];
    stateHistoryData.reduce(
        function(state_totals, value) {
            if (!state_totals[value.state]) {
                state_totals[value.state] = {
                    state: value.state,
                    total_cases: !Number(value.new_case) ? 0 : Number(value.new_case),
                    total_deaths: !Number(value.new_death) ? 0 : Number(value.new_death)
                };
                result.push(state_totals[value.state]);
            }
            else {
                state_totals[value.state].total_cases += !Number(value.new_case) ? 0 : Number(value.new_case);
                state_totals[value.state].total_deaths += !Number(value.new_death) ? 0 : Number(value.new_death);
            }
            return state_totals;
        }
    , {});

    return result;

}