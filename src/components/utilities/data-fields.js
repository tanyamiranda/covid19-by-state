export const DATA_FIELD_VALUES = [
    
    "positive",
    "negative",
    "pending",
    "totalTestResults",

    "hospitalizedCurrently",
    "inIcuCurrently",
    "onVentilatorCurrently",
    "death",
    "recovered",
    
    "hospitalizedCumulative",
    "inIcuCumulative",
    "onVentilatorCumulative",    
    
    "deathIncrease",
    "hospitalizedIncrease",
    "negativeIncrease",
    "positiveIncrease",
    "totalTestResultsIncrease"
]

export const DATE_RANGES = {
    15: "Last 15 days",
    30: "Last 30 days",
    45: "Last 45 days",
    60: "Last 60 days"
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

export const DEFAULT_SELECTED_DATA_FIELDS = {

    "hospitalizedCurrently": true,
    "inIcuCurrently": true,
    "onVentilatorCurrently" : true,
    "death": true
}

export const US_STATES_DATA = {
    AK:"Alaska",
    AL:"Alabama",
    AR:"Arkansas",
    AS:"American Samoa",
    AZ:"Arizona",
    CA:"California", 
    CO:"Colorado", 
    CT:"Connecticut", 
    DC:"District Of Columbia",
    DE:"Delaware", 
    FL:"Florida", 
    GA:"Georgia",
    GU:"Guam", 
    HI:"Hawaii", 
    IA:"Iowa", 
    ID:"Idaho", 
    IL:"Illinois", 
    IN:"Indiana", 
    KS:"Kansas", 
    KY:"Kentucky", 
    LA:"Louisiana", 
    MA:"Massachusetts",
    MD:"Maryland", 
    ME:"Maine", 
    MI:"Michigan",
    MN:"Minnesota",
    MO:"Missouri", 
    MP:"Northern Mariana Islands",
    MS:"Mississippi", 
    MT:"Montana", 
    NC:"North Carolina", 
    ND:"North Dakota", 
    NE:"Nebraska", 
    NH:"New Hampshire", 
    NJ:"New Jersey", 
    NM:"New Mexico", 
    NV:"Nevada", 
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
    VA:"Virginia", 
    VI:"US Virgin Islands", 
    VT:"Vermont", 
    WA:"Washington", 
    WI:"Wisconsin", 
    WV:"West Virginia", 
    WY:"Wyoming"
}


export const DATA_FIELD_GROUPS = {
    
    testing:[
        "positive",
        "negative",
        "pending",
        "totalTestResults"
    ],
    patient: [
        "hospitalizedCurrently",
        "inIcuCurrently",
        "onVentilatorCurrently",
        "death",
        "recovered"
    ],
    cumulative: [
        "hospitalizedCumulative",
        "inIcuCumulative",
        "onVentilatorCumulative"
    ],
    increase: [
        "deathIncrease",
        "hospitalizedIncrease",
        "negativeIncrease",
        "positiveIncrease",
        "totalTestResultsIncrease"
    ]
};

export const DATA_FIELDS = {
    
    positive: "Positive Result",
    negative: "Negative Result",
    totalTestResults: "Total Test Results",
    pending: "Pending",
    death: "Death", 
    recovered: "Recovered",
    hospitalizedCurrently: "Currently Hospitalized",
    inIcuCurrently: "Currently In ICU",
    onVentilatorCurrently: "Currently On Ventilator",
    hospitalizedCumulative: "Hospitalized Cumulative",
    inIcuCumulative: "In ICU Cumulative",
    onVentilatorCumulative: "On Ventilator Cumulative",    
    deathIncrease: "Death Increases",
    hospitalizedIncrease: "Hospitalized Increases",
    negativeIncrease: "Negative Increases",
    positiveIncrease: "Positive Increases",
    totalTestResultsIncrease: "Total Test Results Increases"
}