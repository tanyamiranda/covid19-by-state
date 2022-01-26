
const DATASOURCE_LINKS = {
    URL_CDC_CASESDEATHS : "https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36",
    URL_CDC_DEATHSBYAGE : "https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",
    URL_HOSPITALDATA : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",
    URL_NYC_HOSPITALDATA : "https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data"
}

export const getDataSourceForAgeGroupData = (state) => {

    let dataSource = {
        url: DATASOURCE_LINKS.URL_CDC_DEATHSBYAGE,
        label: "Center for Disease Control",
        comment: "Note: This dataset is update weekly."
    }

    return dataSource;

}

export const getDataSourceForCasesDeathsData = (state) =>{

    let dataSource = {
        url: DATASOURCE_LINKS.URL_CDC_CASESDEATHS,
        label: "Center for Disease Control",
        comment: ""
    }

    return dataSource;

}

export const getDataSourceForHospitalData = (state) =>{

    let dataSource = {
        url: DATASOURCE_LINKS.URL_HOSPITALDATA,
        label: "HealthData.gov",
        comment: ""
    }

    if (state==="NYC") {
        dataSource.url = DATASOURCE_LINKS.URL_NYC_HOSPITALDATA;
        dataSource.label = "Health Data NY";
    }

    return dataSource;
    
}