(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),i=a(1);const l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(32);var d=a(2),u=a.n(d),p=a(4);a(34);const m={30:"Last 30 days",45:"Last 45 days",60:"Last 60 days",90:"Last 3 months",120:"Last 4 months",150:"Last 5 months",180:"Last 6 months",270:"Last 9 months"},h=["green","red","blue","#146AD4","#A9D422","#18F8BB","#AFC044","#3B9793","#822611","#FB2E76","#A5CA71","#983538","#082BD9","#2E136A","#05BB78","#44A4AD","#28FD7E","#387862"],v={USA:"United States",AL:"Alabama",AK:"Alaska",AR:"Arkansas",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IA:"Iowa",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NC:"North Carolina",ND:"North Dakota",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"},g={dailyDeaths:["deathIncrease"],dailyPositiveCases:["positiveIncrease"],dailyHospitalizations:["hospitalizedIncrease"],dailyHospitalizedBreakdown:["hospitalizedCurrently","inIcuCurrently","onVentilatorCurrently"]},f={deathIncrease:"New Deaths",positiveIncrease:"New Cases",hospitalizedIncrease:"New Hospitalizations",hospitalizedCurrently:"Currently Hospitalized",inIcuCurrently:"In ICU",onVentilatorCurrently:"On Ventilators",positive:"Positive",negative:"Negative",pending:"Pending",totalTestResults:"Tests Taken",death:"Death",totalTestResultsIncrease:"New Tests"},E=["positiveIncrease","deathIncrease","hospitalizedIncrease"],b=[];b.USA=328239523,b["Northeast Region"]=55982803,b["Midwest Region"]=68329004,b["South Region"]=125580448,b["West Region"]=78347268,b.Alabama=4903185,b.Alaska=731545,b.Arizona=7278717,b.Arkansas=3017804,b.California=39512223,b.Colorado=5758736,b.Connecticut=3565287,b.Delaware=973764,b["District of Columbia"]=705749,b.Florida=21477737,b.Georgia=10617423,b.Hawaii=1415872,b.Idaho=1787065,b.Illinois=12671821,b.Indiana=6732219,b.Iowa=3155070,b.Kansas=2913314,b.Kentucky=4467673,b.Louisiana=4648794,b.Maine=1344212,b.Maryland=6045680,b.Massachusetts=6892503,b.Michigan=9986857,b.Minnesota=5639632,b.Mississippi=2976149,b.Missouri=6137428,b.Montana=1068778,b.Nebraska=1934408,b.Nevada=3080156,b["New Hampshire"]=1359711,b["New Jersey"]=8882190,b["New Mexico"]=2096829,b["New York"]=19453561,b["North Carolina"]=10488084,b["North Dakota"]=762062,b.Ohio=11689100,b.Oklahoma=3956971,b.Oregon=4217737,b.Pennsylvania=12801989,b["Rhode Island"]=1059361,b["South Carolina"]=5148714,b["South Dakota"]=884659,b.Tennessee=6829174,b.Texas=28995881,b.Utah=3205958,b.Vermont=623989,b.Virginia=8535519,b.Washington=7614893,b["West Virginia"]=1792147,b.Wisconsin=5822434,b.Wyoming=578759,b["Puerto Rico"]=3193694,b["District Of Columbia"]=705749;var y=b;const C=(e,t)=>e.filter(e=>e.state.toLowerCase()===t.toLowerCase()&&e.age_group.includes("year")).sort((e,t)=>N(e.age_group,t.age_group)),N=(e,t)=>{let a=Number(e.substring(0,2).replace("-","").toLowerCase().replace("un","0")),n=Number(t.substring(0,2).replace("-","").toLowerCase().replace("un","0"));return a>n?1:a<n?-1:0},w=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=[],s=[],r=[],e.prev=5,e.next=8,S();case 8:return a=e.sent,e.next=11,_();case 11:return s=e.sent,e.next=14,D("https://api.covidtracking.com/v1/states/daily.json");case 14:return t=e.sent,e.next=17,D("https://api.covidtracking.com/v1/us/daily.json");case 17:return n=e.sent,e.next=20,D("https://data.cdc.gov/resource/9bhg-hcku.json?$select=data_as_of,state,age_group_new%20as%20age_group,sum(covid_19_deaths),sum(total_deaths)&$group=data_as_of,state,age_group_new&$where=sex%20in%20(%27Male%27,%27Female%27)&$order=state");case 20:return r=e.sent,e.abrupt("return",{statesHistoryData:t,stateInformation:a,countryHistoryData:n,stateCountyInfo:s,deathsByAgeGroups:r});case 24:e.prev=24,e.t0=e.catch(5),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[5,24]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null,e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:a=e.sent,e.next=12;break;case 11:throw Error(n.statusText);case 12:return e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.log("fetchJsonData() error!",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,D("https://api.covidtracking.com/v1/states/info.json");case 4:return e.sent.forEach(e=>{t[e.state]={name:e.name,website:e.covid19Site,twitter:e.twitter}}),e.next=8,D("https://api.covidtracking.com/v1/states/current.json");case 8:return e.sent.forEach(e=>{t[e.state].totalDeath=e.death,t[e.state].totalPositive=e.positive,t[e.state].totalTestResults=e.totalTestResults,t[e.state].totalRecovered=e.recovered,t[e.state].hospitalizedCurrently=e.hospitalizedCurrently;let a=y[t[e.state].name];void 0===a&&(a=-1),t[e.state].estimatedPopulation=a}),e.next=12,D("https://api.covidtracking.com/v1/us/current.json");case 12:return e.sent.forEach(e=>{t.USA={estimatedPopulation:y.USA,totalPositive:e.positive,totalDeath:e.death,totalTestResults:e.totalTestResults,totalRecovered:e.recovered,hospitalizedCurrently:e.hospitalizedCurrently,name:"United States",dataQualityGrade:"N/A",twitter:"https://twitter.com/CDCgov",website:"https://www.cdc.gov/coronavirus/2019-ncov/index.html"}}),e.abrupt("return",t);case 17:e.prev=17,e.t0=e.catch(0),console.log("fetchStateData() error!",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv",t=[],e.next=5,fetch("https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv");case 5:if(!(a=e.sent).ok){e.next=14;break}return e.next=9,a.text();case 9:n=e.sent,(t=T(n)).filter(e=>e.deaths>0||e.cases>0),e.next=15;break;case 14:throw Error(a.statusText);case 15:return e.abrupt("return",t);case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();function T(e){for(var t=e.split("\n"),a=[],n=1;n<t.length;n++){const e=t[n].split(","),s={};s.county=e[1],s.stateName=e[2],s.cases=e[4],s.deaths=e[5],a.push(s)}return a}const k=e=>{const t=Number(e);return t>=1e6?t/1e6+"M":t>=1e4?t/1e3+"K":t};var A={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA",SET_STATE_HISTORY_DATA:"SET_STATE_HISTORY_DATA"};a(35),a(36);var I=({fieldName:e,fieldDefaultValue:t,fieldClickEvent:a,fieldDataMap:n})=>{const r=Object.keys(n);return s.a.createElement("span",{className:"config-section"},s.a.createElement("select",{name:e,defaultValue:t,onChange:a},r.map(e=>s.a.createElement("option",{key:e,value:e},n[e]))))};var O=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange}),e=>({setStateSelection:t=>e({type:A.SET_STATE_SELECTION,payload:t}),setDateRangeSelection:t=>e({type:A.SET_DATE_RANGE_SELECTION,payload:t})}))(({selectedState:e,selectedDateRange:t,setStateSelection:a,setDateRangeSelection:n})=>s.a.createElement("div",{className:"chart-configuration"},s.a.createElement("div",{className:"top-section"},s.a.createElement(I,{fieldName:"stateSelection",fieldDefaultValue:e,fieldClickEvent:e=>{a(e.target.value)},fieldDataMap:v}),s.a.createElement(I,{fieldName:"dateRangeSelection",fieldDefaultValue:t||"60",fieldClickEvent:e=>{n(e.target.value)},fieldDataMap:m}))));a(37);const x={responsive:!0,aspectRatio:1,maintainAspectRatio:!1,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0}},elements:{point:{radius:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{xAxes:[{display:!0,ticks:{min:0,callback:function(e,t){return t%3===0?e:""}},scaleLabel:{display:!0}}],yAxes:[{display:!0,padding:0,scaleLabel:{display:!1},ticks:{min:0,beginAtZero:!0,callback:function(e){return k(e)}}}]}},R={aspectRatio:1,maintainAspectRatio:!1,responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:10}},elements:{point:{radius:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{xAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{stacked:!1,ticks:{beginAtZero:!0,callback:function(e){return k(e)}}}]}};var L=a(21),j=a(17),P=a.n(j);a(40);let M=[];var H=({chartType:e,chartOptions:t,chartLabels:a,chartDataSet:r,chartId:o})=>{const i=Object(n.useRef)(null),l=Object(n.useState)(null),c=Object(L.a)(l,2),d=c[0],u=c[1];return Object(n.useEffect)(()=>{if(i&&i.current){const n={type:e,options:t,data:{labels:a,datasets:r}};"undefined"!==typeof M[o]&&M[o].destroy(),M[o]=new P.a(i.current,n),u(M)}},[i,e,t,a,r,o]),s.a.createElement("div",{className:"chart-display"},s.a.createElement("canvas",{id:d?o:"0",ref:i}))};const V=e=>(e||(e=0),Intl.NumberFormat("en-US",{useGrouping:!0}).format(e)),B=e=>{var t=new Date(e);let a=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),s+a+n},G=(e,t)=>{var a=(e/t*100).toFixed(2);return"0.00"===a&&(a="< 0.01"),a+"%"};var F=Object(i.b)(e=>({countryHistoryData:e.chartConfig.countryHistoryData,statesHistoryData:e.chartConfig.statesHistoryData,selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange}))(({countryHistoryData:e,statesHistoryData:t,selectedState:a,selectedDateRange:n,selectedFieldGroup:r,stateChartTitle:o,chartId:i,displayDateRange:l})=>{const c=new Date,d=new Date;c.setDate(c.getDate()-Number(n));const u=B(c),p=B(d);let v=null;v="USA"===a?((e,t,a)=>e.filter(e=>e.date>=t&&e.date<=a).sort((function(e,t){return e.date-t.date})))(e,u,p):((e,t,a,n)=>e.filter(e=>e.state===t&&e.date>=a&&e.date<=n).sort((function(e,t){return e.date-t.date})))(t,a,u,p);const g=((e,t)=>{const a=[];return t.forEach((e,t)=>{a.push({fieldName:e,label:f[e],fill:!1,backgroundColor:h[t],borderColor:h[t],borderWidth:1.5,data:[]})}),e.forEach(e=>{t.forEach(t=>{a.find(e=>e.fieldName===t).data.push(!e[t]||e[t]<0?0:e[t])})}),a})(v,r),E=(e=>{const t=e.map(e=>e.date).filter((e,t,a)=>a.indexOf(e)===t),a=[];return t.forEach(e=>{var t=String(e),n=Number(t.substring(4,6)),s=Number(t.substring(6,8));a.push(n+"/"+s)}),a})(v);let b="";return l&&(b=m[n]),s.a.createElement("div",{className:"dashboard-component state-history-chart"},s.a.createElement("div",{className:"dashboard-component-title chart-header"},s.a.createElement("span",null,o),l?s.a.createElement("span",null," ",b):""),s.a.createElement(H,{chartType:"line",chartOptions:x,chartLabels:E,chartDataSet:g,chartId:i}),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/data")},"The COVID Tracking Project")))}),W=a(10),z=a(11);function U(){const e=Object(W.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return U=function(){return e},e}function Y(){const e=Object(W.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Y=function(){return e},e}const K=z.a.div(Y()),J=z.a.div(U());var $=()=>s.a.createElement(K,null,s.a.createElement(J,null));a(42);var Z=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation}))(({selectedState:e,stateInformation:t})=>{let a=t[e];const n=G(a.totalPositive,a.estimatedPopulation),r=G(a.totalTestResults,a.estimatedPopulation),o=G(a.totalDeath,a.estimatedPopulation);return s.a.createElement("div",{className:"dashboard-component overview"},s.a.createElement("div",{className:"dashboard-component-title"},a.name," Overview"),s.a.createElement("div",{className:"overview-data"},s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Population"),s.a.createElement("div",{className:"data-number"},V(a.estimatedPopulation)),s.a.createElement("div",{className:"data-percent"},"2019 Census Report")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total Tested"),s.a.createElement("div",{className:"data-number"},V(a.totalTestResults)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},r)," of Population")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total Positive"),s.a.createElement("div",{className:"data-number"},V(a.totalPositive)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},n)," of Population")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total Deaths"),s.a.createElement("div",{className:"data-number"},V(a.totalDeath)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},o)," of Population"))),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/")},"The COVID Tracking Project"),",\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://www.census.gov/programs-surveys/popest.html")},"U.S. Census Bureau")))});a(15);var Q=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}))(({selectedState:e,stateInformation:t,deathsByAgeGroups:a})=>{let n=C(a,t[e].name);if("NY"===e){const e=n.concat(C(a,"New York City"));n=(e=>{var t=[];return e.reduce((function(e,a){return e[a.age_group]?(e[a.age_group].sum_covid_19_deaths+=Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,e[a.age_group].sum_total_deaths+=Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0):(e[a.age_group]={age_group:a.age_group,sum_covid_19_deaths:Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,sum_total_deaths:Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0},t.push(e[a.age_group])),e}),{}),t})(e)}const r=(e=>{const t=[];return e.forEach(e=>{const a=e.replace("years and over","+").replace("years","").replace("year","").replace("Under","<");t.push(a)}),t})(n.map(e=>e.age_group)),o=n.map(e=>null==e.sum_covid_19_deaths?0:e.sum_covid_19_deaths),i=n.map(e=>null==e.sum_total_deaths?0:e.sum_total_deaths),l=[{label:"Covid-19",backgroundColor:"red",data:o},{label:"All Deaths",backgroundColor:"blue",data:i}];return s.a.createElement("div",{className:"demographics"},s.a.createElement("div",null,s.a.createElement(H,{chartType:"bar",chartOptions:R,chartDataSet:l,chartLabels:r,chartId:"DeathsByAgeGroup"})))});var X=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}))(({selectedState:e,stateInformation:t,deathsByAgeGroups:a})=>{const n=Array.isArray(a)&&a.length>0;return s.a.createElement("div",{className:"dashboard-component demographics"},s.a.createElement("div",{className:"dashboard-component-title"},"All Deaths By Age Group for ",s.a.createElement("span",null,t[e].name)),s.a.createElement("div",null,n?s.a.createElement(Q,null):s.a.createElement("div",null,"Problem fetching data from CDC site...")),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")},"Center For Disease Control"),s.a.createElement("br",null)))});var q=Object(i.b)(e=>({dataRefreshedTimestamp:e.chartConfig.dataRefreshedTimestamp,selectedState:e.chartConfig.selectedState}),e=>({setCOVID19Data:t=>e((e=>({type:A.SET_COVID19_DATA,payload:e}))(t))}))(({setCOVID19Data:e,dataRefreshedTimestamp:t,selectedState:a})=>(Object(n.useEffect)(()=>{function a(){return(a=Object(p.a)(u.a.mark((function a(){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,t){a.next=6;break}return a.next=4,w();case 4:n=a.sent,e(n);case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()},[e,t]),s.a.createElement("div",{className:"dashboard"},s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-title"},s.a.createElement("span",null,"COVID-19 Data Charts")," ",s.a.createElement("span",null,"For U.S. States")),s.a.createElement(O,null)),t?s.a.createElement("div",{className:"page-layout"},s.a.createElement(Z,null),s.a.createElement(F,{selectedFieldGroup:g.dailyPositiveCases,stateChartTitle:"New Positive Cases",chartId:"dailyPositiveCases",displayDateRange:!0,displayLegend:!1}),s.a.createElement(F,{selectedFieldGroup:g.dailyDeaths,stateChartTitle:"New Deaths",chartId:"dailyDeaths",displayDateRange:!0,displayLegend:!1}),s.a.createElement(F,{selectedFieldGroup:g.dailyHospitalizedBreakdown,stateChartTitle:"Hospitalization Breakdown",chartId:"hospitalizations",displayDateRange:!1,displayLegend:!0}),s.a.createElement(X,null)):s.a.createElement($,null),s.a.createElement("div",{className:"page-footer"},"Data Sources:",s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://covidtracking.com/data")},"The COVID Tracking Project"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://www.census.gov/programs-surveys/popest.html")},"U.S. Census Bureau"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")},"Center For Disease Control"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")},"N.Y. Times"),s.a.createElement("br",null),"~ ~ ~",s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://tanyamiranda.github.io/")},"Contact Developer"),s.a.createElement("br",null)))));a(43);var ee=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(q,null)))},te=a(3),ae=(a(44),a(7));const ne={statesHistoryData:null,stateInformation:null,countryHistoryData:null,stateCountyInfo:null,deathsByAgeGroups:null,dataRefreshedTimestamp:null,selectedState:null,selectedDateRange:null,selectedFields:[]};var se=(e=ne,t)=>{switch(t.type){case A.SET_COVID19_DATA:return{selectedState:"USA",selectedDateRange:"60",selectedFields:E,statesHistoryData:t.payload.statesHistoryData,stateInformation:t.payload.stateInformation,countryHistoryData:t.payload.countryHistoryData,stateCountyInfo:t.payload.stateCountyInfo,deathsByAgeGroups:t.payload.deathsByAgeGroups,dataRefreshedTimestamp:(new Date).toLocaleString()};case A.SET_STATE_HISTORY_DATA:return Object(ae.a)({},e,{statesHistoryData:t.payload});case A.SET_STATE_SELECTION:return Object(ae.a)({},e,{selectedState:t.payload});case A.SET_FIELD_SELECTION:return Object(ae.a)({},e,{selectedFields:t.payload});case A.SET_DATE_RANGE_SELECTION:return Object(ae.a)({},e,{selectedDateRange:t.payload});default:return e}},re=Object(te.c)({chartConfig:se});var oe=Object(te.d)(re,Object(te.a)());o.a.render(s.a.createElement(i.a,{store:oe},s.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/covid19-by-state","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):c(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.679b43a4.chunk.js.map