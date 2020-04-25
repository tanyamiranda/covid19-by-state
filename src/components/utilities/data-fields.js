export const DATA_FIELD_VALUES = [

    "positive",
    "negative",
    "totalTestResults",
    
    "pending",

    "hospitalizedCurrently",
    "inIcuCurrently",
    "onVentilatorCurrently",
    
    "hospitalizedCumulative",
    "inIcuCumulative",
    "onVentilatorCumulative",
    
    "recovered",
    "death",
    "hospitalized",
    
    "deathIncrease",
    "hospitalizedIncrease",
    "negativeIncrease",
    "positiveIncrease",
    "totalTestResultsIncrease"
]

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

export const CHART_OPTIONS = {
    type:"line",
    responsive: true,
    title: { display: false},
    tooltips: {mode: 'index', intersect: false},
    hover: {mode: 'nearest', intersect: true},
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Day'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
}

export const getDefaultFields = () => {

    const defaultFields = [];

    defaultFields[DATA_FIELD_VALUES[0]] = true;
    defaultFields[DATA_FIELD_VALUES[1]] = true;
    defaultFields[DATA_FIELD_VALUES[2]] = true;

    return defaultFields;
}

export const STATES = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MP",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
]