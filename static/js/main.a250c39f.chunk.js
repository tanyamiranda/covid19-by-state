(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(46)},,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),i=a(1);const c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(32);var d=a(2),u=a.n(d),m=a(4);a(34);const p={30:"Last 30 days",45:"Last 45 days",60:"Last 60 days",90:"Last 3 months",120:"Last 4 months",150:"Last 5 months",180:"Last 6 Months"},h=["green","red","blue","#146AD4","#A9D422","#18F8BB","#AFC044","#3B9793","#822611","#FB2E76","#A5CA71","#983538","#082BD9","#2E136A","#05BB78","#44A4AD","#28FD7E","#387862"],v={USA:"United States",AL:"Alabama",AK:"Alaska",AR:"Arkansas",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IA:"Iowa",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NC:"North Carolina",ND:"North Dakota",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"},f={increase:["positiveIncrease","deathIncrease","hospitalizedIncrease"],hospitalization:["hospitalizedCurrently","inIcuCurrently","onVentilatorCurrently"],testing:["totalTestResultsIncrease","positiveIncrease"]},g={increase:"Daily Increases",hospitalization:"Current Hospitalizations",testing:"Testing Totals"},E={deathIncrease:"New Deaths",positiveIncrease:"New Cases",hospitalizedIncrease:"New Hospitalizations",hospitalizedCurrently:"Hospitalized",inIcuCurrently:"In ICU",onVentilatorCurrently:"On Ventilators",positive:"Positive",negative:"Negative",pending:"Pending",totalTestResults:"Tests Taken",death:"Death",totalTestResultsIncrease:"New Tests"},b=["positiveIncrease","deathIncrease","hospitalizedIncrease"],y="deaths",C="cases",N="county",w=[];w.USA=328239523,w["Northeast Region"]=55982803,w["Midwest Region"]=68329004,w["South Region"]=125580448,w["West Region"]=78347268,w.Alabama=4903185,w.Alaska=731545,w.Arizona=7278717,w.Arkansas=3017804,w.California=39512223,w.Colorado=5758736,w.Connecticut=3565287,w.Delaware=973764,w["District of Columbia"]=705749,w.Florida=21477737,w.Georgia=10617423,w.Hawaii=1415872,w.Idaho=1787065,w.Illinois=12671821,w.Indiana=6732219,w.Iowa=3155070,w.Kansas=2913314,w.Kentucky=4467673,w.Louisiana=4648794,w.Maine=1344212,w.Maryland=6045680,w.Massachusetts=6892503,w.Michigan=9986857,w.Minnesota=5639632,w.Mississippi=2976149,w.Missouri=6137428,w.Montana=1068778,w.Nebraska=1934408,w.Nevada=3080156,w["New Hampshire"]=1359711,w["New Jersey"]=8882190,w["New Mexico"]=2096829,w["New York"]=19453561,w["North Carolina"]=10488084,w["North Dakota"]=762062,w.Ohio=11689100,w.Oklahoma=3956971,w.Oregon=4217737,w.Pennsylvania=12801989,w["Rhode Island"]=1059361,w["South Carolina"]=5148714,w["South Dakota"]=884659,w.Tennessee=6829174,w.Texas=28995881,w.Utah=3205958,w.Vermont=623989,w.Virginia=8535519,w.Washington=7614893,w["West Virginia"]=1792147,w.Wisconsin=5822434,w.Wyoming=578759,w["Puerto Rico"]=3193694,w["District Of Columbia"]=705749;var S=w;const D=(e,t)=>e.filter(e=>e.state.toLowerCase()===t.toLowerCase()&&e.age_group.includes("year")).sort((e,t)=>T(e.age_group,t.age_group)),T=(e,t)=>{let a=Number(e.substring(0,2).replace("-","").toLowerCase().replace("un","0")),n=Number(t.substring(0,2).replace("-","").toLowerCase().replace("un","0"));return a>n?1:a<n?-1:0},k=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=[],s=[],r=[],e.prev=5,e.next=8,_();case 8:return a=e.sent,e.next=11,A();case 11:return s=e.sent,e.next=14,I("https://api.covidtracking.com/v1/states/daily.json");case 14:return t=e.sent,e.next=17,I("https://api.covidtracking.com/v1/us/daily.json");case 17:return n=e.sent,e.next=20,I("https://data.cdc.gov/resource/9bhg-hcku.json?$select=data_as_of,state,age_group,sum(covid_19_deaths),sum(total_deaths)&$group=data_as_of,state,age_group&$where=sex%20in%20(%27Male%27,%27Female%27)&$order=state");case 20:return r=e.sent,e.abrupt("return",{statesHistoryData:t,stateInformation:a,countryHistoryData:n,stateCountyInfo:s,deathsByAgeGroups:r});case 24:e.prev=24,e.t0=e.catch(5),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[5,24]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null,e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:a=e.sent,e.next=12;break;case 11:throw Error(n.statusText);case 12:return e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.log("fetchJsonData() error!",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,I("https://api.covidtracking.com/v1/states/info.json");case 4:return e.sent.forEach(e=>{t[e.state]={name:e.name,website:e.covid19Site,twitter:e.twitter}}),e.next=8,I("https://api.covidtracking.com/v1/states/info.json");case 8:return e.sent.forEach(e=>{t[e.state].totalDeath=e.death,t[e.state].totalPositive=e.positive,t[e.state].totalTestResults=e.totalTestResults,t[e.state].totalRecovered=e.recovered,t[e.state].hospitalizedCurrently=e.hospitalizedCurrently;let a=S[t[e.state].name];void 0===a&&(a=-1),t[e.state].estimatedPopulation=a}),e.next=12,I("https://api.covidtracking.com/v1/us/daily.json");case 12:return e.sent.forEach(e=>{t.USA={estimatedPopulation:S.USA,totalPositive:e.positive,totalDeath:e.death,totalTestResults:e.totalTestResults,totalRecovered:e.recovered,hospitalizedCurrently:e.hospitalizedCurrently,name:"United States",dataQualityGrade:"N/A",twitter:"https://twitter.com/CDCgov",website:"https://www.cdc.gov/coronavirus/2019-ncov/index.html"}}),e.abrupt("return",t);case 17:e.prev=17,e.t0=e.catch(0),console.log("fetchStateData() error!",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv",t=[],e.next=5,fetch("https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv");case 5:if(!(a=e.sent).ok){e.next=14;break}return e.next=9,a.text();case 9:n=e.sent,(t=O(n)).filter(e=>e.deaths>0||e.cases>0),e.next=15;break;case 14:throw Error(a.statusText);case 15:return e.abrupt("return",t);case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();function O(e){for(var t=e.split("\n"),a=[],n=1;n<t.length;n++){const e=t[n].split(","),s={};s.county=e[1],s.stateName=e[2],s.cases=e[4],s.deaths=e[5],a.push(s)}return a}const x=e=>e>=1e6?e/1e6+"M":e>=1e4?e/1e3+"K":e;var R={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA",SET_STATE_HISTORY_DATA:"SET_STATE_HISTORY_DATA"};a(35),a(36);var j=({fieldName:e,fieldDefaultValue:t,fieldClickEvent:a,fieldDataMap:n})=>{const r=Object.keys(n);return s.a.createElement("span",{className:"config-section"},s.a.createElement("select",{name:e,defaultValue:t,onChange:a},r.map(e=>s.a.createElement("option",{key:e,value:e},n[e]))))};var L=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange}),e=>({setStateSelection:t=>e({type:R.SET_STATE_SELECTION,payload:t}),setDateRangeSelection:t=>e({type:R.SET_DATE_RANGE_SELECTION,payload:t})}))(({selectedState:e,selectedDateRange:t,setStateSelection:a,setDateRangeSelection:n})=>{const r={};Object.keys(f).forEach(e=>{r[e]=g[e]});return s.a.createElement("div",{className:"chart-configuration"},s.a.createElement("div",{className:"top-section"},s.a.createElement(j,{fieldName:"stateSelection",fieldDefaultValue:e,fieldClickEvent:e=>{a(e.target.value)},fieldDataMap:v}),s.a.createElement(j,{fieldName:"dateRangeSelection",fieldDefaultValue:t,fieldClickEvent:e=>{n(e.target.value)},fieldDataMap:p})))});a(37);const M={responsive:!0,aspectRatio:1,maintainAspectRatio:!1,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0}},elements:{point:{radius:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{xAxes:[{display:!0,ticks:{min:0,callback:function(e,t){return t%3===0?e:""}},scaleLabel:{display:!0}}],yAxes:[{display:!0,padding:0,scaleLabel:{display:!1},ticks:{min:0,beginAtZero:!0,callback:function(e){return x(e)}}}]}},P={aspectRatio:1,maintainAspectRatio:!1,responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1,bodyAlign:"left",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=t.datasets[e.datasetIndex].data[e.index];return a+" : "+parseInt(n).toLocaleString()}}},hover:{mode:"nearest",intersect:!0},legend:{position:"top",labels:{boxWidth:5,fontSize:14,usePointStyle:!0,padding:10}},elements:{point:{radius:0}},layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{xAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{stacked:!1,ticks:{beginAtZero:!0,callback:function(e){return x(e)}}}]}};var H=a(7),V=a(18),G=a.n(V);a(40);let z=[];var F=({chartType:e,chartOptions:t,chartLabels:a,chartDataSet:r,chartId:o})=>{const i=Object(n.useRef)(null),c=Object(n.useState)(null),l=Object(H.a)(c,2),d=l[0],u=l[1];return Object(n.useEffect)(()=>{if(i&&i.current){const n={type:e,options:t,data:{labels:a,datasets:r}};"undefined"!==typeof z[o]&&z[o].destroy(),z[o]=new G.a(i.current,n),u(z)}},[i,e,t,a,r,o]),s.a.createElement("div",{className:"chart-display"},s.a.createElement("canvas",{id:d?o:"0",ref:i}))};const W=e=>(e||(e=0),Intl.NumberFormat("en-US",{useGrouping:!0}).format(e)),B=e=>{var t=new Date(e);let a=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),s+a+n},U=(e,t)=>{var a=(e/t*100).toFixed(2);return"0.00"===a&&(a="< 0.01"),a+"%"};var Y=Object(i.b)(e=>({countryHistoryData:e.chartConfig.countryHistoryData,statesHistoryData:e.chartConfig.statesHistoryData,selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange}))(({countryHistoryData:e,statesHistoryData:t,selectedState:a,selectedDateRange:n,selectedFieldGroup:r,stateChartTitle:o,chartId:i})=>{const c=new Date,l=new Date;c.setDate(c.getDate()-Number(n));const d=B(c),u=B(l);let m=null;m="USA"===a?((e,t,a)=>e.filter(e=>e.date>=t&&e.date<=a).sort((function(e,t){return e.date-t.date})))(e,d,u):((e,t,a,n)=>e.filter(e=>e.state===t&&e.date>=a&&e.date<=n).sort((function(e,t){return e.date-t.date})))(t,a,d,u);const p=((e,t)=>{const a=[];return t.forEach((e,t)=>{a.push({fieldName:e,label:E[e],fill:!1,backgroundColor:h[t],borderColor:h[t],borderWidth:1.5,data:[]})}),e.forEach(e=>{t.forEach(t=>{a.find(e=>e.fieldName===t).data.push(!e[t]||e[t]<0?0:e[t])})}),a})(m,r),f=(e=>{const t=e.map(e=>e.date).filter((e,t,a)=>a.indexOf(e)===t),a=[];return t.forEach(e=>{var t=String(e),n=Number(t.substring(4,6)),s=Number(t.substring(6,8));a.push(n+"/"+s)}),a})(m);return s.a.createElement("div",{className:"dashboard-component state-history-chart"},s.a.createElement("div",{className:"dashboard-component-title chart-header"},s.a.createElement("span",null,o)," ",s.a.createElement("span",null,"last ",n," days")," for ",s.a.createElement("span",null,v[a])," "),s.a.createElement(F,{chartType:"line",chartOptions:M,chartLabels:f,chartDataSet:p,chartId:i}),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/data")},"The COVID Tracking Project")))}),K=a(11),J=a(12);function $(){const e=Object(K.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return $=function(){return e},e}function Z(){const e=Object(K.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return e},e}const Q=J.a.div(Z()),X=J.a.div($());var q=()=>s.a.createElement(Q,null,s.a.createElement(X,null));a(42);var ee=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation}))(({selectedState:e,stateInformation:t})=>{let a=t[e];const n=U(a.totalPositive,a.estimatedPopulation),r=U(a.totalTestResults,a.estimatedPopulation),o=U(a.totalDeath,a.estimatedPopulation),i=U(a.hospitalizedCurrently,a.estimatedPopulation);return s.a.createElement("div",{className:"dashboard-component overview"},s.a.createElement("div",{className:"dashboard-component-title"},a.name," Totals"),s.a.createElement("div",{className:"estimated-population"},"Population : ",s.a.createElement("span",{className:"estimate"},W(a.estimatedPopulation))),s.a.createElement("div",{className:"overview-data"},s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total",s.a.createElement("br",null),"Tested"),s.a.createElement("div",{className:"data-number"},W(a.totalTestResults)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},r)," of Population")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total",s.a.createElement("br",null),"Positive"),s.a.createElement("div",{className:"data-number"},W(a.totalPositive)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},n)," of Population")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Total",s.a.createElement("br",null),"Deaths"),s.a.createElement("div",{className:"data-number"},W(a.totalDeath)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},o)," of Population")),s.a.createElement("div",{className:"overview-data-row"},s.a.createElement("div",{className:"data-label"},"Currently",s.a.createElement("br",null),"Hospitalized"),s.a.createElement("div",{className:"data-number"},W(a.hospitalizedCurrently)),s.a.createElement("div",{className:"data-percent"},s.a.createElement("span",{className:"percent"},i)," of Population"))),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/")},"The COVID Tracking Project"),",\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://www.census.gov/programs-surveys/popest.html")},"U.S. Census Bureau")))});a(43);var te=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,stateCountyInfo:e.chartConfig.stateCountyInfo}))(({selectedState:e,stateInformation:t,stateCountyInfo:a})=>{const r=Object(n.useState)(y),o=Object(H.a)(r,2),i=o[0],c=o[1],l=Object(n.useState)(null),d=Object(H.a)(l,2),u=d[0],m=d[1];Object(n.useEffect)(()=>{const n=[...a].filter(a=>a.stateName.toLowerCase()===t[e].name.toLowerCase()).sort((e,t)=>t.deaths-e.deaths);c(y),m(n)},[e,t,a]);const p=e=>{const t=[...u];e===N?t.sort((function(e,t){var a=e.county.toLowerCase(),n=t.county.toLowerCase();return a<n?-1:a>n?1:0})):t.sort((t,a)=>a[e]-t[e]),c(e),m(t)},h="County"+(i===N?"\u2193":""),v=(i===C?"\u2193":"")+"Cases",f=(i===y?"\u2193":"")+"Deaths";return s.a.createElement("div",{className:"dashboard-component county-data-set"},s.a.createElement("div",{className:"dashboard-component-title"},t[e].name," Totals by County"),s.a.createElement("div",{className:"county-data"},s.a.createElement("div",{className:"county-data-row county-data-header"},s.a.createElement("div",{className:"county-data-header, site-link",onClick:()=>p(N)},h),s.a.createElement("div",{className:"align-right county-data-header, site-link",onClick:()=>p(C)},v),s.a.createElement("div",{className:"align-right county-data-header, site-link",onClick:()=>p(y)},f)),u?u.map((e,t)=>s.a.createElement("div",{key:t,className:"county-data-row"},s.a.createElement("div",null,e.county),s.a.createElement("div",{className:"align-right"},W(e.cases)),s.a.createElement("div",{className:"align-right"},W(e.deaths)))):null),s.a.createElement("div",{className:"data-sources"},"**Counties with no deaths or cases have been omitted."),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")},"N.Y. Times")))});a(16);var ae=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}))(({selectedState:e,stateInformation:t,deathsByAgeGroups:a})=>{let n=D(a,t[e].name);if("NY"===e){const e=n.concat(D(a,"New York City"));n=(e=>{var t=[];return e.reduce((function(e,a){return e[a.age_group]?(e[a.age_group].sum_covid_19_deaths+=Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,e[a.age_group].sum_total_deaths+=Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0):(e[a.age_group]={age_group:a.age_group,sum_covid_19_deaths:Number(a.sum_covid_19_deaths)?Number(a.sum_covid_19_deaths):0,sum_total_deaths:Number(a.sum_total_deaths)?Number(a.sum_total_deaths):0},t.push(e[a.age_group])),e}),{}),t})(e)}const r=(e=>{const t=[];return e.forEach(e=>{const a=e.replace("years and over","+").replace("years","").replace("year","").replace("Under","<");t.push(a)}),t})(n.map(e=>e.age_group)),o=n.map(e=>null==e.sum_covid_19_deaths?0:e.sum_covid_19_deaths),i=n.map(e=>null==e.sum_total_deaths?0:e.sum_total_deaths),c=[{label:"Covid-19",backgroundColor:"red",data:o},{label:"All Deaths",backgroundColor:"blue",data:i}];return s.a.createElement("div",{className:"demographics"},s.a.createElement("div",null,s.a.createElement(F,{chartType:"bar",chartOptions:P,chartDataSet:c,chartLabels:r,chartId:"DeathsByAgeGroup"})))});var ne=Object(i.b)(e=>({selectedState:e.chartConfig.selectedState,stateInformation:e.chartConfig.stateInformation,deathsByAgeGroups:e.chartConfig.deathsByAgeGroups}))(({selectedState:e,stateInformation:t,deathsByAgeGroups:a})=>{const n=Array.isArray(a)&&a.length>0;return s.a.createElement("div",{className:"dashboard-component demographics"},s.a.createElement("div",{className:"dashboard-component-title"},t[e].name," ",s.a.createElement("span",null,"Total Deaths By Age Group")),s.a.createElement("div",null,n?s.a.createElement(ae,null):s.a.createElement("div",null,"Problem fetching data from CDC site...")),s.a.createElement("div",{className:"data-sources"},"Data tracked since 2/1/2020"),s.a.createElement("div",{className:"data-sources"},"++Number of deaths reported in this table are the total number of deaths received and coded as of the date of analysis. Click on the CDC link below for details."),s.a.createElement("div",{className:"data-sources"},"Data:\xa0",s.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")},"Center For Disease Control"),s.a.createElement("br",null)))});var se=Object(i.b)(e=>({dataRefreshedTimestamp:e.chartConfig.dataRefreshedTimestamp,selectedState:e.chartConfig.selectedState}),e=>({setCOVID19Data:t=>e((e=>({type:R.SET_COVID19_DATA,payload:e}))(t))}))(({setCOVID19Data:e,dataRefreshedTimestamp:t,selectedState:a})=>(Object(n.useEffect)(()=>{function a(){return(a=Object(m.a)(u.a.mark((function a(){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,t){a.next=6;break}return a.next=4,k();case 4:n=a.sent,e(n);case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()},[e,t]),s.a.createElement("div",{className:"dashboard"},s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-title"},s.a.createElement("span",null,"COVID-19 Data Charts")," ",s.a.createElement("span",null,"For U.S. States")),s.a.createElement(L,null)),t?s.a.createElement("div",{className:"page-layout"},s.a.createElement(Y,{selectedFieldGroup:f.increase,stateChartTitle:"Daily Increases",chartId:"dailyIncreases"}),s.a.createElement(Y,{selectedFieldGroup:f.hospitalization,stateChartTitle:"Hospitalizations",chartId:"hospitalizations"}),s.a.createElement(Y,{selectedFieldGroup:f.testing,stateChartTitle:"Testing",chartId:"testing"}),s.a.createElement(ee,null),s.a.createElement(ne,null),"USA"===a?null:s.a.createElement(te,null)):s.a.createElement(q,null),s.a.createElement("div",{className:"page-footer"},"Data Sources:",s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://covidtracking.com/data")},"The COVID Tracking Project"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://www.census.gov/programs-surveys/popest.html")},"U.S. Census Bureau"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku")},"Center For Disease Control"),s.a.createElement("br",null),s.a.createElement("span",{className:"footer-site-link",onClick:()=>window.open("https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv")},"N.Y. Times"),s.a.createElement("br",null),"~ ~ ~",s.a.createElement("br",null),"Site built by Tanya Miranda",s.a.createElement("br",null),"tanya.miranda@gmail.com"))));a(44);var re=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(se,null)))},oe=a(3),ie=(a(45),a(8));const ce={statesHistoryData:null,stateInformation:null,countryHistoryData:null,stateCountyInfo:null,deathsByAgeGroups:null,dataRefreshedTimestamp:null,selectedState:null,selectedDateRange:null,selectedFields:[]};var le=(e=ce,t)=>{switch(t.type){case R.SET_COVID19_DATA:return{selectedState:"USA",selectedDateRange:"30",selectedFields:b,statesHistoryData:t.payload.statesHistoryData,stateInformation:t.payload.stateInformation,countryHistoryData:t.payload.countryHistoryData,stateCountyInfo:t.payload.stateCountyInfo,deathsByAgeGroups:t.payload.deathsByAgeGroups,dataRefreshedTimestamp:(new Date).toLocaleString()};case R.SET_STATE_HISTORY_DATA:return Object(ie.a)({},e,{statesHistoryData:t.payload});case R.SET_STATE_SELECTION:return Object(ie.a)({},e,{selectedState:t.payload});case R.SET_FIELD_SELECTION:return Object(ie.a)({},e,{selectedFields:t.payload});case R.SET_DATE_RANGE_SELECTION:return Object(ie.a)({},e,{selectedDateRange:t.payload});default:return e}},de=Object(oe.c)({chartConfig:le});var ue=Object(oe.d)(de,Object(oe.a)());o.a.render(s.a.createElement(i.a,{store:ue},s.a.createElement(re,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/covid19-by-state","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):l(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(t,e)})}}()}],[[22,1,2]]]);
//# sourceMappingURL=main.a250c39f.chunk.js.map