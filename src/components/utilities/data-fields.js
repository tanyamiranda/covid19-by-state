export const DATA_FIELDS = {

    POSITIVE: "positive",
    NEGATIVE: "negative",
    PENDING: "pending",
    HOSPITALIZED_CURRENTLY : "hospitalizedCurrently",
    HOSPITALIZED_CUMULATIVE : "hospitalizedCumulative",
    IN_ICU_CURRENTLY: "inIcuCurrently",
    IN_ICU_CUMULATIVE: "inIcuCumulative",
    ON_VENTILATOR_CURRENTLY: "onVentilatorCurrently",
    ON_VENTILATOR_CUMULATIVE: "onVentilatorCumulative",
    RECOVERED: "recovered",
    DEATH: "death",
    HOSPITALIZED: "hospitalized",
    TOTAL_TEST_RESULTS: "totalTestResults",
    DEATH_INCREASE: "deathIncrease",
    HOSPITALIZED_INCREASE: "hospitalizedIncrease",
    NEGATIVE_INCREASE: "negativeIncrease",
    POSITIVE_INCREASE: "positiveIncrease",
    TOTAL_TEST_RESULTS_INCREASE: "totalTestResultsIncrease"
}

export const DATA_FIELD_COLORS = [
    '#138E05',
    '#A15B81',
    '#2E136A',
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
    '#05BB78',
    '#44A4AD',
    '#28FD7E',
    '#387862'
];

export const CHART_OPTIONS = {
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