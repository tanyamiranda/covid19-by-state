
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

// Necessary to be able to clear previous charts
let currentLineChart;

const ChartDisplay = ({chartType, chartOptions, chartLabels, chartDataSet}) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {

        if (chartContainer && chartContainer.current) {

            console.log("loading chart...");

            const chartConfig = {
                type: chartType,
                options: chartOptions,
                data: {
                    labels: chartLabels,
                    datasets: chartDataSet
                }            
            }

            // Destroy previous chart if it exists 
            if (typeof currentLineChart !== "undefined") currentLineChart.destroy();

            currentLineChart = new Chart(chartContainer.current, chartConfig);
            setChartInstance(currentLineChart);
            
        }
    }, [chartContainer, chartType, chartOptions, chartLabels, chartDataSet]);
    
    return (
        <div>
            <canvas id={!chartInstance ? "0" : "chart-js-display"} ref={chartContainer} />
        </div>
    );
};

export default ChartDisplay;
