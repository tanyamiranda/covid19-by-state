export const getTimeSeriesChartOptions = (displayMonthFormat) => {

    return {
        responsive: true,
        aspectRatio: 1,
        maintainAspectRatio: false,
        title: { display: false},
        tooltips: {
            mode: 'index', 
            intersect: false,
            bodyAlign: 'left',
            position: 'nearest',
            bodySpacing: 5
        },
        interaction: {
            intersect: false,
            axis: 'x'
        },
        legend: {
            position:'top', 
            labels: {
                boxWidth:5, 
                fontSize:14,
                usePointStyle:true, 
                padding:15
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type: 'time',
                gridLines: {
                    display:true
                },
                time: {
                    minUnit: 'month',
                    tooltipFormat: displayMonthFormat ? "MMM YYYY" : 'MM/DD/YYYY'
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
        footerFontStyle: 'normal',
        bodySpacing: 5,
        titleMarginBottom: 10,
        footerMarginTop: 10,
        callbacks: {
            title: function(tooltipItem) {
                return "Ages " + tooltipItem[0].label 
            },

            footer: function(tooltipItem) {
                const covidDeaths = tooltipItem[0].value;
                const allDeaths = tooltipItem[1].value;
                const percent = parseFloat((covidDeaths/allDeaths) * 100).toFixed(1)+"%";
                return [percent + " of all deaths","due to COVID-19"] ;
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

// Display K for thousands, M for millions
// Instead of 200000 display 200K
// Instead of 1900000 display 1M
const formatYAxisDisplay = (labelText) => {

    let label = Number(labelText);
    let newLabel = "";

    if (label >= 1000000) 
        newLabel = label / 1000000 + 'M';
    else if (label >= 10000) 
        newLabel = label / 1000 + 'K';
    else 
        newLabel = label;

    return newLabel;
}