import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import "./dashboard.css";

import {getFreshData} from '../../utilities/data-fetching';
import {getCDCDataSet} from '../../utilities/chart-data-processing';
import {setCOVID19Data} from '../../redux/chart-config/chart-config.actions';
import {CDC_DATA_CHART_FIELD_GROUPS} from '../../utilities/data-fields';
import {URL_CDC_CASESDEATHS, URL_HEALTHDATA_HOSPITALDATA} from '../../utilities/urls';
import ChartConfiguration from '../chart-config/chart-config.component';
import CDCHistoryChart from '../cdc-history-chart/cdc-history-chart.component';
import Spinner from '../spinner/spinner.component';
import DataTotals from '../data-totals/data-totals.component';
import Demographics from '../demographics/demographics.component';

const Covid19UsDashboard =({setCOVID19Data, dataRefreshedTimestamp, selectedState, selectedDateRange, cdcHistoryByJurisdiction,cdcHospitalDataByJurisdiction}) => {  

    useEffect(() => {

        //console.log("useEffect()...");
        async function loadData() {
            try {   
                if (!dataRefreshedTimestamp) {
                    //console.log("retrievingData()...");
                    const freshData = await getFreshData();
                    setCOVID19Data(freshData);
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadData();

    },[setCOVID19Data,dataRefreshedTimestamp]);
    
    //console.log("dataRefreshedTimestamp=",dataRefreshedTimestamp);
    //console.log("selectedState=",selectedState);
    //console.log("selectedFields=",selectedFields);
    //console.log("selectedDateRange=",selectedDateRange);

    return (   

        <div className="dashboard">
            <div className="page-header">
                <div className="page-title"><span>COVID-19 Data Charts</span> <span>For United States</span></div>
                <div className="page-subtitle">50 U.S. States, D.C. and Puerto Rico</div>
                <ChartConfiguration />
            </div>
            { !dataRefreshedTimestamp ? ( 
                <Spinner />
            ) : (
                <div className="page-layout">
                    <DataTotals/>                            
                    <CDCHistoryChart 
                        dataSet={getCDCDataSet(selectedDateRange, cdcHistoryByJurisdiction, selectedState)} 
                        selectedFieldGroup={CDC_DATA_CHART_FIELD_GROUPS.dailyTotals} 
                        stateChartTitle="New Cases & Deaths" 
                        chartId="newCasesDeaths"
                        dataSourceURL={URL_CDC_CASESDEATHS}
                        dataSourceLabel="Center For Disease Control" />
                    <CDCHistoryChart 
                        dataSet={getCDCDataSet(selectedDateRange, cdcHospitalDataByJurisdiction, selectedState)} 
                        selectedFieldGroup={CDC_DATA_CHART_FIELD_GROUPS.hospitalData} 
                        stateChartTitle="Hospital Inpatient & ICU" 
                        chartId="hospitalData"
                        dataSourceURL={URL_HEALTHDATA_HOSPITALDATA}
                        dataSourceLabel="Healdata.gov" />
                    
                    <Demographics/>
                </div>
            )}
            <div className="page-footer">
                Data Sources:<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://www.census.gov/programs-surveys/popest.html")}>U.S. Census Bureau</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://data.cdc.gov")}>Center For Disease Control</span><br/>
                <span className="footer-site-link" onClick={()=> window.open("https://healthdata.gov/")}>Healthdata.gov</span><br/>
                ~ ~ ~<br/>
                <span className="footer-site-link" onClick={()=> window.open("https://tanyamiranda.github.io/")}>Contact Developer</span><br/>
            </div>
        </div>
    
    )
};

const mapStateToProps = state => ({
    dataRefreshedTimestamp: state.chartConfig.dataRefreshedTimestamp,
    selectedState: state.chartConfig.selectedState, 
    selectedDateRange: state.chartConfig.selectedDateRange,
    cdcHistoryByJurisdiction: state.chartConfig.cdcHistoryByJurisdiction,
    cdcHospitalDataByJurisdiction: state.chartConfig.cdcHospitalDataByJurisdiction
});

const mapDispatchToProps = dispatch => ({
    setCOVID19Data: (data) => dispatch(setCOVID19Data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Covid19UsDashboard);