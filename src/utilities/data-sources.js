import {CHART_IDENTIFIER} from "./data-fields";


const DATASOURCES = [
    {
        id: "NYC",
        url: "https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data",
        label: "Healthdata.gov",
        comment: ""
    },
    {
        id: CHART_IDENTIFIER.CASES_DEATHS,
        url: "https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36",
        label: "Center for Disease Control",
        comment: ""
    },
    {
        id: CHART_IDENTIFIER.HOSPITAL_DATA,
        url: "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",
        label: "Center for Disease Control",
        comment: ""
    },
    {
        id: CHART_IDENTIFIER.DEATHS_BY_AGE,
        url: "https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",
        label: "Center for Disease Control",
        comment: "Note: This dataset is update weekly."
    },
    {
        id: CHART_IDENTIFIER.AGE_GROUP_SUMMARY,
        url: "https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",
        label: "Center for Disease Control",
        comment: "Note: This dataset is update weekly."
    },
    {
        id: CHART_IDENTIFIER.VAX_FIRST_DOSE,
        url: "https://data.cdc.gov/Vaccinations/COVID-19-Vaccination-and-Case-Trends-by-Age-Group-/gxj9-t96f",
        label: "Center for Disease Control",
        comment: "Note: Available at U.S. level only. State level data not available."
    },
    {
        id: CHART_IDENTIFIER.VAX_COMPLETE_DOSE,
        url: "https://data.cdc.gov/Vaccinations/COVID-19-Vaccination-and-Case-Trends-by-Age-Group-/gxj9-t96f",
        label: "Center for Disease Control",
        comment: "Note: Available at U.S. level only. State level data not available."
    },
    {
        id: CHART_IDENTIFIER.EXCESS_DEATHS,
        url: "https://data.cdc.gov/NCHS/AH-Excess-Deaths-by-Sex-Age-and-Race-and-Hispanic-/m74n-4hbs",
        label: "Center for Disease Control",
        comment: "Note: Available at U.S. level only. State level data not available."
    },
    {
        id: CHART_IDENTIFIER.EXCESS_DEATHS_PCT,
        url: "https://data.cdc.gov/NCHS/AH-Excess-Deaths-by-Sex-Age-and-Race-and-Hispanic-/m74n-4hbs",
        label: "Center for Disease Control",
        comment: "Note: Available at U.S. level only. State level data not available."
    }    
];

export const getDataSource = (chartId) => {

    const dataSource = DATASOURCES.find(rec => rec.id === chartId);

    return dataSource;
}
