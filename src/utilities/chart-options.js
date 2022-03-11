import { CHART_IDENTIFIER } from "./data-fields";

export const getTimeSeriesChartOptions = (displayMonthFormat=false, displayPercentageValue=false, displayNegativeValues=false) => {

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
            bodySpacing: 5,
            callbacks: {
                label: function(tooltipItem, data) {
                    var type = data.datasets[tooltipItem.datasetIndex].label;
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    var displayText = ""; 
                    if (displayPercentageValue)
                        displayText = type + " : " + parseFloat(value) + "%"
                    else   
                        displayText = type + " : " + parseInt(value).toLocaleString()

                    return displayText;
                }
            }
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
                    display:true,
                    lineWidth: 1,
                    zeroLineWidth: 1,
                    zeroLineColor: '#e8e8e8',
                    color: '#e8e8e8'
                },
                time: {
                    minUnit: 'month',
                    tooltipFormat: displayMonthFormat ? "MMM YYYY" : 'MM/DD/YYYY',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                },
                scaleLabel: {
                    display: true
                },
                /*
                ticks: {
                    // Display Month & Year with carriage return in between
                    callback: function(label) {
                        const labelText = label.split(" ");
                        return labelText;
                    }                
                }
                */
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false
                },
                ticks: {
                    min: displayNegativeValues ? undefined : 0, 
                    callback: function(label) {

                        let text = label;
                        if (displayPercentageValue)
                            text = text +"%"
                        else 
                            text = formatYAxisDisplay(label)

                        return text;
                    }                
                }
            }]
        }
    }
}

export const CHART_OPTIONS_FOR_AGE_GROUP_SUMMARY = {
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

            label: function(tooltipItem, data) {
                var type = data.datasets[tooltipItem.datasetIndex].label;
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return type + " : " + parseInt(value).toLocaleString();
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
            stacked: true
        }],
        yAxes:[{
            // stacked:false - places bars in FRONT of each other instead of on TOP of each other
            // if set to true, the two bars are combined into one bar with a aggregate total.
            stacked: false, 
            ticks: {
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


export const getChartOptions = (chartId) => {

    if (chartId === CHART_IDENTIFIER.AGE_GROUP_SUMMARY)
        return CHART_OPTIONS_FOR_AGE_GROUP_SUMMARY;
    else {

        let displayTooltipMonthsFormat= false;
        let displayPercentValues= false;
        let displayNegativeValuesOnChart= false;

        if (chartId === CHART_IDENTIFIER.VAX_FIRST_DOSE || chartId===CHART_IDENTIFIER.VAX_COMPLETE_DOSE || chartId === CHART_IDENTIFIER.EXCESS_DEATHS_PCT)
            displayPercentValues = true;
        
        if (chartId === CHART_IDENTIFIER.EXCESS_DEATHS_PCT || chartId === CHART_IDENTIFIER.EXCESS_DEATHS)
            displayNegativeValuesOnChart = true;

        if (chartId === CHART_IDENTIFIER.DEATHS_BY_AGE) 
            displayTooltipMonthsFormat=true;

        
        const chartOptions = getTimeSeriesChartOptions(displayTooltipMonthsFormat,displayPercentValues,displayNegativeValuesOnChart);

        return chartOptions;

    }

}