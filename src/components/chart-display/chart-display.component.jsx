
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

import './chart-display.css';

// Necessary to be able to clear previous charts
let currentLineChart = [];

const ChartDisplay = ({chartType, chartOptions, chartLabels, chartDataSet, chartId}) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {

        if (chartContainer && chartContainer.current) {

            //console.log("loading chart...");

            const chartConfig = {
                type: chartType,
                options: chartOptions,
                data: {
                    labels: chartLabels,
                    datasets: chartDataSet
                }            
            }

            // Destroy previous chart if it exists 
            if (typeof currentLineChart[chartId] !== "undefined") currentLineChart[chartId].destroy();

            currentLineChart[chartId] = new Chart(chartContainer.current, chartConfig);
            setChartInstance(currentLineChart);
            
        }
    }, [chartContainer, chartType, chartOptions, chartLabels, chartDataSet, chartId]);
    
    return (
        <div className="chart-display">
            <canvas id={!chartInstance ? "0" : chartId } ref={chartContainer} />
        </div>
    );
};

export default ChartDisplay;
