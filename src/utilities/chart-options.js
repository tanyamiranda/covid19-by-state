export const CHART_OPTIONS_FOR_STATE_HISTORY = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    title: { display: false},
    tooltips: {
        mode: 'index', 
        intersect: false,
        bodyAlign: 'left',
        position: 'nearest',
        callbacks: {
            label: function(tooltipItem, data) {
                var type = data.datasets[tooltipItem.datasetIndex].label;
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return type + " : " + parseInt(value).toLocaleString();
            }
        }
    },
    interaction: {
        intersect: false,
        axis: 'x'
    },
    legend: {position:'top', labels: {boxWidth:5, fontSize:14, usePointStyle:true, padding:15}},
    elements: {
        point:{
            radius: 0
        }
    },
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
   
    scales: {
        xAxes: [{
            display: true,
            type: 'time',
            gridLines: {
              display:true
            },
            time: {
              minUnit: 'month',
              tooltipFormat:'MM/DD/YYYY'
            },
            scaleLabel: {
                display: true
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: false
            },
            ticks: {
                min: 0,
                beginAtZero:true,
                callback: function(label) {
                    return formatYAxisDisplay(label);
                }                
            }
        }]
    }
}

export const getChartDisplayForAgeGroupSeries = () => {
    let chartOptions =JSON.parse(JSON.stringify(CHART_OPTIONS_FOR_STATE_HISTORY));
    chartOptions["scales"]["xAxes"][0]["time"]["tooltipFormat"] = "MMM YYYY";
    return chartOptions;
}

export const CHART_OPTIONS_FOR_AGE_GROUPS = {
    aspectRatio: 1,
    maintainAspectRatio: false,
    responsive: true,
    title: { display: false},
    tooltips: {
        mode: 'index', 
        intersect: false,
        bodyAlign: 'left',
        callbacks: {
            label: function(tooltipItem, data) {
              var type = data.datasets[tooltipItem.datasetIndex].label;
              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return type + " : " + parseInt(value).toLocaleString();
            }
          }
    },
    hover: {mode: 'nearest', intersect: true},
    legend: {position:'top', labels: {boxWidth:5, fontSize:14, usePointStyle:true, padding: 10}},
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
        xAxes:[{
            stacked: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        yAxes:[{
            // stacked:false - places bars in FRONT of each other instead of on TOP of each other
            // if set to true, the two bars are combined into one bar with a aggregate total.
            stacked: false, 
            ticks: {
                beginAtZero: true,
                callback: function(label) {
                    return formatYAxisDisplay(label);
                }
              }
            }
        ]
    }
}

// Display K for thousands, M for millions
// Instead of 200000 display 200K
// Instead of 1900000 display 1M
const formatYAxisDisplay = (labelText) => {

    const label = Number(labelText);

    if (label >= 1000000) {
        return label / 1000000 + 'M';
    }
    else if (label >= 10000) {
        return label / 1000 + 'K';
    }
    else {
        return label;
    }
}