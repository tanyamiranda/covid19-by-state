import {CHART_IDENTIFIER} from "./data-fields";

export const getDataSource = (chartId) => {

    switch (chartId){
        case CHART_IDENTIFIER.CASES_DEATHS : {
            return {
                url: "https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/pwn4-m3yp",
                label: "Center for Disease Control",
                comment: "Note: Data Collection Ended in May of 2023."
            }
        }

        case CHART_IDENTIFIER.HOSPITAL_DATA : {
            return {
                url: "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",
                label: "HealthData",
                comment: "Note: Data Updated Daily. Click link for latest data."
            }
        }

        case "NYC" : {
            return {
                url: "https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data",
                label: "NY State Health Data",
                comment: "Note: Data Updated Daily. Click link for latest data."
            }
        }

        case CHART_IDENTIFIER.DEATHS_BY_AGE:
        case CHART_IDENTIFIER.AGE_GROUP_SUMMARY: {
            return {
                url: "https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",
                label: "Center for Disease Control",
                comment: "Note: Data Collection Ended in April of 2023."
            }
        }

        case CHART_IDENTIFIER.VAX_FIRST_DOSE:
        case CHART_IDENTIFIER.VAX_COMPLETE_DOSE : {
            return {
                url: "https://data.cdc.gov/Vaccinations/COVID-19-Vaccination-and-Case-Trends-by-Age-Group-/gxj9-t96f",
                label: "Center for Disease Control",
                comment: "Note: Not available at state level. Data Collection Ended in April of 2023."
            }
        }

        case CHART_IDENTIFIER.EXCESS_DEATHS: 
        case CHART_IDENTIFIER.EXCESS_DEATHS_PCT : {
            return {
                url: "https://data.cdc.gov/NCHS/AH-Excess-Deaths-by-Sex-Age-and-Race-and-Hispanic-/m74n-4hbs",
                label: "Center for Disease Control",
                comment: "Note: Not available at state level. Data Collection Ended in April of 2023."
            }
        }

        default : return null;
    }
}
