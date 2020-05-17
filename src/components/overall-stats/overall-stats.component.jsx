import React from 'react';
import {connect} from 'react-redux';

import './overall-stats.css';

import {USA_IDENTIFIER} from '../../utilities/data-fields';

const OverallStats = ({selectedState, stateInformation}) => {

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
            <div className="links"> 
                <span className="site-link" onClick={()=> window.open(stateInfo.website)}>COVID19 Website</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <span className="site-link" onClick={()=> window.open('https://www.twitter.com/' + stateInfo.twitter)}>Twitter</span>
            </div>
            <div>Estimated Population : <span className="estimate">{Intl.NumberFormat('en-US', {useGrouping: true}).format(stateInfo.estimatedPopulation)}</span></div>
            <div className="totals-data">
                <div className="data-group">
                    <div>Total Tested:</div>
                    <div className="data-number">{Intl.NumberFormat('en-US', {useGrouping: true}).format(stateInfo.totalTestResults)}</div>
                    <div className="data-number percent">{percentTested} ++</div>
                </div>
                <div className="data-group">
                    <div>Total Positive:</div>
                    <div className="data-number">{Intl.NumberFormat('en-US', {useGrouping: true}).format(stateInfo.totalPositive)}</div>
                    <div className="data-number percent">{percentPositive} ++</div>
                </div>
                <div className="data-group">
                    <div>Total Deaths:</div>
                    <div className="data-number">{Intl.NumberFormat('en-US', {useGrouping: true}).format(stateInfo.totalDeath)}</div>
                    <div className="data-number percent">{percentDeath} ++</div>
                </div>
            </div>
            <div className="estimate">++ % of estimated population</div>

            { selectedState === USA_IDENTIFIER ? null : (
            <div className="state-grade"> 
                <span>Data Quality Grade for {stateInfo.name}:  </span><span><b>{stateInfo.dataQualityGrade} **</b></span>
            </div>
            )}
        </div>
    )

}

const mapStateToProps = state => ({
    selectedState: state.chartConfig.selectedState,
    stateInformation: state.chartConfig.stateInformation
});

export default connect(mapStateToProps)(OverallStats);