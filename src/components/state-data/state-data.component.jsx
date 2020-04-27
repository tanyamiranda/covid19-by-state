import React from 'react';

import "./state-data.css";

import {DEFAULT_SELECTED_DATA_FIELDS } from '../utilities/data-fields';
import ChartConfiguration from '../chart-config/chart-config.component';
import ChartDisplay from '../chart-display/chart-display.component';
import {getFreshData} from '../utilities/data-processing';
import Spinner from '../spinner/spinner.component';

class StateData extends React.Component {  

    constructor() {
        super();
        
        this.state = {
            selectedState:"NJ",
            selectedDateRange:"30",
            selectedFields: DEFAULT_SELECTED_DATA_FIELDS,
            statesHistoryData: null,
            stateInformation: null,
            dataRefreshedTimestamp: ""
        }
    }

    async componentDidMount() {

        try {
            const now = new Date();
            const formatted_date = now.toLocaleString();

            const freshData = await getFreshData();

            await this.setState({
                statesHistoryData: freshData.statesHistoryData,
                stateInformation: freshData.stateInformation,
                dataRefreshedTimestamp: formatted_date
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleStateSelection(event) {
        this.setState({selectedState: event.target.value})
    }

    handleDateRangeSelection(event) {
        this.setState({selectedDateRange: event.target.value})
    }

    handleFieldSelection(event) {
        const updatedSelectedFields = this.state.selectedFields;
        updatedSelectedFields[event.target.value] = event.target.checked;
        this.setState({ selectedFields: updatedSelectedFields}); 
    }

    render () {

        const{   
            statesHistoryData,
            selectedState,
            selectedDateRange,
            selectedFields,
            stateInformation,
            dataRefreshedTimestamp
        }  = this.state;

        return (

            <div className="state-data-history">
                <div className="page-title">
                    <h2>Covid19 Data Charts for U.S. States</h2>
                </div>
                { !dataRefreshedTimestamp ? ( 
                    <Spinner />
                ) : (

                    <div className="page-layout">
                        <ChartConfiguration 
                            dataRefreshedTimestamp = {dataRefreshedTimestamp}
                            selectedState= {selectedState}
                            selectedDateRange= {selectedDateRange}
                            selectedFields={selectedFields}
                            stateSelectionHandler={this.handleStateSelection.bind(this)} 
                            dateSelectionHander={this.handleDateRangeSelection.bind(this)}
                            fieldSelectionHandler={this.handleFieldSelection.bind(this)}
                        /> 
                        <div className="chart-container">
                            <div className="chart-header">
                                Data for {stateInformation[selectedState].name} last {selectedDateRange} days
                            </div>
                            
                            <ChartDisplay
                                selectedState= {selectedState}
                                selectedDateRange= {selectedDateRange}
                                selectedFields={selectedFields}
                                statesHistoryData={statesHistoryData}
                            />

                            <div className="chart-footer"> 
                                Data Quality Grade for {stateInformation[selectedState].name}: &nbsp;&nbsp;<b>{stateInformation[selectedState].grade} **</b> <br/>
                                <span className="site-link" onClick={()=> window.open(stateInformation[selectedState].website)}>{selectedState} COVID19 Website</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                <span className="site-link" onClick={()=> window.open('https://www.twitter.com/' + stateInformation[selectedState].twitter)}>Twitter</span>                                   
                                
                            </div>
                        </div>
                    </div>
                )}
                <div className="page-footer">
                    <p><b>** Data Quality Grade determined by The COVID Tracking Project </b></p>
                    <p>Not All States Report All Data</p>
                    <p>Historical Data Refreshed daily at 4:00 PM EST</p>
                    <p>~ ~ ~</p>
                    <p>This is a visual representation of the data collected by The COVID Tracking Project</p>
                    <p>For more info, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/")}>https://covidtracking.com/</span></p>
                    <p>For field definitions, visit <span className="site-link" onClick={()=> window.open("https://covidtracking.com/api")}>https://covidtracking.com/api</span></p>
                </div>
            </div>
        )
    }
};

export default StateData;