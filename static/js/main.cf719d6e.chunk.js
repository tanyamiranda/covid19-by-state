(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spinning-blue-circle.cbcc3646.gif"},,function(e,t,a){e.exports=a(39)},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),i=a(1),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(24);var u=a(2),d=a.n(u),p=a(3),m=(a(26),[]);m.AK={name:"Alaska",population:733391},m.AL={name:"Alabama",population:5024279},m.AR={name:"Arkansas",population:3011524},m.AZ={name:"Arizona",population:7151502},m.CA={name:"California",population:39538223},m.CO={name:"Colorado",population:5773714},m.CT={name:"Connecticut",population:3605944},m.DC={name:"District of Columbia",population:689545},m.DE={name:"Delaware",population:989948},m.FL={name:"Florida",population:21538187},m.GA={name:"Georgia",population:10711908},m.HI={name:"Hawaii",population:1455271},m.IA={name:"Iowa",population:3190369},m.ID={name:"Idaho",population:1839106},m.IL={name:"Illinois",population:12812508},m.IN={name:"Indiana",population:6785528},m.KS={name:"Kansas",population:2937880},m.KY={name:"Kentucky",population:4505836},m.LA={name:"Louisiana",population:4657757},m.MA={name:"Massachusetts",population:7029917},m.MD={name:"Maryland",population:6177224},m.ME={name:"Maine",population:1362359},m.MI={name:"Michigan",population:10077331},m.MN={name:"Minnesota",population:5706494},m.MO={name:"Missouri",population:6154913},m.MS={name:"Mississippi",population:2961279},m.MT={name:"Montana",population:1084225},m.NC={name:"North Carolina",population:10439388},m.ND={name:"North Dakota",population:779094},m.NE={name:"Nebraska",population:1961504},m.NH={name:"New Hampshire",population:1377529},m.NJ={name:"New Jersey",population:9288994},m.NM={name:"New Mexico",population:2117522},m.NV={name:"Nevada",population:3104614},m.NY={name:"New York",population:20201249,extra:" (Excludes NYC)"},m.NYC={name:"New York City",population:8804190},m.OH={name:"Ohio",population:11799448},m.OK={name:"Oklahoma",population:3959353},m.OR={name:"Oregon",population:4237256},m.PA={name:"Pennsylvania",population:13002700},m.PR={name:"Puerto Rico",population:3285874},m.RI={name:"Rhode Island",population:1097379},m.SC={name:"South Carolina",population:5118425},m.SD={name:"South Dakota",population:886667},m.TN={name:"Tennessee",population:6910840},m.TX={name:"Texas",population:29145505},m.UT={name:"Utah",population:3271616},m.VA={name:"Virginia",population:8631393},m.VT={name:"Vermont",population:643077},m.WA={name:"Washington",population:7705281},m.WI={name:"Wisconsin",population:5893718},m.WV={name:"West Virginia",population:1793716},m.WY={name:"Wyoming",population:576851},m.USA={name:"United States",population:334735155};var _="&$limit=500000&$$app_token=fz22RHPlELrzEw1j9vq91YH6N",h=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n,r,o,s,i,c,l,u,p,m,h;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,state,new_case,new_death&$order=submission_date, state"+_);case 3:return t=e.sent,e.next=6,f("https://data.cdc.gov/resource/9mfq-cb36.json?$select=submission_date as date,'USA' as state,sum(new_case) as new_case,sum(new_death) as new_death&$group=submission_date&$order=submission_date"+_);case 6:return a=e.sent,n=t.concat(a),r=v(n),e.next=11,f("https://healthdata.gov/resource/g62h-syeh.json?$select=date,state,inpatient_beds,inpatient_beds_used_covid as inpatient_beds_covid,total_staffed_adult_icu_beds as icu_beds, staffed_icu_adult_patients_confirmed_covid as icu_beds_covid&$order=date, state"+_);case 11:return o=e.sent,e.next=14,f("https://healthdata.gov/resource/g62h-syeh.json?$select=date,'USA' as state,sum(inpatient_beds)as inpatient_beds,sum(inpatient_beds_used_covid) as inpatient_beds_covid,sum(total_staffed_adult_icu_beds) as icu_beds,sum(staffed_icu_adult_patients_confirmed_covid) as icu_beds_covid&$group=date&$order=date"+_);case 14:return s=e.sent,e.next=17,f("https://health.data.ny.gov/resource/jw46-jpb7.json?$select=as_of_date as date,'NYC' as state, sum(total_staffed_acute_care) as inpatient_beds, sum(patients_currently) as inpatient_beds_covid, sum(total_staffed_icu_beds_1) as icu_beds, sum(patients_currently_in_icu) as icu_beds_covid where ny_forward_region = 'NEW YORK CITY' group by date, state order by date desc"+_);case 17:return i=e.sent,c=o.concat(s).concat(i),l=o.reduce((function(e,t){return e.date>t.date?e:t})).date,u=i.reduce((function(e,t){return e.date>t.date?e:t})).date,p=c.filter((function(e){var t=e.date;return"NYC"===e.state&&t===u||t===l})),e.next=24,b(r,p);case 24:return m=e.sent,e.next=27,f("https://data.cdc.gov/resource/9bhg-hcku.json?$select=year,month,state,age_group,sum(covid_19_deaths),sum(total_deaths) where sex ='All Sexes' and `group`='By Month' and age_group in ('0-17 years', '18-29 years', '30-39 years','40-49 years','50-64 years','65-74 years','75-84 years','85 years and over') group by year,month,state,age_group&$order=year,month"+_);case 27:return h=e.sent,e.abrupt("return",{dataRefreshTimestamp:new Date,deathsByAgeGroups:h,cdcTotalsByJurisdiction:m,cdcHistoryByJurisdiction:n,cdcHospitalDataByJurisdiction:c});case 31:e.prev=31,e.t0=e.catch(0),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null,e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:a=e.sent,e.next=12;break;case 11:throw Error(n.statusText);case 12:return e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.log("fetchJsonData() error!",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],Object.keys(m).forEach((function(e){var r=t.find((function(t){return t.state===e})),o=a.find((function(t){return t.state===e}));o||(o={inpatient_beds:0,inpatient_beds_covid:0,icu_beds:0,icu_beds_covid:0}),n.push({state:e,total_cases:Number(r.total_cases),total_deaths:Number(r.total_deaths),inpatient_beds:Number(o.inpatient_beds),inpatient_beds_covid:Number(o.inpatient_beds_covid),icu_beds:Number(o.icu_beds),icu_beds_covid:Number(o.icu_beds_covid)})})),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(e){var t=[];return e.forEach((function(e){var a=Number(e.new_case),n=Number(e.new_death),r=e.state,o=t.find((function(e){return e.state===r}));if(o)o.total_cases+=a,o.total_deaths+=n;else{var s={state:r,total_cases:a,total_deaths:n};t.push(s)}})),t},g=["months-6","months-9","months-12","2021","2020","0"],E={"months-6":"Last 6 months","months-9":"Last 9 months","months-12":"Last 12 months",2021:"All 2021",2020:"All 2020",0:"All Time"},y=["green","red","blue","orange","pink","lime","black","cyan","purple","brown"],N={new_case:"New Cases",new_death:"New Deaths",inpatient_beds_covid:"Inpatient",icu_beds_covid:"ICU",ages_0_17:"0-17",ages_18_29:"18-29",ages_30_39:"30-39",ages_40_49:"40-49",ages_50_64:"50-64",ages_65_74:"65-74",ages_75_84:"75-84",ages_85:"85+"},C={dailyTotals:["new_case","new_death"],hospitalData:["inpatient_beds_covid","icu_beds_covid"]},S=["ages_0_17","ages_18_29","ages_30_39","ages_40_49","ages_50_64","ages_65_74","ages_75_84","ages_85"],D=function(e){return e||(e=0),Intl.NumberFormat("en-US",{useGrouping:!0}).format(e)},w=function(e,t){if(0===t)return"0";var a=(e/t*100).toFixed(2);return"0.00"===a&&(a="< 0.01"),a+"%"},A=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=""+t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),Number(r+a+n)},T=function(e,t,a){var n=m[t].name;return B(e,n,a)},I=function(e,t,a){var n=T(e,t,a),r=[];return n.forEach((function(e){var t=new Date(e.month+"/01/"+e.year).toISOString().replace("Z","").replace("T",""),a="ages_"+H(e.age_group).replaceAll("-","_").replaceAll("+","").trim(),n=Number(e.sum_covid_19_deaths),o=r.find((function(e){return e.date===t}));o?o[a]=n:(o={date:t,ages_0_17:"ages_0_17"===a?n:0,ages_18_29:"ages_18_29"===a?n:0,ages_30_39:"ages_30_39"===a?n:0,ages_40_49:"ages_40_49"===a?n:0,ages_50_64:"ages_50_64"===a?n:0,ages_65_74:"ages_65_74"===a?n:0,ages_75_84:"ages_75_84"===a?n:0,ages_85:"ages_85"===a?n:0},r.push(o))})),r},O=function(e){var t=[];return e.reduce((function(e,a){return e[a.age_group]?(e[a.age_group].sum_covid_19_deaths+=Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,e[a.age_group].sum_total_deaths+=Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0):(e[a.age_group]={age_group:a.age_group,sum_covid_19_deaths:Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,sum_total_deaths:Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0},t.push(e[a.age_group])),e}),{}),t},k=function(e,t,a){var n=a.search("months-");if(n>-1){var r=a.substr(n+7,a.lenth),o=j(r),s=Number(A(o.startDate)),i=Number(A(o.endDate));return L(e,t,s,i)}return x(e,t,a)},x=function(e,t,a){return("0"===a?e.filter((function(e){return e.state===t})):e.filter((function(e){return e.state===t&&e.date.substr(0,4)===a}))).sort((function(e,t){return e.date-t.date}))},L=function(e,t,a,n){return e.filter((function(e){var r=Number(e.date.substr(0,10).replaceAll("-",""));return e.state===t&&r>=a&&r<=n})).sort((function(e,t){return e.date-t.date}))},Y=function(e,t,a){return e.filter((function(e){var n=e.year,r=e.month,o=new Date(r+"/01/"+n);return e.state.toLowerCase()===t.toLowerCase()&&o>=a.startDate&&o<=a.endDate}))},B=function(e,t,a){var n=[],r=a.search("months-");if(r>-1){var o=Number(a.substr(r+7,a.lenth)),s=j(o);n=Y(e,t,s)}else if("0"===a)n=e.filter((function(e){return e.state.toLowerCase()===t.toLowerCase()}));else{var i=new Date("1/1/"+a),c=new Date("12/31/"+a);n=Y(e,t,{startDate:i,endDate:c})}return n.sort((function(e,t){return M(e.age_group,t.age_group)})),n},j=function(e){var t=new Date((new Date).setHours(0,0,0,0)),a=new Date((new Date).setHours(0,0,0,0));return t.setMonth(t.getMonth()-e),t.setDate(1),{startDate:t,endDate:a}},H=function(e){return e.replace("years and over","+").replace("years","").replace("year","").replace("Under","<")},M=function(e,t){var a=Number(e.substring(0,2).replace("-","").toLowerCase().replace("un","0")),n=Number(t.substring(0,2).replace("-","").toLowerCase().replace("un","0"));return a>n?1:a<n?-1:0},R={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA",SET_STATE_HISTORY_DATA:"SET_STATE_HISTORY_DATA",SET_YEAR_SELECTION:"SET_YEAR_SELECTION"},J="https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36",G="https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku",U="https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh",V="https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Hospitalizations/jw46-jpb7/data",W=function(e){return{url:G,label:"Center for Disease Control",comment:"Note: This dataset is update weekly."}},F=function(e){var t={url:U,label:"HealthData.gov",comment:""};return"NYC"===e&&(t.url=V,t.label="Health Data NY"),t},P=(a(27),Object(i.b)((function(e){return{selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear}}),(function(e){return{setStateSelection:function(t){return e({type:R.SET_STATE_SELECTION,payload:t})},setYearSelection:function(t){return e({type:R.SET_YEAR_SELECTION,payload:t})}}}))((function(e){var t=e.selectedState,a=e.selectedYear,n=e.setStateSelection,o=e.setYearSelection,s=Object.keys(m);return r.a.createElement("div",{className:"chart-configuration"},r.a.createElement("div",{className:"top-section"},r.a.createElement("span",{className:"config-section"},r.a.createElement("select",{name:"stateSelection",defaultValue:t||"USA",onChange:function(e){n(e.target.value)}},s.map((function(e){return r.a.createElement("option",{key:e,value:e},m[e].name+(null!=m[e].extra?m[e].extra:""))})))),r.a.createElement("span",{className:"config-year"},r.a.createElement("select",{name:"yearSelection",defaultValue:a||"months-6",onChange:function(e){o(e.target.value)}},g.map((function(e){return r.a.createElement("option",{key:e,value:e},E[e])}))))))}))),$=(a(28),a(12)),K=a(10),z=a.n(K),Z=(a(31),[]),q=function(e){var t=e.chartType,a=e.chartOptions,o=e.chartLabels,s=e.chartDataSet,i=e.chartId,c=Object(n.useRef)(null),l=Object(n.useState)(null),u=Object($.a)(l,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){if(c&&c.current){var e={type:t,options:a,data:{labels:o,datasets:s}};"undefined"!==typeof Z[i]&&Z[i].destroy(),Z[i]=new z.a(c.current,e),p(Z)}}),[c,t,a,o,s,i]),r.a.createElement("div",{className:"chart-display"},r.a.createElement("canvas",{id:d?i:"0",ref:c}))},X=(a(32),function(e){var t=e.dataSource;return r.a.createElement("div",null,null!=t?r.a.createElement("div",{className:"data-sources"},"Source:\xa0",r.a.createElement("span",{className:"site-link",onClick:function(){return window.open(t.url)}},t.label),r.a.createElement("span",{className:"footer-comment"},r.a.createElement("br",null),t.comment)):r.a.createElement("span",null))}),Q=Object(i.b)((function(e){return{selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear,isDataLoaded:e.chartConfig.isDataLoaded}}))((function(e){var t=e.selectedState,a=e.selectedYear,n=e.isDataLoaded,o=e.dataSet,s=e.selectedFieldGroup,i=e.stateChartTitle,c=e.chartId,l=e.chartOptions,u=e.displaySummary,d=e.dataSource,p=n&&Array.isArray(o)&&o.length>0,_=function(e,t){var a=[];return t.forEach((function(e,t){a.push({fieldName:e,label:N[e],fill:!1,backgroundColor:y[t],borderColor:y[t],borderWidth:1.5,dataTotal:0,data:[]})})),e.forEach((function(e){t.forEach((function(t){var n=a.find((function(e){return e.fieldName===t})),r=e[t]?e[t]:0;n.dataTotal+=Number(r),n.data.push(r)}))})),a}(o,s),h=function(e){var t=e.map((function(e){return e.date})),a=[];return t.forEach((function(e){var t=String(e),n=Number(t.substring(2,4)),r=Number(t.substring(5,7)),o=Number(t.substring(8,10));a.push(new Date(r+"/"+o+"/"+n))})),a}(o);return r.a.createElement("div",{className:"dashboard-component state-history-chart"},r.a.createElement("div",{className:"dashboard-component-title"},r.a.createElement("span",null,i)),r.a.createElement("div",{className:"dashboard-component-subtitle"},r.a.createElement("span",null,m[t].name," | ",E[a])),p?r.a.createElement(q,{chartType:"line",chartOptions:l,chartLabels:h,chartDataSet:_,chartId:c}):r.a.createElement("div",null,"Problem fetching data from CDC site..."),u?r.a.createElement("div",{className:"chart-summary"},r.a.createElement("div",{className:"summary-title"},"Totals for Selection"),_.map((function(e){return r.a.createElement("div",{className:"chart-summary-row",key:e.label},r.a.createElement("div",{className:"label"},e.label),r.a.createElement("div",{className:"value"},D(e.dataTotal)))}))):r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(X,{dataSource:d})))})),ee=a(11),te=a.n(ee),ae=(a(33),function(){return r.a.createElement("div",{className:"spinner-page"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"spinner-image",src:te.a,alt:"Loading CDC Data"})),r.a.createElement("div",null,"Loading CDC Data...")))}),ne=(a(34),function(e){return{responsive:!0,aspectRatio:1,maintainAspectRatio:!1,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",position:"nearest",bodySpacing:5,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()}}},interaction:{intersect:!1,axis:"x"},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:15}},elements:{point:{radius:0}},scales:{xAxes:[{display:!0,type:"time",gridLines:{display:!0},time:{minUnit:"month",tooltipFormat:e?"MMM YYYY":"MM/DD/YYYY"},scaleLabel:{display:!0}}],yAxes:[{display:!0,scaleLabel:{display:!1},ticks:{min:0,beginAtZero:!0,callback:function(e){return oe(e)}}}]}}}),re={aspectRatio:1,maintainAspectRatio:!1,responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",footerFontStyle:"normal",bodySpacing:5,titleMarginBottom:10,footerMarginTop:10,callbacks:{title:function(e){return"Ages "+e[0].label},label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()},footer:function(e){var t=e[0].value,a=e[1].value;return[parseFloat(t/a*100).toFixed(1)+"%"+" of deaths","due to COVID-19"]}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:10}},elements:{point:{radius:0}},scales:{xAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{stacked:!1,ticks:{beginAtZero:!0,callback:function(e){return oe(e)}}}]}},oe=function(e){var t=Number(e);return t>=1e6?t/1e6+"M":t>=1e4?t/1e3+"K":t},se=Object(i.b)((function(e){return{selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}}))((function(e){var t=e.deathsByAgeGroups,a=e.selectedState,n=e.selectedYear,o=Array.isArray(t)&&t.length>0,s=O(T(t,a,n)),i=function(e){var t=[];return e.forEach((function(e){var a=H(e);t.push(a)})),t}(s.map((function(e){return e.age_group}))),c=s.map((function(e){return null==e.sum_covid_19_deaths?0:e.sum_covid_19_deaths})),l=s.map((function(e){return null==e.sum_total_deaths?0:e.sum_total_deaths})),u=[{label:"Covid-19",backgroundColor:"red",data:c},{label:"All Deaths",backgroundColor:"blue",data:l}],d=W();return r.a.createElement("div",{className:"dashboard-component demographics"},r.a.createElement("div",{className:"dashboard-component-title"},"Deaths By Age Group"),r.a.createElement("div",{className:"dashboard-component-subtitle"},m[a].name," | ",E[n]),r.a.createElement("div",null,o?r.a.createElement("div",{className:"demographics"},r.a.createElement("div",null,r.a.createElement(q,{chartType:"bar",chartOptions:re,chartDataSet:u,chartLabels:i,chartId:"DeathsByAgeGroup"}))):r.a.createElement("div",null,"Problem fetching data from CDC site...")),r.a.createElement("div",null,r.a.createElement(X,{dataSource:d})))})),ie=(a(35),Object(i.b)((function(e){return{selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,cdcTotalsByJurisdiction:e.chartConfig.cdcTotalsByJurisdiction}}))((function(e){var t=e.selectedState,a=e.cdcTotalsByJurisdiction,n=Array.isArray(a)&&a.length>0,o=m[t],s=[],i=0,c=0,l=0,u=0;return n&&(s=a.find((function(e){return e.state===t})),i=w(s.total_deaths,o.population),c=w(s.inpatient_beds_covid,s.inpatient_beds),l=w(s.icu_beds_covid,s.icu_beds),u=w(s.total_deaths,s.total_cases)),r.a.createElement("div",{className:"data-totals-component"},n?r.a.createElement("div",null,r.a.createElement("div",{className:"data-totals-title"},"Current Totals for",r.a.createElement("br",null),o.name+(null!=o.extra?o.extra:"")),r.a.createElement("div",{className:"data-totals"},r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Total Cases"),r.a.createElement("div",{className:"data-number"},D(s.total_cases)),r.a.createElement("div",{className:"percent"},"Confirmed & Probable Cases")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Total Deaths"),r.a.createElement("div",{className:"data-number"},D(s.total_deaths)),r.a.createElement("div",{className:"percent"},i," of Est. Population** ",r.a.createElement("br",null),u," of Total Cases")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Currently Hospitalized"),r.a.createElement("div",{className:"data-number"},D(s.inpatient_beds_covid)),r.a.createElement("div",{className:"percent"},c," of ",D(s.inpatient_beds),r.a.createElement("br",null),"Inpatient Beds Available")),r.a.createElement("div",{className:"data-row"},r.a.createElement("div",{className:"data-label"},"Currently in ICU"),r.a.createElement("div",{className:"data-number"},D(s.icu_beds_covid)),r.a.createElement("div",{className:"percent"},l," of ",D(s.icu_beds),r.a.createElement("br",null),"ICU Beds Available")))):r.a.createElement("div",null,"Problem fetching data from CDC site..."),r.a.createElement("div",{className:"more-data"},r.a.createElement("div",null,"** Estimated population of ",t,": ",D(o.population))))}))),ce=Object(i.b)((function(e){return{isDataLoaded:e.chartConfig.isDataLoaded,selectedState:e.chartConfig.selectedState,selectedYear:e.chartConfig.selectedYear,cdcHistoryByJurisdiction:e.chartConfig.cdcHistoryByJurisdiction,cdcHospitalDataByJurisdiction:e.chartConfig.cdcHospitalDataByJurisdiction,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}}),(function(e){return{setCOVID19Data:function(t){return e(function(e){return{type:R.SET_COVID19_DATA,payload:e}}(t))}}}))((function(e){var t=e.setCOVID19Data,a=e.isDataLoaded,o=e.selectedState,s=e.selectedYear,i=e.cdcHistoryByJurisdiction,c=e.cdcHospitalDataByJurisdiction,l=e.deathsByAgeGroups;return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a){e.next=6;break}return e.next=4,h();case 4:n=e.sent,t(n);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a]),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"page-title"},r.a.createElement("span",null,"COVID-19 Data Charts")," ",r.a.createElement("span",null,"For United States")),r.a.createElement("div",{className:"page-subtitle"},"50 U.S. States, D.C. and Puerto Rico"),r.a.createElement(P,null)),a?r.a.createElement("div",{className:"page-layout"},r.a.createElement(ie,null),r.a.createElement(Q,{dataSet:k(i,o,s),selectedFieldGroup:C.dailyTotals,stateChartTitle:"New Cases & Deaths",chartId:"newCasesDeaths",chartOptions:ne(!1),displaySummary:!0,dataSource:{url:J,label:"Center for Disease Control",comment:""}}),r.a.createElement(Q,{dataSet:k(c,o,s),selectedFieldGroup:C.hospitalData,stateChartTitle:"New Hospital Inpatient & ICU",chartId:"hospitalData",chartOptions:ne(!1),displaySummary:!0,dataSource:F(o)}),r.a.createElement(Q,{dataSet:I(l,o,s),selectedFieldGroup:S,stateChartTitle:"Deaths By Age Groups Monthly",chartId:"deathsByAgeGroupsOverTime",chartOptions:ne(!0),footerComment:"Note: CDC Data Updated Weekly",dataSource:W()}),r.a.createElement(se,null)):r.a.createElement(ae,null),r.a.createElement("div",{className:"page-footer"},"Data Sources:",r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://data.cdc.gov")}},"Center For Disease Control"),r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://healthdata.gov/")}},"Healthdata.gov"),r.a.createElement("br",null),"~ ~ ~",r.a.createElement("br",null),r.a.createElement("span",{className:"footer-site-link",onClick:function(){return window.open("https://tanyamiranda.github.io/")}},"Contact Developer"),r.a.createElement("br",null)))}));a(36);var le=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(ce,null)))},ue=a(4),de=(a(37),a(5)),pe={dataRefreshTimestamp:null,isDataLoaded:!1,selectedState:null,selectedYear:null,selectedFields:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.SET_COVID19_DATA:return{selectedState:"USA",selectedYear:"months-6",deathsByAgeGroups:t.payload.deathsByAgeGroups,isDataLoaded:!0,cdcHistoryByJurisdiction:t.payload.cdcHistoryByJurisdiction,cdcTotalsByJurisdiction:t.payload.cdcTotalsByJurisdiction,cdcHospitalDataByJurisdiction:t.payload.cdcHospitalDataByJurisdiction};case R.SET_STATE_SELECTION:return Object(de.a)(Object(de.a)({},e),{},{selectedState:t.payload});case R.SET_YEAR_SELECTION:return Object(de.a)(Object(de.a)({},e),{},{selectedYear:t.payload});default:return e}},_e=Object(ue.b)({chartConfig:me});var he=Object(ue.c)(_e,ue.a.apply(void 0,[]));s.a.render(r.a.createElement(i.a,{store:he},r.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid19-by-state","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.cf719d6e.chunk.js.map