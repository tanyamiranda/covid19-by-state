export const DATE_RANGES = {
    15: "Last 15 days",
    30: "Last 30 days",
    45: "Last 45 days",
    60: "Last 60 days"
}

export const CHART_OPTIONS = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    title: { display: false},
    tooltips: {mode: 'index', intersect: false},
    hover: {mode: 'nearest', intersect: true},
    legend: {position:'top', labels: {boxWidth:5, fontSize:14, usePointStyle:true}},
    elements: {
        point:{
            radius: 0
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }},
    scales: {
        xAxes: [{
            display: true,
            ticks: {
                callback: function(dataLabel, index) {
                    // Hide the label of every 2nd dataset. return null to hide the grid line too
                    return index % 3 === 0 ? dataLabel : '';
                }
            },
            scaleLabel: {
                display: true
            }
        }],
        yAxes: [{
            display: true,
            padding:0,
            scaleLabel: {
                display: false
            },
            ticks: {
                beginAtZero:true
            }
        }]
    }
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
        "deathIncrease",
        "hospitalizedIncrease",
        "positiveIncrease"
    ],
    hospitalization: [
        "hospitalizedCurrently",
        "inIcuCurrently",
        "onVentilatorCurrently"
    ],
    testing:[
        "positive",
        "negative",
        "pending",
        "totalTestResults"
    ]
};

export const DEFAULT_DATA_FIELD = [
    "deathIncrease",
    "hospitalizedIncrease",
    "positiveIncrease"
]

export const  STATE_INFO_JSON_FIELDS = [
    "dataQualityGrade",
    "positive",
    "death"
]