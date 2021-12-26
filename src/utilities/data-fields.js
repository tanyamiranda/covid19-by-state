/*
 This is needed to maintain descending year order.
 Using Object.keys() to get keys from YEARS sorts
 the years in ascending order.
*/
export const YEAR_KEYS = [
    "months-6",
    "months-9",
    "months-12",
    "2021", 
    "2020",
    "0"
];

export const YEARS = {
    "months-6": "Last 6 months",
    "months-9": "Last 9 months",
    "months-12": "Last 12 months",
    "2021": "All 2021",
    "2020": "All 2020",
    "0": "All Time",
}

export const YEARS_DEFAULT = "months-6";

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
    'brown'
];

export const USA_IDENTIFIER = "USA";

export const US_STATES_DATA = {
    USA:"United States",
    AL:"Alabama",
    AK:"Alaska",
    AR:"Arkansas",
    AZ:"Arizona",
    CA:"California", 
    CO:"Colorado", 
    CT:"Connecticut", 
    DE:"Delaware",
    DC:"District Of Columbia", 
    FL:"Florida", 
    GA:"Georgia",
    HI:"Hawaii", 
    ID:"Idaho", 
    IL:"Illinois", 
    IA:"Iowa", 
    IN:"Indiana", 
    KS:"Kansas", 
    KY:"Kentucky", 
    LA:"Louisiana",
    ME:"Maine",  
    MD:"Maryland",
    MA:"Massachusetts", 
    MI:"Michigan",
    MN:"Minnesota",
    MS:"Mississippi", 
    MO:"Missouri", 
    MT:"Montana", 
    NC:"North Carolina", 
    ND:"North Dakota", 
    NE:"Nebraska", 
    NV:"Nevada",
    NH:"New Hampshire", 
    NJ:"New Jersey", 
    NM:"New Mexico",  
    NY:"New York", 
    OH:"Ohio", 
    OK:"Oklahoma", 
    OR:"Oregon", 
    PA:"Pennsylvania", 
    PR:"Puerto Rico", 
    RI:"Rhode Island",
    SC:"South Carolina", 
    SD:"South Dakota", 
    TN:"Tennessee", 
    TX:"Texas", 
    UT:"Utah", 
    VT:"Vermont", 
    VA:"Virginia",
    WA:"Washington", 
    WI:"Wisconsin", 
    WV:"West Virginia", 
    WY:"Wyoming"
}

export const DATA_FIELD_DISPLAY_NAMES = {   
    new_case: "New Cases",
    new_death: "New Deaths",
    inpatient_beds_covid: "Inpatient",
    icu_beds_covid: "ICU",
    ages_0_17:"0-17",
    ages_18_29:"18-29",
    ages_30_39:"30-39",
    ages_40_49:"40-49",
    ages_50_64:"50-64",
    ages_65_74:"65-74",
    ages_75_84:"75-84",
    ages_85:"85+"
};


export const COUNTY_SORT_FIELDS = {
    SORT_BY_DEATHS : "deaths",
    SORT_BY_CASES : "cases",
    SORT_BY_COUNTY : "county"
};


export const CDC_DATA_FIELDS_DAILY = [
    "new_case",
    "new_death",
];

export const CDC_DATA_FIELDS_TOTALS = [
    "max_tot_cases",
    "max_tot_death",
];

export const CDC_DATA_CHART_FIELD_GROUPS = {
    dailyTotals: [
        "new_case",
        "new_death"
    ],
    hospitalData: [
        "inpatient_beds_covid",
        "icu_beds_covid"
    ]
}

export const DATA_X_LABELS = [
    "Jan 2020",
    "Feb 2020",
    "Mar 2020",
    "Apr 2020",
    "May 2020",
    "Jun 2020",
    "Jul 2020",
    "Aug 2020",
    "Sep 2020",
    "Oct 2020",
    "Nov 2020",
    "Dec 2020",
    "Jan 2021",
    "Feb 2021",
    "Mar 2021",
    "Apr 2021",
    "May 2021",
    "Jun 2021",
    "Jul 2021",
    "Aug 2021",
    "Sep 2021",
    "Oct 2021",
    "Nov 2021",
    "Dec 2021",
];


export const CDC_AGE_GROUPS = ["0-17","18-29","30-39","40-49","50-64","65-74","75-84","85+"];

export const AGE_GROUP_DATA_FIELDS = [
    "ages_0_17",
    "ages_18_29",
    "ages_30_39",
    "ages_40_49",
    "ages_50_64",
    "ages_65_74",
    "ages_75_84",
    "ages_85"]