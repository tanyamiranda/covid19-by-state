/***************************************************************
 * This loads but flickers between new chart and previous chart
 * whenever a user updates data and then  hovers over any part 
 * of the new chart.
 *  
 * Saving this to work on later. 
 * 
 * Seems to be an issue with using Chart.js with Hooks and as 
 * a functional component where the data values are updated 
 * in the parent component instead of in the same component as
 * the chart. The canvas does not seem to be cleared 
 * before the new chart is loaded. 
 * *************************************************************
 */

import React, { useRef, useState, useEffect}from 'react'
import ChartJs from 'chart.js';

import './chart-display.css';

const ChartDisplayHooks = ({chartType, chartOptions, chartLabels, chartDataSet}) => {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    console.log("Chart BEFORE useEffect()... ")
    console.log("chartInstance=",chartInstance);
    console.log("chartContainer=",chartContainer);
    console.log("chartContainer.current=",chartContainer.current);

    useEffect(() => {
        
        if (chartContainer && chartContainer.current) {

            console.log("Chart useEffect()...");
            console.log("chartInstance=",chartInstance);
            console.log("chartContainer=",chartContainer);
            console.log("chartContainer.current=",chartContainer.current);

            
            const chartConfig = {
                type: chartType,
                data: {
                    labels: chartLabels,
                    datasets: chartDataSet
                },
                options: chartOptions
              };
            
              
            const newChartInstance = new ChartJs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
            //console.log("chartInstance=",chartInstance);
        }
    }, [chartContainer,chartInstance,chartType, chartOptions, chartLabels, chartDataSet]);

    return (
        <div className="chart-container">
            <canvas ref={chartContainer} />
        </div>
    )
}

export default ChartDisplayHooks;
