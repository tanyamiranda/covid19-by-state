(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spinning-blue-circle.cbcc3646.gif"},,,function(e,t,a){e.exports=a(34)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(5),r=a.n(o),i=a(1),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(22),a(23),a(24);var d=a(12),u=a(10),p=a.n(u),m=(a(27),[]),h=function(e){var t=e.chartType,a=e.chartOptions,o=e.chartLabels,r=e.chartDataSet,i=e.chartId,l=e.isTallChart,c=Object(n.useRef)(null),u=Object(n.useState)(null),h=Object(d.a)(u,2),_=h[0],E=h[1];return Object(n.useEffect)((function(){if(c&&c.current){var e={type:t,options:a,data:{labels:o,datasets:r}};"undefined"!==typeof m[i]&&m[i].destroy(),m[i]=new p.a(c.current,e),E(m)}}),[c,t,a,o,r,i]),s.a.createElement("div",{className:"chart-display"+(l?" tall-chart-display":"")},s.a.createElement("canvas",{id:_?i:"0",ref:c}))},_=a(13),E=function(e){return e||(e=0),Intl.NumberFormat("en-US",{useGrouping:!0}).format(e)},g=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),s=""+t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),Number(s+a+n)},f=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),s=""+t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),s+"-"+a+"-"+n+"T00:00:00.000"},b=function(e){return e.toLowerCase().replace("years and over","+").replace("years","").replace("year","").replace("Under","<").replaceAll(" ","")},y=function(e){var t=[];return Object(_.a)(new Set(e.map((function(e){return e.substr(0,10)})))).forEach((function(e){var a=Number(e.substring(2,4)),n=Number(e.substring(5,7)),s=Number(e.substring(8,10)),o=new Date(n+"/"+s+"/"+a);t.push(o)})),t},S=(a(28),function(e){var t=e.dataSource;return s.a.createElement("div",null,null!=t?s.a.createElement("div",{className:"data-sources"},"Source:\xa0",s.a.createElement("span",{className:"site-link",onClick:function(){return window.open(t.url)}},t.label),s.a.createElement("span",{className:"footer-comment"},s.a.createElement("br",null),t.comment)):s.a.createElement("span",null))});const v=["0","2023","2022","2021","2020"],A={"months-6":"Last 6 months","months-9":"Last 9 months","months-12":"Last 12 months",2023:"All 2023",2022:"All 2022",2021:"All 2021",2020:"All 2020",0:"All Time"},D=["green","red","blue","orange","pink","lime","black","cyan","purple","brown","voilet","chartreuse","CadetBlue","darkgreen","DarkGoldenRod","darkslategray","crimson","Turquoise","steelblue","sand","salmon"],C={new_case:"New Cases",new_death:"New Deaths",inpatient_beds_covid:"Inpatient",icu_beds_covid:"ICU"},T="DEATHS_BY_AGE",N="VAX_FIRST_DOSE",w="VAX_COMPLETE_DOSE",Y="EXCESS_DEATHS",O="EXCESS_DEATHS_PCT",I="HOSPITAL_DATA",k="AGE_GROUP_SUMMARY",L="CASES_DEATHS",x={DEATHS_BY_AGE:{title:"Covid Deaths By Age (Monthly)",description:"Deaths involving Covid-19 by age group.",chartType:"line",isGroupedByAge:!0},VAX_FIRST_DOSE:{title:"% Vaxed By Age - First Dose",description:"Percent of people vaccinated with first dosage by age group.",chartType:"line",isGroupedByAge:!0},VAX_COMPLETE_DOSE:{title:"% Vaxed By Age - Completed",description:"Percent of people vaccinated with complete dosage by age group.",chartType:"line",isGroupedByAge:!0},EXCESS_DEATHS:{title:"Excess Deaths By Age - Weighted",description:"All excess Deaths above or below expected range by age group.",chartType:"line",isGroupedByAge:!0},EXCESS_DEATHS_PCT:{title:"% Excess Deaths By Age - Weighted",description:"Weighted percentage of all excess Deaths above or below expected range by age group.",chartType:"line",isGroupedByAge:!0},HOSPITAL_DATA:{title:"Hospital Inpatient & ICU (Daily)",description:"Patients admitted to inpatient care and ICU to treat Covid-19 symptoms.",chartType:"line",isGroupedByAge:!1},AGE_GROUP_SUMMARY:{title:"All Deaths by Age Summary",description:"Summary of all deaths by age group alongside Covid-19 deaths for comparison.",chartType:"bar"},CASES_DEATHS:{title:"New Cases & Deaths (Weekly)",description:"New confirmed and probable Covid-19 cases and deaths.",chartType:"line",isGroupedByAge:!1}},M={DEATHS_BY_AGE:["covid_19_deaths"],VAX_FIRST_DOSE:["first_dose_pct"],VAX_COMPLETE_DOSE:["completed_pct"],EXCESS_DEATHS:["covid19_weighted"],EXCESS_DEATHS_PCT:["percent_above_average_weighted"],HOSPITAL_DATA:["inpatient_beds_covid","icu_beds_covid"],CASES_DEATHS:["new_case","new_death"],AGE_GROUP_SUMMARY:[]},H={DEATHS_BY_AGE:["0-17 years","18-29 years","30-39 years","40-49 years","50-64 years","65-74 years","75-84 years","85 years and over"],AGE_GROUP_SUMMARY:["0-17 years","18-29 years","30-39 years","40-49 years","50-64 years","65-74 years","75-84 years","85 years and over"],VAX_FIRST_DOSE:["5 - 11 Years","12 - 17 Years","18 - 24 Years","25 - 39 Years","40 - 49 Years","50 - 64 Years","65 - 74 Years","75+ Years"],VAX_COMPLETE_DOSE:["5 - 11 Years","12 - 17 Years","18 - 24 Years","25 - 39 Years","40 - 49 Years","50 - 64 Years","65 - 74 Years","75+ Years"],EXCESS_DEATHS:["0-14 Years","15-19 Years","20-24 Years","25-29 Years","30-34 Years","35-39 Years","40-44 Years","45-49 Years","50-54 Years","55-59 Years","60-64 Years","65-69 Years","70-74 Years","75-79 Years","80-84 Years","85+"],EXCESS_DEATHS_PCT:["0-14 Years","15-19 Years","20-24 Years","25-29 Years","30-34 Years","35-39 Years","40-44 Years","45-49 Years","50-54 Years","55-59 Years","60-64 Years","65-69 Years","70-74 Years","75-79 Years","80-84 Years","85+"]},R={aspectRatio:1,maintainAspectRatio:!1,responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",footerFontStyle:"normal",bodySpacing:5,titleMarginBottom:10,footerMarginTop:10,callbacks:{title:function(e){return"Ages "+e[0].label},label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()},footer:function(e){let t=0,a=0,n=0;return null==e[0]||Number.isNaN(e[0].value)||(t=Number(e[0].value)),null==e[1]||Number.isNaN(e[1].value)||(a=Number(e[1].value)),t>0&&a>0&&(n=parseFloat(t/a*100).toFixed(1)+"%"),a>0?[n+" of all deaths","due to COVID-19"]:""}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:10}},elements:{point:{radius:0}},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!1,ticks:{callback:function(e){return B(e)}}}]}},B=e=>{let t=Number(e),a="";return a=t>=1e6?t/1e6+"M":t>=1e4?t/1e3+"K":t,a},G=(e,t)=>{if(e===k)return R;{let a=!1,n=!1,s=!1;e!==N&&e!==w&&e!==O||(n=!0),e!==O&&e!==Y||(s=!0),e===T&&(a=!0);return function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;return{responsive:!0,aspectRatio:1,maintainAspectRatio:!1,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",position:"nearest",bodySpacing:5,callbacks:{label:function(e,a){var n=a.datasets[e.datasetIndex].label,s=a.datasets[e.datasetIndex].data[e.index];return t?n+" : "+parseFloat(s)+"%":n+" : "+parseInt(s).toLocaleString()}}},interaction:{intersect:!1,axis:"x"},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:15}},elements:{point:{radius:0}},scales:{xAxes:[{display:!0,bounds:"ticks",type:"time",gridLines:{display:!0,lineWidth:1,zeroLineWidth:1,zeroLineColor:"#e8e8e8",color:"#e8e8e8"},time:{unit:n,tooltipFormat:e?"MMM YYYY":"MM/DD/YYYY",displayFormats:{month:"MMM YYYY",week:"MM/DD/YYYY"}},scaleLabel:{display:!0}}],yAxes:[{display:!0,scaleLabel:{display:!1},ticks:{min:a?void 0:0,callback:function(e){let a=e;return t?a+="%":a=B(e),a}}}]}}}(a,n,s,t)}};var j=Object(i.b)((function(e){return{chartConfig:e.chartConfig}}))((function(e){var t=e.chartConfig,a=e.chartObject,n=e.displaySummary,o=void 0!==n&&n,r=e.isFullWidthChart,i=void 0!==r&&r,l=t.isDataLoaded,c=a.isDataAvailable,d="";l?c||(d="Data is unavailable for your selection."):d="Problem fetching data from CDC site.";var u=x[a.chartId].chartType,p=x[a.chartId].title,m=G(a.chartId,a.dateFormatForXAxis),_=(e=>{switch(e){case L:return{url:"https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/pwn4-m3yp",label:"Center for Disease Control",comment:"Note: Data Collection Ended in May of 2023."};case I:return{url:"https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",label:"HealthData",comment:"Note: Data Updated Daily. Click link for latest data."};case"NYC":return{url:"https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data",label:"NY State Health Data",comment:"Note: Data Updated Daily. Click link for latest data."};case T:case k:return{url:"https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",label:"Center for Disease Control",comment:"Note: Data Collection Ended in April of 2023."};case N:case w:return{url:"https://data.cdc.gov/Vaccinations/COVID-19-Vaccination-and-Case-Trends-by-Age-Group-/gxj9-t96f",label:"Center for Disease Control",comment:"Note: Not available at state level. Data Collection Ended in April of 2023."};case Y:case O:return{url:"https://data.cdc.gov/NCHS/AH-Excess-Deaths-by-Sex-Age-and-Race-and-Hispanic-/m74n-4hbs",label:"Center for Disease Control",comment:"Note: Not available at state level. Data Collection Ended in April of 2023."};default:return null}})(a.chartId===I&&"NYC"===t.selectedState?"NYC":a.chartId);return s.a.createElement("div",{className:"dashboard-component state-history-chart"+(c&&i?" full-width-component":"")},s.a.createElement("div",{className:"dashboard-component-title"},s.a.createElement("span",null,p)),l&&c?s.a.createElement(h,{chartType:u,chartOptions:m,chartLabels:a.chartLabels,chartDataSet:a.chartDataSet,chartId:a.chartId,isTallChart:i}):s.a.createElement("div",null,d),o?s.a.createElement("div",{className:"chart-summary"},s.a.createElement("div",{className:"summary-title"},"Totals for Selection"),a.chartDataSet.map((function(e){return s.a.createElement("div",{className:"chart-summary-row",key:e.label},s.a.createElement("div",{className:"label"},e.label),s.a.createElement("div",{className:"value"},E(e.dataTotal)))}))):s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement(S,{dataSource:_})))})),V=(a(29),[{state:"USA",name:"United States",population:334735155},{state:"AK",name:"Alaska",population:733391},{state:"AL",name:"Alabama",population:5024279},{state:"AR",name:"Arkansas",population:3011524},{state:"AZ",name:"Arizona",population:7151502},{state:"CA",name:"California",population:39538223},{state:"CO",name:"Colorado",population:5773714},{state:"CT",name:"Connecticut",population:3605944},{state:"DC",name:"District of Columbia",population:689545},{state:"DE",name:"Delaware",population:989948},{state:"FL",name:"Florida",population:21538187},{state:"GA",name:"Georgia",population:10711908},{state:"HI",name:"Hawaii",population:1455271},{state:"IA",name:"Iowa",population:3190369},{state:"ID",name:"Idaho",population:1839106},{state:"IL",name:"Illinois",population:12812508},{state:"IN",name:"Indiana",population:6785528},{state:"KS",name:"Kansas",population:2937880},{state:"KY",name:"Kentucky",population:4505836},{state:"LA",name:"Louisiana",population:4657757},{state:"MA",name:"Massachusetts",population:7029917},{state:"MD",name:"Maryland",population:6177224},{state:"ME",name:"Maine",population:1362359},{state:"MI",name:"Michigan",population:10077331},{state:"MN",name:"Minnesota",population:5706494},{state:"MO",name:"Missouri",population:6154913},{state:"MS",name:"Mississippi",population:2961279},{state:"MT",name:"Montana",population:1084225},{state:"NC",name:"North Carolina",population:10439388},{state:"ND",name:"North Dakota",population:779094},{state:"NE",name:"Nebraska",population:1961504},{state:"NH",name:"New Hampshire",population:1377529},{state:"NJ",name:"New Jersey",population:9288994},{state:"NM",name:"New Mexico",population:2117522},{state:"NV",name:"Nevada",population:3104614},{state:"NY",name:"New York",population:20201249,extra:" (Excludes NYC)"},{state:"NYC",name:"New York City",population:8804190},{state:"OH",name:"Ohio",population:11799448},{state:"OK",name:"Oklahoma",population:3959353},{state:"OR",name:"Oregon",population:4237256},{state:"PA",name:"Pennsylvania",population:13002700},{state:"PR",name:"Puerto Rico",population:3285874},{state:"RI",name:"Rhode Island",population:1097379},{state:"SC",name:"South Carolina",population:5118425},{state:"SD",name:"South Dakota",population:886667},{state:"TN",name:"Tennessee",population:6910840},{state:"TX",name:"Texas",population:29145505},{state:"UT",name:"Utah",population:3271616},{state:"VA",name:"Virginia",population:8631393},{state:"VT",name:"Vermont",population:643077},{state:"WA",name:"Washington",population:7705281},{state:"WI",name:"Wisconsin",population:5893718},{state:"WV",name:"West Virginia",population:1793716},{state:"WY",name:"Wyoming",population:576851}]),P=function(){var e=[];return V.forEach((function(t){e.push(t.state)})),e},W=function(e){return V.find((function(t){return t.state===e}))},U={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA",SET_STATE_HISTORY_DATA:"SET_STATE_HISTORY_DATA",SET_YEAR_SELECTION:"SET_YEAR_SELECTION"},F=Object(i.b)((function(e){return{selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear}}),(function(e){return{setStateSelection:function(t){return e({type:U.SET_STATE_SELECTION,payload:t})},setYearSelection:function(t){return e({type:U.SET_YEAR_SELECTION,payload:t})}}}))((function(e){var t=e.selectedState,a=e.selectedYear,n=e.setStateSelection,o=e.setYearSelection,r=P();return s.a.createElement("div",{className:"chart-configuration"},s.a.createElement("div",{className:"top-section"},s.a.createElement("span",{className:"config-section"},s.a.createElement("select",{name:"stateSelection",defaultValue:t||"USA",onChange:function(e){n(e.target.value)}},r.map((function(e){return s.a.createElement("option",{key:e,value:e},W(e).name+(null!=W(e).extra?W(e).extra:""))})))),s.a.createElement("span",{className:"config-year"},s.a.createElement("select",{name:"yearSelection",defaultValue:a||"0",onChange:function(e){o(e.target.value)}},v.map((function(e){return s.a.createElement("option",{key:e,value:e},A[e])}))))))})),$=a(11),X=a.n($),J=(a(30),function(){return s.a.createElement("div",{className:"spinner-page"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{className:"spinner-image",src:X.a,alt:"Loading CDC Data"})),s.a.createElement("div",null,"Loading CDC Data...")))});const z="&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N",K=async e=>{try{let t=null;const a=await fetch(e);if(!a.ok)throw Error(a.statusText);return t=await a.json(),t}catch(t){console.log("fetchJsonData() error!",t)}},q=(e,t,a)=>{const n=a.search("months-");if(n>-1){const s=a.substr(n+7,a.lenth),o=ee(s),r=Number(g(o.startDate)),i=Number(g(o.endDate));return Q(e,t,r,i)}return Z(e,t,a)},Z=(e,t,a)=>{let n=[];return n="0"===a?e.filter(e=>e.state===t):e.filter(e=>e.state===t&&e.date.substr(0,4)===a),n},Q=(e,t,a,n)=>e.filter((function(e){const s=Number(e.date.substr(0,10).replaceAll("-",""));return e.state===t&&s>=a&&s<=n})).sort((function(e,t){return e.date-t.date})),ee=e=>{const t=new Date(new Date),a=new Date(new Date);return t.setMonth(t.getMonth()-e),t.setDate(1),{startDate:f(t),endDate:f(a)}},te=(e,t,a,n)=>{let s=null,o=null;if(e===k||e===T){const e=V.find(e=>e.state===a);s=q(t,e.name,n)}else s=q(t,a,n);return e===k?(o=se(e,s),o.isDataAvailable=s.length>0):x[e].isGroupedByAge?(o=oe(e,s),o.isDataAvailable=ae(o.chartDataSet)):(o=re(e,s),o.isDataAvailable=s.length>0),e!==k&&(o.dateFormatForXAxis=ne(o.chartLabels)?"month":"week"),o},ae=e=>{let t=!1;return e.forEach(e=>{e.data.forEach(e=>{t||0===Number(e)||(t=!0)})}),t},ne=e=>{let t=0;const a=[0,0,0,0,0,0,0,0,0,0,0,0];return e.forEach(e=>{const t=e.getMonth();a[t]+=1}),a.forEach(e=>{e>0&&(t+=1)}),t>1},se=(e,t)=>{const a=(e=>{var t=[];return e.forEach(e=>{const a=Number(e.covid_19_deaths)?Number(e.covid_19_deaths):0,n=Number(e.total_deaths)?Number(e.total_deaths):0,s=t.find(t=>t.age_group===e.age_group);if(s)s.sum_covid_19_deaths+=a,s.sum_total_deaths+=n;else{const s={age_group:e.age_group,sum_covid_19_deaths:a,sum_total_deaths:n};t.push(s)}}),t})(t);return{chartId:e,chartDataSet:[{label:"Covid-19",backgroundColor:"red",data:a.map(e=>null==e.sum_covid_19_deaths?0:e.sum_covid_19_deaths)},{label:"All Deaths",backgroundColor:"blue",data:a.map(e=>null==e.sum_total_deaths?0:e.sum_total_deaths)}],chartLabels:function(e){var t=[];return e.forEach((function(e){var a=b(e);t.push(a)})),t}(H[e])}},oe=(e,t)=>{const a=[],n=H[e],s=M[e][0];n.forEach((e,n)=>{const o=t.filter(t=>t.age_group===e).map(e=>e[s]?e[s]:0),r=b(e),i=o.reduce((e,t)=>Number(e)+Number(t),0),l={fieldName:s,label:r,backgroundColor:D[n],borderColor:D[n],borderWidth:1.5,fill:!1,dataTotal:i,data:o};a.push(l)});const o=t.map(e=>e.date.substr(0,10));return{chartId:e,chartDataSet:a,chartLabels:y(o)}},re=(e,t)=>{const a=[],n=M[e];n.forEach((e,t)=>{a.push({fieldName:e,label:C[e],fill:!1,backgroundColor:D[t],borderColor:D[t],borderWidth:1.5,dataTotal:0,data:[]})}),t.forEach(e=>{n.forEach(t=>{const n=a.find(e=>e.fieldName===t),s=e[t]?e[t]:0;n.dataTotal+=Number(s),n.data.push(s)})});const s=t.map(e=>e.date.substr(0,10));return{chartId:e,chartDataSet:a,chartLabels:y(s)}};var ie=Object(i.b)(e=>({chartConfig:e.chartConfig,isDataLoaded:e.chartConfig.isDataLoaded}),e=>({setCOVID19Data:t=>e(function(e){return{type:U.SET_COVID19_DATA,payload:e}}(t))}))(e=>{let{setCOVID19Data:t,isDataLoaded:a,chartConfig:o}=e;return Object(n.useEffect)(()=>{!async function(){try{if(!a){const e=await(async()=>{try{const e=await K("https://data.cdc.gov/resource/pwn4-m3yp.json?$select=end_date as date,state,new_cases as new_case,new_deaths as new_death&$order=date,state&$where=date<'2023-05-01'"+z),t=await K("https://data.cdc.gov/resource/pwn4-m3yp.json?$select=end_date as date,'USA' as state,sum(new_cases) as new_case,sum(new_deaths) as new_death&$group=date&$order=date&$where=date<'2023-05-01'"+z),a=e.concat(t),n=await K("https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,inpatient_beds_used_covid as inpatient_beds_covid,total_staffed_adult_icu_beds as icu_beds, staffed_icu_adult_patients_confirmed_covid as icu_beds_covid&$order=date, state&$where=date<'2023-05-01'"+z),s=await K("https://healthdata.gov/resource/g62h-syeh.json?$select=date,'USA' as state,sum(inpatient_beds)as inpatient_beds,sum(inpatient_beds_used_covid) as inpatient_beds_covid,sum(total_staffed_adult_icu_beds) as icu_beds,sum(staffed_icu_adult_patients_confirmed_covid) as icu_beds_covid&$group=date&$order=date&$where=date<'2023-05-01'"+z),o=await K("https://health.data.ny.gov/resource/jw46-jpb7.json?$select=as_of_date as date,'NYC' as state, sum(total_staffed_acute_care) as inpatient_beds, sum(patients_currently) as inpatient_beds_covid, sum(total_staffed_icu_beds_1) as icu_beds, sum(patients_currently_in_icu) as icu_beds_covid where as_of_date < '2023-05-01' and ny_forward_region = 'NEW YORK CITY' group by date, state order by date desc"+z),r=n.concat(s).concat(o),i=await K("https://data.cdc.gov/resource/9bhg-hcku.json?$select=start_date as date,state,age_group,covid_19_deaths,total_deaths where start_date < '2023-05-01' and sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') order by start_date,state,age_group "+z),l=await K("https://data.cdc.gov/resource/m74n-4hbs.json?$select=weekending as date, 'USA' as state, agegroup as age_group, percent_above_average_weighted, covid19_weighted where RaceEthnicity='All Race/Ethnicity Groups' and Sex='All Sexes' and agegroup not in ('All Ages', 'Not stated') and MMWRyear in ('2020','2021','2022','2023') order by date"+z);return{dataRefreshTimestamp:new Date,cdcHistoryByJurisdiction:a,cdcHospitalDataByJurisdiction:r,cdcExcessDeathsByAgeGroup:l,cdcDeathsByAgeGroup:i}}catch(e){console.log(e)}})();t(e)}}catch(e){console.log(e)}}()},[t,a]),s.a.createElement("div",{className:"dashboard"},s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-title"},s.a.createElement("span",null,"COVID-19 Data Charts")," ",s.a.createElement("span",null,"For United States")),s.a.createElement("div",{className:"page-subtitle"},"50 U.S. States, D.C. and Puerto Rico **")),s.a.createElement(F,null),a?s.a.createElement("div",{className:"page-layout"},s.a.createElement(j,{chartObject:te(L,o.cdcHistoryByJurisdiction,o.selectedState,o.selectedYear),displaySummary:!0}),s.a.createElement(j,{chartObject:te(I,o.cdcHospitalDataByJurisdiction,o.selectedState,o.selectedYear),displaySummary:!0}),s.a.createElement(j,{chartObject:te(T,o.cdcDeathsByAgeGroup,o.selectedState,o.selectedYear)}),s.a.createElement(j,{chartObject:te(k,o.cdcDeathsByAgeGroup,o.selectedState,o.selectedYear)}),s.a.createElement(j,{chartObject:te(Y,o.cdcExcessDeathsByAgeGroup,o.selectedState,o.selectedYear),isFullWidthChart:!0}),s.a.createElement(j,{chartObject:te(O,o.cdcExcessDeathsByAgeGroup,o.selectedState,o.selectedYear),isFullWidthChart:!0})):s.a.createElement(J,null),s.a.createElement("div",{className:"page-footer"},s.a.createElement("div",{className:"footer-message"},s.a.createElement("strong",null,"** As of April & May of 2023, the CDC terminated several Covid19 data collections. This application does not query the CDC site past those termination dates. For more information, click on the chart's data source links."),s.a.createElement("br",null)),s.a.createElement("p",null,"~ ~ ~"),"Data Sources:",s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://data.cdc.gov")},"Center For Disease Control"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://healthdata.gov/")},"HealthData"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://health.data.ny.gov/")},"NY State Health Data"),s.a.createElement("p",null,"~ ~ ~"),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://tanyamiranda.github.io/")},"Contact Developer"),s.a.createElement("br",null)))});a(31);var le=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(ie,null)))},ce=a(3),de=(a(32),a(4)),ue={dataRefreshTimestamp:null,isDataLoaded:!1,selectedState:null,selectedYear:null,selectedFields:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.SET_COVID19_DATA:return{selectedState:"USA",selectedYear:"0",isDataLoaded:!0,cdcHistoryByJurisdiction:t.payload.cdcHistoryByJurisdiction,cdcTotalsByJurisdiction:t.payload.cdcTotalsByJurisdiction,cdcHospitalDataByJurisdiction:t.payload.cdcHospitalDataByJurisdiction,cdcVaxByAgeGroup:t.payload.cdcVaxByAgeGroup,cdcExcessDeathsByAgeGroup:t.payload.cdcExcessDeathsByAgeGroup,cdcDeathsByAgeGroup:t.payload.cdcDeathsByAgeGroup};case U.SET_STATE_SELECTION:return Object(de.a)(Object(de.a)({},e),{},{selectedState:t.payload});case U.SET_YEAR_SELECTION:return Object(de.a)(Object(de.a)({},e),{},{selectedYear:t.payload});default:return e}},me=Object(ce.b)({chartConfig:pe});var he=Object(ce.c)(me,ce.a.apply(void 0,[]));r.a.render(s.a.createElement(i.a,{store:he},s.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid19-by-state","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,e)}))}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.31a41ce4.chunk.js.map