import React from 'react';
import Chart from 'chart.js';

import './chart-display.css';

// Necessary to be able to refresh charts
let currentLineChart;

class ChartDisplay extends React.Component {  

    chartRef = React.createRef();
    
    loadChart() {

        const {chartType, chartOptions, chartLabels, chartDataSet} = this.props;

        //console.log("loadChart()...");
        //console.log("chartType=",chartType);
        //console.log("chartOptions=",chartOptions);
        //console.log("chartLabels=",chartLabels);
        //console.log("chartDataset=",chartDataSet);
        
        // Destroy previous chart if it exists 
        if (typeof currentLineChart !== "undefined") currentLineChart.destroy();

        const stateChartRef = this.chartRef.current.getContext("2d");

        currentLineChart = new Chart(stateChartRef, {
            type: chartType,
            data: {
                labels: chartLabels,
                datasets: chartDataSet
            },
            options: chartOptions
        });

    }

    componentDidMount(){
        this.loadChart();
    }

    componentDidUpdate() {
        this.loadChart();
    }

    render () {
        return (
            <div className="chart-display">    
                <div className="chart">
                    <canvas id="myChart" ref={this.chartRef} />                        
                </div>
            </div>            
        )
    }
};

export default ChartDisplay;