import React from 'react';
import {connect} from 'react-redux';

import './overview.css';

import {USA_IDENTIFIER} from '../../utilities/data-fields';

const Overview = ({selectedState, stateInformation, stateCountyInfo}) => {

    const formatNumber = (num) => {
        return Intl.NumberFormat('en-US', {useGrouping: true}).format(num);
    }

    const getPercentage = (partialNum, totalNum) => {
        var percent = ((partialNum / totalNum) * 100).toFixed(2);
        return percent + "%";
    }

    let stateInfo = stateInformation[selectedState];
        
    const percentPositive =  getPercentage(stateInfo.totalPositive,stateInfo.estimatedPopulation);
    const percentTested =  getPercentage(stateInfo.totalTestResults,stateInfo.estimatedPopulation);
    const percentDeath =  getPercentage(stateInfo.totalDeath,stateInfo.estimatedPopulation);
    
    return (
        <div className="overall-stats dashboard-component">
            <div className="stats-title">{stateInfo.name} Overview</div>
            <div>Estimated Population : <span className="estimate">{formatNumber(stateInfo.estimatedPopulation)} *</span></div>
            <div className="totals-data">
                <div className="data-group">
                    <div>Total Tested:</div>
                    <div className="data-number">{formatNumber(stateInfo.totalTestResults)}</div>
                    <div className="data-number percent">{percentTested}</div>
                </div>
                <div className="data-group">
                    <div>Total Positive:</div>
                    <div className="data-number">{formatNumber(stateInfo.totalPositive)}</div>
                    <div className="data-number percent">{percentPositive}</div>
                </div>
                <div className="data-group">
                    <div>Total Deaths:</div>
                    <div className="data-number">{formatNumber(stateInfo.totalDeath)}</div>
                    <div className="data-number percent">{percentDeath}</div>
                </div>
                <div className="data-group">
                    <div>Total Recovered:</div>
                    <div className="data-number">{formatNumber(stateInfo.totalRecovered)}</div>
                    <div className="data-number percent">N/A</div>
                </div>
            </div>
            <div className="estimate">% calculated against Estimated Population</div>

            { selectedState === USA_IDENTIFIER ? null : (
            <div className="scrollable">
                <div className="county-data-set">
                    <div className="county-data">
                        <div className="county-data-header">County</div>
                        <div className="data-number county-data-header">Cases</div>
                        <div className="data-number county-data-header">Deaths</div>
                    </div>
                    {stateCountyInfo.filter(data => data.stateName.toLowerCase() === stateInfo.name.toLowerCase() && (data.deaths > 0 || data.cases > 0)).sort((a,b) => b.deaths - a.deaths).map((data, index) => (
                        <div key={index}>
                            <div className="county-data" >
                                <div className="data-county-name">{data.county}</div>                    
                                <div className="data-number scrollable">{formatNumber(data.cases)}</div>
                                <div className="data-number scrollable">{formatNumber(data.deaths)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}

            { selectedState === USA_IDENTIFIER ? null : (
            <div className="state-grade"> 
                <span>Data Quality Grade for {stateInfo.name}:  </span><span><b>{stateInfo.dataQualityGrade}</b></span><br/>
                Grade determined by <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>The COVID Tracking Project</span>
            </div>
            )}
            <div className="links"> 
            <span className="site-link" onClick={()=> window.open(stateInfo.website)}>{stateInfo.name} COVID19 Website</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <span className="site-link" onClick={()=> window.open('https://www.twitter.com/' + stateInfo.twitter)}>Twitter</span>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation,
    stateCountyInfo: state.chartConfig.stateCountyInfo
});

export default connect(mapStateToProps)(Overview);