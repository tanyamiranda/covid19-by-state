export const YEARS_DEFAULT = "0";
export const USA_IDENTIFIER = "USA";
export const NYC_IDENTIFIER = "NYC";

/*
 This is needed to maintain descending year order.
 Using Object.keys() to get keys from YEARS sorts
 the years in ascending order.
*/
export const YEAR_KEYS = [
    "0",
/*    "months-6",     // Needed to remove all recent options because CDC and HealthData stopped collecting constant data in May of 2023
    "months-9",
    "months-12",
*/    "2023",
    "2022",
    "2021", 
    "2020"
];

export const YEARS = {
    "months-6": "Last 6 months",
    "months-9": "Last 9 months",
    "months-12": "Last 12 months",
    "2023": "All 2023",
    "2022": "All 2022",
    "2021": "All 2021",
    "2020": "All 2020",
    "0": "All Time",
}

export const DATA_FIELD_COLORS = [
    'green',
    'red',
    'blue',
    'orange',
    'pink',
    'lime',
    'black',
    'cyan',
    'purple',
    'brown',
    'voilet',
    'chartreuse',
    'CadetBlue',
    'darkgreen',
    'DarkGoldenRod',
    'darkslategray',
    'crimson',
    'Turquoise',
    'steelblue',
    'sand',
    'salmon'
];

/**
 * User-friendly display names for specific fields from CDC
 */
export const DATA_FIELD_DISPLAY_NAMES = {   
    new_case: "New Cases",
    new_death: "New Deaths",
    inpatient_beds_covid: "Inpatient",
    icu_beds_covid: "ICU"
};

/**
 * Each Chart has an identifier that is used throught the code
 */
export const CHART_IDENTIFIER = {
    DEATHS_BY_AGE: "DEATHS_BY_AGE",
    VAX_FIRST_DOSE: "VAX_FIRST_DOSE",
    VAX_COMPLETE_DOSE: "VAX_COMPLETE_DOSE",
    EXCESS_DEATHS: "EXCESS_DEATHS",
    EXCESS_DEATHS_PCT: "EXCESS_DEATHS_PCT",
    HOSPITAL_DATA: "HOSPITAL_DATA",
    AGE_GROUP_SUMMARY: "AGE_GROUP_SUMMARY",
    CASES_DEATHS: "CASES_DEATHS" 
}

export const CHART_META_DATA = {
    DEATHS_BY_AGE: {
        title: "Covid Deaths By Age (Monthly)",
        description: "Deaths involving Covid-19 by age group.",
        chartType: "line",
        isGroupedByAge: true
    },
    VAX_FIRST_DOSE: {
        title:"% Vaxed By Age - First Dose",
        description: "Percent of people vaccinated with first dosage by age group.",
        chartType: "line",
        isGroupedByAge: true
    },
    VAX_COMPLETE_DOSE: {
        title: "% Vaxed By Age - Completed",
        description: "Percent of people vaccinated with complete dosage by age group.",
        chartType: "line",
        isGroupedByAge: true
    },
    EXCESS_DEATHS: {
        title: "Excess Deaths By Age - Weighted",
        description: "All excess Deaths above or below expected range by age group.",
        chartType: "line",
        isGroupedByAge: true
    },
    EXCESS_DEATHS_PCT: {
        title: "% Excess Deaths By Age - Weighted",
        description: "Weighted percentage of all excess Deaths above or below expected range by age group.",
        chartType: "line",
        isGroupedByAge: true
    },
    HOSPITAL_DATA: {
        title: "Hospital Inpatient & ICU (Daily)",
        description: "Patients admitted to inpatient care and ICU to treat Covid-19 symptoms.",
        chartType: "line",
        isGroupedByAge: false
    },
    AGE_GROUP_SUMMARY: {
        title: "All Deaths by Age Summary",
        description: "Summary of all deaths by age group alongside Covid-19 deaths for comparison.",
        chartType: "bar"
    },
    CASES_DEATHS: {
        title:"New Cases & Deaths (Weekly)",
        description: "New confirmed and probable Covid-19 cases and deaths.",
        chartType: "line",
        isGroupedByAge: false
    } 
}

/**
 * List of fields used in time series charts.
 * Date grouped by age will only show first field per age group.
 */
export const CDC_FIELDS_FOR_CHART = {
    DEATHS_BY_AGE: ["covid_19_deaths"],
    VAX_FIRST_DOSE: ["first_dose_pct"],
    VAX_COMPLETE_DOSE: ["completed_pct"],
    EXCESS_DEATHS: ["covid19_weighted"],
    EXCESS_DEATHS_PCT: ["percent_above_average_weighted"],
    HOSPITAL_DATA: ["inpatient_beds_covid","icu_beds_covid"],
    CASES_DEATHS: ["new_case","new_death"],
    AGE_GROUP_SUMMARY: []
}

/**
 * Data grouped by age must have age groups predefined.
 * Key matches value from CHART_IDENTIFIER
 */
export const CDC_AGE_GROUP_VALUES = {
    DEATHS_BY_AGE : [
        '0-17 years', 
        '18-29 years', 
        '30-39 years',
        '40-49 years',
        '50-64 years',
        '65-74 years',
        '75-84 years',
        '85 years and over'],
    AGE_GROUP_SUMMARY : [
        '0-17 years', 
        '18-29 years', 
        '30-39 years',
        '40-49 years',
        '50-64 years',
        '65-74 years',
        '75-84 years',
        '85 years and over'],
    VAX_FIRST_DOSE: [
        "5 - 11 Years",
        "12 - 17 Years",
        "18 - 24 Years",
        "25 - 39 Years",
        "40 - 49 Years",
        "50 - 64 Years",
        "65 - 74 Years",
        "75+ Years"
    ],
    VAX_COMPLETE_DOSE: [
        "5 - 11 Years",
        "12 - 17 Years",
        "18 - 24 Years",
        "25 - 39 Years",
        "40 - 49 Years",
        "50 - 64 Years",
        "65 - 74 Years",
        "75+ Years"
    ],
    EXCESS_DEATHS: [
        "0-14 Years",
        "15-19 Years",
        "20-24 Years",
        "25-29 Years",
        "30-34 Years",
        "35-39 Years",
        "40-44 Years",
        "45-49 Years",
        "50-54 Years",
        "55-59 Years",
        "60-64 Years",
        "65-69 Years",
        "70-74 Years",
        "75-79 Years",
        "80-84 Years",
        "85+"
    ],
    EXCESS_DEATHS_PCT: [
        "0-14 Years",
        "15-19 Years",
        "20-24 Years",
        "25-29 Years",
        "30-34 Years",
        "35-39 Years",
        "40-44 Years",
        "45-49 Years",
        "50-54 Years",
        "55-59 Years",
        "60-64 Years",
        "65-69 Years",
        "70-74 Years",
        "75-79 Years",
        "80-84 Years",
        "85+"
    ]
};