(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spinning-blue-circle.cbcc3646.gif"},,,function(e,t,a){e.exports=a(41)},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=a(1),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(27);var d=a(2),u=a.n(d),p=a(3),m=(a(29),a(30),a(14)),h=a(12),f=a.n(h),_=(a(33),[]),b=function(e){var t=e.chartType,a=e.chartOptions,s=e.chartLabels,o=e.chartDataSet,c=e.chartId,i=e.isTallChart,l=Object(n.useRef)(null),d=Object(n.useState)(null),u=Object(m.a)(d,2),p=u[0],h=u[1];return Object(n.useEffect)((function(){if(l&&l.current){var e={type:t,options:a,data:{labels:s,datasets:o}};"undefined"!==typeof _[c]&&_[c].destroy(),_[c]=new f.a(l.current,e),h(_)}}),[l,t,a,s,o,c]),r.a.createElement("div",{className:"chart-display"+(i?" tall-chart-display":"")},r.a.createElement("canvas",{id:p?c:"0",ref:l}))},v=a(15),E=function(e){return e||(e=0),Intl.NumberFormat("en-US",{useGrouping:!0}).format(e)},g=function(e,t){if(0===t)return"0";var a=(e/t*100).toFixed(2);return"0.00"===a&&(a="< 0.01"),a+"%"},y=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=""+t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),Number(r+a+n)},S=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=""+t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),r+"-"+a+"-"+n+"T00:00:00.000"},A=function(e){return e.toLowerCase().replace("years and over","+").replace("years","").replace("year","").replace("Under","<").replaceAll(" ","")},C=function(e){var t=[];return Object(v.a)(new Set(e.map((function(e){return e.substr(0,10)})))).forEach((function(e){var a=Number(e.substring(2,4)),n=Number(e.substring(5,7)),r=Number(e.substring(8,10)),s=new Date(n+"/"+r+"/"+a);t.push(s)})),t},D=(a(34),function(e){var t=e.dataSource;return r.a.createElement("div",null,null!=t?r.a.createElement("div",{className:"data-sources"},"Source:\xa0",r.a.createElement("span",{className:"site-link",onClick:function(){return window.open(t.url)}},t.label),r.a.createElement("span",{className:"footer-comment"},r.a.createElement("br",null),t.comment)):r.a.createElement("span",null))}),N=["months-6","months-9","months-12","2021","2020","0"],T={"months-6":"Last 6 months","months-9":"Last 9 months","months-12":"Last 12 months",2021:"All 2021",2020:"All 2020",0:"All Time"},Y=["green","red","blue","orange","pink","lime","black","cyan","purple","brown","voilet","chartreuse","CadetBlue","darkgreen","DarkGoldenRod","darkslategray","crimson","Turquoise","steelblue","sand","salmon"],w={new_case:"New Cases",new_death:"New Deaths",inpatient_beds_covid:"Inpatient",icu_beds_covid:"ICU"},O="DEATHS_BY_AGE",x="VAX_FIRST_DOSE",I="VAX_COMPLETE_DOSE",k="EXCESS_DEATHS",L="EXCESS_DEATHS_PCT",B="HOSPITAL_DATA",M="AGE_GROUP_SUMMARY",j="CASES_DEATHS",H={DEATHS_BY_AGE:{title:"Covid Deaths By Age",description:"Deaths involving Covid-19 by age group.",chartType:"line",isGroupedByAge:!0},VAX_FIRST_DOSE:{title:"% Vaxed By Age - First Dose",description:"Percent of people vaccinated with first dosage by age group.",chartType:"line",isGroupedByAge:!0},VAX_COMPLETE_DOSE:{title:"% Vaxed By Age - Completed",description:"Percent of people vaccinated with complete dosage by age group.",chartType:"line",isGroupedByAge:!0},EXCESS_DEATHS:{title:"Excess Deaths By Age - Weighted",description:"All excess Deaths above or below expected range by age group.",chartType:"line",isGroupedByAge:!0},EXCESS_DEATHS_PCT:{title:"% Excess Deaths By Age - Weighted",description:"Weighted percentage of all excess Deaths above or below expected range by age group.",chartType:"line",isGroupedByAge:!0},HOSPITAL_DATA:{title:"New Hospital Inpatient & ICU",description:"Patients admitted to inpatient care and ICU to treat Covid-19 symptoms.",chartType:"line",isGroupedByAge:!1},AGE_GROUP_SUMMARY:{title:"All Deaths by Age Summary",description:"Summary of all deaths by age group alongside Covid-19 deaths for comparison.",chartType:"bar"},CASES_DEATHS:{title:"New Cases & Deaths",description:"New confirmed and probable Covid-19 cases and deaths.",chartType:"line",isGroupedByAge:!1}},R={DEATHS_BY_AGE:["covid_19_deaths"],VAX_FIRST_DOSE:["first_dose_pct"],VAX_COMPLETE_DOSE:["completed_pct"],EXCESS_DEATHS:["covid19_weighted"],EXCESS_DEATHS_PCT:["percent_above_average_weighted"],HOSPITAL_DATA:["inpatient_beds_covid","icu_beds_covid"],CASES_DEATHS:["new_case","new_death"],AGE_GROUP_SUMMARY:[]},G={DEATHS_BY_AGE:["0-17 years","18-29 years","30-39 years","40-49 years","50-64 years","65-74 years","75-84 years","85 years and over"],AGE_GROUP_SUMMARY:["0-17 years","18-29 years","30-39 years","40-49 years","50-64 years","65-74 years","75-84 years","85 years and over"],VAX_FIRST_DOSE:["5 - 11 Years","12 - 17 Years","18 - 24 Years","25 - 39 Years","40 - 49 Years","50 - 64 Years","65 - 74 Years","75+ Years"],VAX_COMPLETE_DOSE:["5 - 11 Years","12 - 17 Years","18 - 24 Years","25 - 39 Years","40 - 49 Years","50 - 64 Years","65 - 74 Years","75+ Years"],EXCESS_DEATHS:["0-14 Years","15-19 Years","20-24 Years","25-29 Years","30-34 Years","35-39 Years","40-44 Years","45-49 Years","50-54 Years","55-59 Years","60-64 Years","65-69 Years","70-74 Years","75-79 Years","80-84 Years","85+"],EXCESS_DEATHS_PCT:["0-14 Years","15-19 Years","20-24 Years","25-29 Years","30-34 Years","35-39 Years","40-44 Years","45-49 Years","50-54 Years","55-59 Years","60-64 Years","65-69 Years","70-74 Years","75-79 Years","80-84 Years","85+"]},V={aspectRatio:1,maintainAspectRatio:!1,responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",footerFontStyle:"normal",bodySpacing:5,titleMarginBottom:10,footerMarginTop:10,callbacks:{title:function(e){return"Ages "+e[0].label},label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()},footer:function(e){var t=e[0].value,a=e[1].value;return[parseFloat(t/a*100).toFixed(1)+"%"+" of all deaths","due to COVID-19"]}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:10}},elements:{point:{radius:0}},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!1,ticks:{callback:function(e){return P(e)}}}]}},P=function(e){var t=Number(e);return t>=1e6?t/1e6+"M":t>=1e4?t/1e3+"K":t},U=function(e,t){if(e===M)return V;var a=!1,n=!1,r=!1;return e!==x&&e!==I&&e!==L||(n=!0),e!==L&&e!==k||(r=!0),e===O&&(a=!0),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;return{responsive:!0,aspectRatio:1,maintainAspectRatio:!1,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",position:"nearest",bodySpacing:5,callbacks:{label:function(e,a){var n=a.datasets[e.datasetIndex].label,r=a.datasets[e.datasetIndex].data[e.index];return t?n+" : "+parseFloat(r)+"%":n+" : "+parseInt(r).toLocaleString()}}},interaction:{intersect:!1,axis:"x"},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:15}},elements:{point:{radius:0}},scales:{xAxes:[{display:!0,type:"time",gridLines:{display:!0,lineWidth:1,zeroLineWidth:1,zeroLineColor:"#e8e8e8",color:"#e8e8e8"},time:{unit:n,tooltipFormat:e?"MMM YYYY":"MM/DD/YYYY",displayFormats:{month:"MMM YYYY",week:"MM/DD/YYYY"}},scaleLabel:{display:!0},ticks:{min:0}}],yAxes:[{display:!0,scaleLabel:{display:!1},ticks:{min:a?void 0:0,callback:function(e){var a=e;return t?a+="%":a=P(e),a}}}]}}}(a,n,r,t)},W=Object(c.b)((function(e){return{chartConfig:e.chartConfig}}))((function(e){var t=e.chartConfig,a=e.chartObject,n=e.displaySummary,s=void 0!==n&&n,o=e.isFullWidthChart,c=void 0!==o&&o,i=t.isDataLoaded,l=a.isDataAvailable,d="";i&&l&&(d="Problem fetching data from CDC site.");var u=H[a.chartId].chartType,p=H[a.chartId].title,m=U(a.chartId,a.dateFormatForXAxis),h=function(e){switch(e){case j:return{url:"https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36",label:"Center for Disease Control",comment:""};case B:return{url:"https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",label:"Center for Disease Control",comment:""};case"NYC":return{url:"https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data",label:"Healthdata.gov",comment:""};case O:case M:return{url:"https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",label:"Center for Disease Control",comment:"Note: This dataset is updated weekly."};case x:case I:return{url:"https://data.cdc.gov/Vaccinations/COVID-19-Vaccination-and-Case-Trends-by-Age-Group-/gxj9-t96f",label:"Center for Disease Control",comment:"Note: Available at U.S. level only. State level data not available."};case k:case L:return{url:"https://data.cdc.gov/NCHS/AH-Excess-Deaths-by-Sex-Age-and-Race-and-Hispanic-/m74n-4hbs",label:"Center for Disease Control",comment:"Note: Available at U.S. level only. State level data not available."};default:return null}}(a.chartId===B&&"NYC"===t.selectedState?"NYC":a.chartId);return r.a.createElement("div",{className:"dashboard-component state-history-chart"+(c?" full-width-component":"")},r.a.createElement("div",{className:"dashboard-component-title"},r.a.createElement("span",null,p)),i&&l?r.a.createElement(b,{chartType:u,chartOptions:m,chartLabels:a.chartLabels,chartDataSet:a.chartDataSet,chartId:a.chartId,isTallChart:c}):r.a.createElement("div",null,d),s?r.a.createElement("div",{className:"chart-summary"},r.a.createElement("div",{className:"summary-title"},"Totals for Selection"),a.chartDataSet.map((function(e){return r.a.createElement("div",{className:"chart-summary-row",key:e.label},r.a.createElement("div",{className:"label"},e.label),r.a.createElement("div",{className:"value"},E(e.dataTotal)))}))):r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(D,{dataSource:h})))})),F=(a(35),[{state:"USA",name:"United States",population:334735155},{state:"AK",name:"Alaska",population:733391},{state:"AL",name:"Alabama",population:5024279},{state:"AR",name:"Arkansas",population:3011524},{state:"AZ",name:"Arizona",population:7151502},{state:"CA",name:"California",population:39538223},{state:"CO",name:"Colorado",population:5773714},{state:"CT",name:"Connecticut",population:3605944},{state:"DC",name:"District of Columbia",population:689545},{state:"DE",name:"Delaware",population:989948},{state:"FL",name:"Florida",population:21538187},{state:"GA",name:"Georgia",population:10711908},{state:"HI",name:"Hawaii",population:1455271},{state:"IA",name:"Iowa",population:3190369},{state:"ID",name:"Idaho",population:1839106},{state:"IL",name:"Illinois",population:12812508},{state:"IN",name:"Indiana",population:6785528},{state:"KS",name:"Kansas",population:2937880},{state:"KY",name:"Kentucky",population:4505836},{state:"LA",name:"Louisiana",population:4657757},{state:"MA",name:"Massachusetts",population:7029917},{state:"MD",name:"Maryland",population:6177224},{state:"ME",name:"Maine",population:1362359},{state:"MI",name:"Michigan",population:10077331},{state:"MN",name:"Minnesota",population:5706494},{state:"MO",name:"Missouri",population:6154913},{state:"MS",name:"Mississippi",population:2961279},{state:"MT",name:"Montana",population:1084225},{state:"NC",name:"North Carolina",population:10439388},{state:"ND",name:"North Dakota",population:779094},{state:"NE",name:"Nebraska",population:1961504},{state:"NH",name:"New Hampshire",population:1377529},{state:"NJ",name:"New Jersey",population:9288994},{state:"NM",name:"New Mexico",population:2117522},{state:"NV",name:"Nevada",population:3104614},{state:"NY",name:"New York",population:20201249,extra:" (Excludes NYC)"},{state:"NYC",name:"New York City",population:8804190},{state:"OH",name:"Ohio",population:11799448},{state:"OK",name:"Oklahoma",population:3959353},{state:"OR",name:"Oregon",population:4237256},{state:"PA",name:"Pennsylvania",population:13002700},{state:"PR",name:"Puerto Rico",population:3285874},{state:"RI",name:"Rhode Island",population:1097379},{state:"SC",name:"South Carolina",population:5118425},{state:"SD",name:"South Dakota",population:886667},{state:"TN",name:"Tennessee",population:6910840},{state:"TX",name:"Texas",population:29145505},{state:"UT",name:"Utah",population:3271616},{state:"VA",name:"Virginia",population:8631393},{state:"VT",name:"Vermont",population:643077},{state:"WA",name:"Washington",population:7705281},{state:"WI",name:"Wisconsin",population:5893718},{state:"WV",name:"West Virginia",population:1793716},{state:"WY",name:"Wyoming",population:576851}]),J=function(){var e=[];return F.forEach((function(t){e.push(t.state)})),e},X=function(e){return F.find((function(t){return t.state===e}))},$={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA",SET_STATE_HISTORY_DATA:"SET_STATE_HISTORY_DATA",SET_YEAR_SELECTION:"SET_YEAR_SELECTION"},z=Object(c.b)((function(e){return{selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear}}),(function(e){return{setStateSelection:function(t){return e({type:$.SET_STATE_SELECTION,payload:t})},setYearSelection:function(t){return e({type:$.SET_YEAR_SELECTION,payload:t})}}}))((function(e){var t=e.selectedState,a=e.selectedYear,n=e.setStateSelection,s=e.setYearSelection,o=J();return r.a.createElement("div",{className:"chart-configuration"},r.a.createElement("div",{className:"top-section"},r.a.createElement("span",{className:"config-section"},r.a.createElement("select",{name:"stateSelection",defaultValue:t||"USA",onChange:function(e){n(e.target.value)}},o.map((function(e){return r.a.createElement("option",{key:e,value:e},X(e).name+(null!=X(e).extra?X(e).extra:""))})))),r.a.createElement("span",{className:"config-year"},r.a.createElement("select",{name:"yearSelection",defaultValue:a||"months-6",onChange:function(e){s(e.target.value)}},N.map((function(e){return r.a.createElement("option",{key:e,value:e},T[e])}))))))})),K=a(13),q=a.n(K),Z=(a(36),function(){return r.a.createElement("div",{className:"spinner-page"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"spinner-image",src:q.a,alt:"Loading CDC Data"})),r.a.createElement("div",null,"Loading CDC Data...")))}),Q=(a(37),Object(c.b)((function(e){return{selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,cdcTotalsByJurisdiction:e.chartConfig.cdcTotalsByJurisdiction}}))((function(e){var t=e.selectedState,a=e.cdcTotalsByJurisdiction,n=Array.isArray(a)&&a.length>0,s=X(t),o=[],c=0,i=0,l=0,d=0;return n&&(o=a.find((function(e){return e.state===t})),c=g(o.total_deaths,s.population),i=g(o.inpatient_beds_covid,o.inpatient_beds),l=g(o.icu_beds_covid,o.icu_beds),d=g(o.total_deaths,o.total_cases)),r.a.createElement("div",{className:"data-totals-component"},n?r.a.createElement("div",null,r.a.createElement("div",{className:"data-totals-title"},"Current Totals for ",r.a.createElement("span",null,s.name)," ",r.a.createElement("span",null,null!=s.extra?s.extra:"")),r.a.createElement("div",{className:"data-totals"},r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Total Cases"),r.a.createElement("div",{className:"data-number"},E(o.total_cases)),r.a.createElement("div",{className:"percent"},"Confirmed & Probable Cases")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Total Deaths"),r.a.createElement("div",{className:"data-number"},E(o.total_deaths)),r.a.createElement("div",{className:"percent"},c," of Est. Pop** ",r.a.createElement("br",null),d," of Total Cases")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Now Hospitalized"),r.a.createElement("div",{className:"data-number"},E(o.inpatient_beds_covid)),r.a.createElement("div",{className:"percent"},i," of ",E(o.inpatient_beds),r.a.createElement("br",null),"Inpatient Beds Available")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Now In ICU"),r.a.createElement("div",{className:"data-number"},E(o.icu_beds_covid)),r.a.createElement("div",{className:"percent"},l," of ",E(o.icu_beds),r.a.createElement("br",null),"ICU Beds Available")))):r.a.createElement("div",null,"Problem fetching data from CDC site..."),r.a.createElement("div",{className:"more-data"},r.a.createElement("div",null,"** Estimated population of ",t,": ",E(s.population))))}))),ee="&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N",te=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r,s,o,c,i,l,d,p,m,h,f,_;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae("https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date, state"+ee);case 3:return t=e.sent,e.next=6,ae("https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,'USA' as state,sum(new_case) as new_case,sum(new_death) as new_death&$group=submission_date&$order=submission_date"+ee);case 6:return a=e.sent,n=t.concat(a),r=re(n),e.next=11,ae("https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,inpatient_beds_used_covid as inpatient_beds_covid,total_staffed_adult_icu_beds as icu_beds, staffed_icu_adult_patients_confirmed_covid as icu_beds_covid&$order=date, state"+ee);case 11:return s=e.sent,e.next=14,ae("https://healthdata.gov/resource/g62h-syeh.json?$select=date,'USA' as state,sum(inpatient_beds)as inpatient_beds,sum(inpatient_beds_used_covid) as inpatient_beds_covid,sum(total_staffed_adult_icu_beds) as icu_beds,sum(staffed_icu_adult_patients_confirmed_covid) as icu_beds_covid&$group=date&$order=date"+ee);case 14:return o=e.sent,e.next=17,ae("https://health.data.ny.gov/resource/jw46-jpb7.json?$select=as_of_date as date,'NYC' as state, sum(total_staffed_acute_care) as inpatient_beds, sum(patients_currently) as inpatient_beds_covid, sum(total_staffed_icu_beds_1) as icu_beds, sum(patients_currently_in_icu) as icu_beds_covid where ny_forward_region = 'NEW YORK CITY' group by date, state order by date desc"+ee);case 17:return c=e.sent,i=s.concat(o).concat(c),l=s.reduce((function(e,t){return e.date>t.date?e:t})).date,d=c.reduce((function(e,t){return e.date>t.date?e:t})).date,p=i.filter((function(e){var t=e.date;return"NYC"===e.state&&t===d||t===l})),e.next=24,ne(r,p);case 24:return m=e.sent,e.next=27,ae("https://data.cdc.gov/resource/9bhg-hcku.json?$select=start_date as date,state,age_group,covid_19_deaths,total_deaths where sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') order by start_date,state,age_group"+ee);case 27:return h=e.sent,e.next=30,ae("https://data.cdc.gov/resource/gxj9-t96f.json?$select=cdc_case_earliest_dt as date,'USA' as state,agegroupvacc as age_group,administered_dose1_pct * 100 as first_dose_pct,series_complete_pop_pct * 100 as completed_pct&$order=cdc_case_earliest_dt"+ee);case 30:return f=e.sent,e.next=33,ae("https://data.cdc.gov/resource/m74n-4hbs.json?$select=weekending as date, 'USA' as state, agegroup as age_group, percent_above_average_weighted, covid19_weighted where RaceEthnicity='All Race/Ethnicity Groups' and Sex='All Sexes' and agegroup not in ('All Ages', 'Not stated') and MMWRyear in ('2020','2021','2022','2023') order by date"+ee);case 33:return _=e.sent,e.abrupt("return",{dataRefreshTimestamp:new Date,cdcTotalsByJurisdiction:m,cdcHistoryByJurisdiction:n,cdcHospitalDataByJurisdiction:i,cdcVaxByAgeGroup:f,cdcExcessDeathsByAgeGroup:_,cdcDeathsByAgeGroup:h});case 37:e.prev=37,e.t0=e.catch(0),console.log(e.t0);case 40:case"end":return e.stop()}}),e,null,[[0,37]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null,e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:a=e.sent,e.next=12;break;case 11:throw Error(n.statusText);case 12:return e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.log("fetchJsonData() error!",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],J().forEach((function(e){var r=t.find((function(t){return t.state===e})),s=a.find((function(t){return t.state===e}));s||(s={inpatient_beds:0,inpatient_beds_covid:0,icu_beds:0,icu_beds_covid:0}),n.push({state:e,total_cases:Number(r.total_cases),total_deaths:Number(r.total_deaths),inpatient_beds:Number(s.inpatient_beds),inpatient_beds_covid:Number(s.inpatient_beds_covid),icu_beds:Number(s.icu_beds),icu_beds_covid:Number(s.icu_beds_covid)})})),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),re=function(e){var t=[];return e.forEach((function(e){var a=Number(e.new_case),n=Number(e.new_death),r=e.state,s=t.find((function(e){return e.state===r}));if(s)s.total_cases+=a,s.total_deaths+=n;else{var o={state:r,total_cases:a,total_deaths:n};t.push(o)}})),t},se=function(e,t,a){var n=a.search("months-");if(n>-1){var r=a.substr(n+7,a.lenth),s=ie(r),o=Number(y(s.startDate)),c=Number(y(s.endDate));return ce(e,t,o,c)}return oe(e,t,a)},oe=function(e,t,a){return("0"===a?e.filter((function(e){return e.state===t})):e.filter((function(e){return e.state===t&&e.date.substr(0,4)===a}))).sort((function(e,t){return e.date-t.date}))},ce=function(e,t,a,n){return e.filter((function(e){var r=Number(e.date.substr(0,10).replaceAll("-",""));return e.state===t&&r>=a&&r<=n})).sort((function(e,t){return e.date-t.date}))},ie=function(e){var t=new Date(new Date),a=new Date(new Date);return t.setMonth(t.getMonth()-e),t.setDate(1),{startDate:S(t),endDate:S(a)}},le=function(e,t,a,n){var r=null,s=null;if(e===M||e===O){var o=F.find((function(e){return e.state===a}));r=se(t,o.name,n)}else r=se(t,a,n);return e===M?(s=pe(e,r)).isDataAvailable=r.length>0:H[e].isGroupedByAge?(s=me(e,r)).isDataAvailable=de(s.chartDataSet):(s=he(e,r)).isDataAvailable=r.length>0,e!==M&&(s.dateFormatForXAxis=ue(s.chartLabels)?"month":"week"),s},de=function(e){var t=!1;return e.forEach((function(e){e.data.forEach((function(e){t||0===Number(e)||(t=!0)}))})),t},ue=function(e){var t=0,a=[0,0,0,0,0,0,0,0,0,0,0,0];return e.forEach((function(e){var t=e.getMonth();a[t]+=1})),a.forEach((function(e){e>0&&(t+=1)})),t>1},pe=function(e,t){var a=function(e){var t=[];return e.forEach((function(e){var a=Number(e.covid_19_deaths)?Number(e.covid_19_deaths):0,n=Number(e.total_deaths)?Number(e.total_deaths):0,r=t.find((function(t){return t.age_group===e.age_group}));if(r)r.sum_covid_19_deaths+=a,r.sum_total_deaths+=n;else{var s={age_group:e.age_group,sum_covid_19_deaths:a,sum_total_deaths:n};t.push(s)}})),t}(t);return{chartId:e,chartDataSet:[{label:"Covid-19",backgroundColor:"red",data:a.map((function(e){return null==e.sum_covid_19_deaths?0:e.sum_covid_19_deaths}))},{label:"All Deaths",backgroundColor:"blue",data:a.map((function(e){return null==e.sum_total_deaths?0:e.sum_total_deaths}))}],chartLabels:function(e){var t=[];return e.forEach((function(e){var a=A(e);t.push(a)})),t}(G[e])}},me=function(e,t){var a=[],n=G[e],r=R[e][0];n.forEach((function(e,n){var s=t.filter((function(t){return t.age_group===e})).map((function(e){return e[r]?e[r]:0})),o=A(e),c=s.reduce((function(e,t){return Number(e)+Number(t)}),0),i={fieldName:r,label:o,backgroundColor:Y[n],borderColor:Y[n],borderWidth:1.5,fill:!1,dataTotal:c,data:s};a.push(i)}));var s=t.map((function(e){return e.date.substr(0,10)}));return{chartId:e,chartDataSet:a,chartLabels:C(s)}},he=function(e,t){var a=[],n=R[e];n.forEach((function(e,t){a.push({fieldName:e,label:w[e],fill:!1,backgroundColor:Y[t],borderColor:Y[t],borderWidth:1.5,dataTotal:0,data:[]})})),t.forEach((function(e){n.forEach((function(t){var n=a.find((function(e){return e.fieldName===t})),r=e[t]?e[t]:0;n.dataTotal+=Number(r),n.data.push(r)}))}));var r=t.map((function(e){return e.date.substr(0,10)}));return{chartId:e,chartDataSet:a,chartLabels:C(r)}},fe=Object(c.b)((function(e){return{chartConfig:e.chartConfig,isDataLoaded:e.chartConfig.isDataLoaded}}),(function(e){return{setCOVID19Data:function(t){return e(function(e){return{type:$.SET_COVID19_DATA,payload:e}}(t))}}}))((function(e){var t=e.setCOVID19Data,a=e.isDataLoaded,s=e.chartConfig;return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a){e.next=6;break}return e.next=4,te();case 4:n=e.sent,t(n);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a]),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"page-title"},r.a.createElement("span",null,"COVID-19 Data Charts")," ",r.a.createElement("span",null,"For United States")),r.a.createElement("div",{className:"page-subtitle"},"50 U.S. States, D.C. and Puerto Rico")),r.a.createElement(z,null),a?r.a.createElement("div",{className:"page-layout"},r.a.createElement(Q,null),r.a.createElement(W,{chartObject:le(j,s.cdcHistoryByJurisdiction,s.selectedState,s.selectedYear),displaySummary:!0}),r.a.createElement(W,{chartObject:le(B,s.cdcHospitalDataByJurisdiction,s.selectedState,s.selectedYear),displaySummary:!0}),r.a.createElement(W,{chartObject:le(O,s.cdcDeathsByAgeGroup,s.selectedState,s.selectedYear)}),r.a.createElement(W,{chartObject:le(M,s.cdcDeathsByAgeGroup,s.selectedState,s.selectedYear)}),r.a.createElement(W,{chartObject:le(x,s.cdcVaxByAgeGroup,s.selectedState,s.selectedYear),isFullWidthChart:!0}),r.a.createElement(W,{chartObject:le(I,s.cdcVaxByAgeGroup,s.selectedState,s.selectedYear),isFullWidthChart:!0}),r.a.createElement(W,{chartObject:le(k,s.cdcExcessDeathsByAgeGroup,s.selectedState,s.selectedYear),isFullWidthChart:!0}),r.a.createElement(W,{chartObject:le(L,s.cdcExcessDeathsByAgeGroup,s.selectedState,s.selectedYear),isFullWidthChart:!0})):r.a.createElement(Z,null),r.a.createElement("div",{className:"page-footer"},"Data Sources:",r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://data.cdc.gov")}},"Center For Disease Control"),r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://healthdata.gov/")}},"Healthdata.gov"),r.a.createElement("br",null),"~ ~ ~",r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://tanyamiranda.github.io/")}},"Contact Developer"),r.a.createElement("br",null)))}));a(38);var _e=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(fe,null)))},be=a(5),ve=(a(39),a(6)),Ee={dataRefreshTimestamp:null,isDataLoaded:!1,selectedState:null,selectedYear:null,selectedFields:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.SET_COVID19_DATA:return{selectedState:"USA",selectedYear:"months-6",isDataLoaded:!0,cdcHistoryByJurisdiction:t.payload.cdcHistoryByJurisdiction,cdcTotalsByJurisdiction:t.payload.cdcTotalsByJurisdiction,cdcHospitalDataByJurisdiction:t.payload.cdcHospitalDataByJurisdiction,cdcVaxByAgeGroup:t.payload.cdcVaxByAgeGroup,cdcExcessDeathsByAgeGroup:t.payload.cdcExcessDeathsByAgeGroup,cdcDeathsByAgeGroup:t.payload.cdcDeathsByAgeGroup};case $.SET_STATE_SELECTION:return Object(ve.a)(Object(ve.a)({},e),{},{selectedState:t.payload});case $.SET_YEAR_SELECTION:return Object(ve.a)(Object(ve.a)({},e),{},{selectedYear:t.payload});default:return e}},ye=Object(be.b)({chartConfig:ge});var Se=Object(be.c)(ye,be.a.apply(void 0,[]));o.a.render(r.a.createElement(c.a,{store:Se},r.a.createElement(_e,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid19-by-state","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}],[[16,1,2]]]);
//# sourceMappingURL=main.dc7ac68d.chunk.js.map