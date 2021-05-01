export const DATE_RANGES = {
    30: "Last 30 days",
    45: "Last 45 days",
    60: "Last 60 days",
    90: "Last 3 months",
    120: "Last 4 months",
    150: "Last 5 months",
    180: "Last 6 months",
    270: "Last 9 months",
    365: "Last 12 months",
    500: "All Time"
}

export const DATE_RANGES_DEFAULT = "90";

export const DATA_FIELD_COLORS = [
    'green',
    'red',
    'blue',
    '#146AD4',
    '#A9D422',
    '#18F8BB',
    '#AFC044',
    '#3B9793',
    '#822611',
    '#FB2E76',
    '#A5CA71',
    '#983538',
    '#082BD9',
    '#2E136A',
    '#05BB78',
    '#44A4AD',
    '#28FD7E',
    '#387862'
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
    icu_beds_covid: "ICU"
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