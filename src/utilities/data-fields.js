export const DATE_RANGES = {
    15: "Last 15 days",
    30: "Last 30 days",
    45: "Last 45 days",
    60: "Last 60 days",
    90: "Last 3 months",
    120: "Last 4 months",
    150: "Last 5 months",
    180: "Last 6 Months"
}


export const DATA_FIELD_COLORS = [
    '#138E05',
    '#A15B81',
    '#2E16A6',
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


export const DATA_FIELD_GROUPS = {
    
    increase: [
        "positiveIncrease",
        "deathIncrease",
        "hospitalizedIncrease"
    ],
    hospitalization: [
        "hospitalizedCurrently",
        "inIcuCurrently",
        "onVentilatorCurrently"
    ],
    testing:[
        "totalTestResults",
        "positive",
        //"negative",
        //"pending", 
        "death"
    ]
};

export const DATA_FIELD_GROUPS_DISPLAY_NAME = {
    increase: "Daily Increases",
    hospitalization: "Current Hospitalizations",
    testing: "Testing Totals"
}

export const DATA_FIELD_DISPLAY_NAMES = {   
    deathIncrease: "New Deaths",
    positiveIncrease: "New Cases",
    hospitalizedIncrease: "New Hospitalizations",

    hospitalizedCurrently: "Hospitalized",
    inIcuCurrently: "In ICU",
    onVentilatorCurrently: "On Ventilators",

    positive: "Positive",
    negative: "Negative",
    pending: "Pending",
    totalTestResults: "Tests Taken",
    death: "Death"
};

export const DATA_FIELD_AGE_GROUP_DISPLAY_NAMES = {

}


export const DEFAULT_DATA_FIELD = [
    "positiveIncrease",
    "deathIncrease",
    "hospitalizedIncrease"
]

export const  STATE_INFO_JSON_FIELDS = [
    "dataQualityGrade",
    "positive",
    "death"
];

export const COUNTY_SORT_FIELDS = {
    SORT_BY_DEATHS : "deaths",
    SORT_BY_CASES : "cases",
    SORT_BY_COUNTY : "county"
}