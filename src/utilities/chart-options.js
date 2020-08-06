import {formatYAxisDisplay} from './data-processing';

export const CHART_OPTIONS_FOR_STATE_HISTORY = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    title: { display: false},
    tooltips: {
            mode: 'index', 
            intersect: false,
            bodyAlign: 'left',
            titleAlign: 'center',
            callbacks: {
                label: function(tooltipItem, data) {
                  var type = data.datasets[tooltipItem.datasetIndex].label;
                  var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                  return type + " : " + parseInt(value).toLocaleString();
                }
            }
            
        },
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
                min: 0,
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
                min: 0,
                beginAtZero:true,
                callback: function(label) {
                    return formatYAxisDisplay(label);
                }                
            }
        }]
    }
}

export const CHART_OPTIONS_FOR_AGE_GROUPS = {
    aspectRatio: 1,
    maintainAspectRatio: false,
    responsive: true,
    title: { display: true, text: "Deaths By Age Group"},
    tooltips: {
        mode: 'label', 
        intersect: false,
        bodyAlign: 'left',
        titleAlign: 'center',
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
