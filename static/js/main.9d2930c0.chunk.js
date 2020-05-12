(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{21:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),c=a(1);const l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(31);var d=a(5),u=a.n(d),m=a(7);a(33);const h={15:"Last 15 days",30:"Last 30 days",45:"Last 45 days",60:"Last 60 days"},f={responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Day"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]}},p=["#138E05","#A15B81","#2E16A6","#146AD4","#A9D422","#18F8BB","#AFC044","#3B9793","#822611","#FB2E76","#A5CA71","#983538","#082BD9","#2E136A","#05BB78","#44A4AD","#28FD7E","#387862"],E={ALL:"All States (default)",AK:"Alaska",AL:"Alabama",AR:"Arkansas",AS:"American Samoa",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District Of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",IA:"Iowa",ID:"Idaho",IL:"Illinois",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",MA:"Massachusetts",MD:"Maryland",ME:"Maine",MI:"Michigan",MN:"Minnesota",MO:"Missouri",MP:"Northern Mariana Islands",MS:"Mississippi",MT:"Montana",NC:"North Carolina",ND:"North Dakota",NE:"Nebraska",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NV:"Nevada",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VA:"Virginia",VI:"US Virgin Islands",VT:"Vermont",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"},g={testing:["positive","negative","pending","totalTestResults"],patient:["hospitalizedCurrently","inIcuCurrently","onVentilatorCurrently","death","recovered"],cumulative:["hospitalizedCumulative","inIcuCumulative","onVentilatorCumulative"],increase:["deathIncrease","hospitalizedIncrease","negativeIncrease","positiveIncrease","totalTestResultsIncrease"]},v=["positive","negative","pending","totalTestResults"],y=e=>{const t=e.map(e=>e.date).filter((e,t,a)=>a.indexOf(e)===t),a=[];return t.forEach(e=>{var t=String(e),n=Number(t.substring(4,6)),r=Number(t.substring(6,8));a.push(n+"/"+r)}),a},b=(e,t)=>{const a=[];return t.forEach((e,t)=>{a.push({label:e,fill:!1,backgroundColor:p[t],borderColor:p[t],data:[]})}),e.forEach(e=>{t.forEach(t=>{a.find(e=>e.label===t).data.push(e[t]?e[t]:0)})}),a},D=e=>{const t=[];return e.forEach(e=>{t[e.state]={name:e.name,website:e.covid19Site,twitter:e.twitter,notes:e.notes}}),t},S=e=>{var t=new Date(e);let a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),r+a+n},T=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,s,i,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,a=null,n=null,e.prev=3,e.next=6,fetch("https://covidtracking.com/api/v1/states/info.json");case 6:if(!(r=e.sent).ok){e.next=14;break}return e.next=10,r.json();case 10:s=e.sent,a=D(s),e.next=15;break;case 14:throw Error(r.statusText);case 15:return e.next=17,fetch("https://covidtracking.com/api/v1/states/daily.json");case 17:if(!(i=e.sent).ok){e.next=25;break}return e.next=21,i.json();case 21:s=e.sent,t=s,e.next=26;break;case 25:throw Error(i.statusText);case 26:return e.next=28,fetch("https://covidtracking.com/api/v1/states/current.json");case 28:if(!(c=e.sent).ok){e.next=36;break}return e.next=32,c.json();case 32:(s=e.sent).forEach(e=>{a[e.state].grade=e.dataQualityGrade}),e.next=37;break;case 36:throw Error(c.statusText);case 37:return e.next=39,fetch("https://covidtracking.com/api/v1/us/daily.json");case 39:if(!(l=e.sent).ok){e.next=47;break}return e.next=43,l.json();case 43:s=e.sent,n=s,e.next=48;break;case 47:throw Error(l.statusText);case 48:return e.abrupt("return",{statesHistoryData:t,stateInformation:a,countryHistoryData:n});case 51:e.prev=51,e.t0=e.catch(3),console.log(e.t0);case 54:case"end":return e.stop()}}),e,null,[[3,51]])})));return function(){return e.apply(this,arguments)}}();var N={SET_STATE_SELECTION:"SET_STATE_SELECTION",SET_DATE_RANGE_SELECTION:"SET_DATE_RANGE_SELECTION",SET_FIELD_SELECTION:"SET_FIELD_SELECTION",SET_COVID19_DATA:"SET_COVID19_DATA"};a(34);var C=Object(c.b)(e=>({selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange,selectedFields:e.chartConfig.selectedFields}),e=>({setStateSelection:t=>e({type:N.SET_STATE_SELECTION,payload:t}),setDateRangeSelection:t=>e({type:N.SET_DATE_RANGE_SELECTION,payload:t}),setFieldSelection:t=>e({type:N.SET_FIELD_SELECTION,payload:t})}))(({selectedState:e,selectedDateRange:t,selectedFields:a,setStateSelection:n,setDateRangeSelection:s,setFieldSelection:i})=>{const c=Object.keys(g),l=Object.keys(h),o=Object.keys(E),d=e=>{const t=e.target.checked,n=e.target.value;let r=null;t?(r=[...a],r.push(n)):r=a.filter(e=>e!==n),i(r)},u=e=>{const t=e.target.id;i(g[t])};return r.a.createElement("div",{className:"chart-configuration"},r.a.createElement("div",{className:"top-section"},r.a.createElement("div",{className:"config-section"},r.a.createElement("label",{className:"config-field"},"State:",r.a.createElement("br",null),r.a.createElement("select",{name:"stateSelection",defaultValue:e,onChange:e=>{n(e.target.value)}},o.map(e=>r.a.createElement("option",{key:e,value:e},E[e]))))),r.a.createElement("div",{className:"config-section"},r.a.createElement("label",{className:"config-field"},"Date Range:",r.a.createElement("br",null),r.a.createElement("select",{name:"dateRangeSelection",defaultValue:t,onChange:e=>{s(e.target.value)}},l.map(e=>r.a.createElement("option",{key:e,value:e},h[e])))))),r.a.createElement("div",{className:"config-section"},r.a.createElement("div",{className:"config-field"},"Data Fields:"),r.a.createElement("div",{className:"field-groups"},c.map(e=>r.a.createElement("div",{className:"config-field-group",key:e},r.a.createElement("div",{className:"group site-link",id:e,onClick:u},e," Data"),g[e].map(e=>r.a.createElement("div",{key:e},r.a.createElement("label",null,r.a.createElement("input",{className:"field-option",type:"checkbox",name:"fieldSelection",onChange:d,value:e,checked:-1!==a.indexOf(e)}),e))))))))}),k=(a(35),a(20)),w=a(16),A=a.n(w);let I;var O=({chartType:e,chartOptions:t,chartLabels:a,chartDataSet:s})=>{const i=Object(n.useRef)(null),c=Object(n.useState)(null),l=Object(k.a)(c,2),o=l[0],d=l[1];return Object(n.useEffect)(()=>{if(i&&i.current){console.log("loading chart...");const n={type:e,options:t,data:{labels:a,datasets:s}};"undefined"!==typeof I&&I.destroy(),I=new A.a(i.current,n),d(I)}},[i,e,t,a,s]),r.a.createElement("div",null,r.a.createElement("canvas",{id:o?"chart-js-display":"0",ref:i}))};var R=Object(c.b)(e=>({stateInformation:e.chartConfig.stateInformation,statesHistoryData:e.chartConfig.statesHistoryData,selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange,selectedFields:e.chartConfig.selectedFields}))(({statesHistoryData:e,stateInformation:t,selectedState:a,selectedFields:n,selectedDateRange:s})=>{if(!e)return;var i=new Date;i.setDate(i.getDate()-Number(s));const c=S(i),l=(o=a,d=c,e.filter(e=>e.state===o&&e.date>=d).sort((function(e,t){return e.date-t.date})));var o,d;const u=b(l,n),m=y(l);return r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart-header"},"Data for ",E[a]," last ",s," days"),r.a.createElement(O,{chartType:"line",chartOptions:f,chartLabels:m,chartDataSet:u}),r.a.createElement("div",{className:"chart-footer"},"Data Quality Grade for ",E[a],": \xa0\xa0",r.a.createElement("b",null,t[a].grade," **")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"site-link",onClick:()=>window.open(t[a].website)},a," COVID19 Website"),"\xa0\xa0\u2022\xa0\xa0",r.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://www.twitter.com/"+t[a].twitter)},"Twitter")))}),x=a(10),L=a(11);function j(){const e=Object(x.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return j=function(){return e},e}function _(){const e=Object(x.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _=function(){return e},e}const F=L.a.div(_()),H=L.a.div(j());var M=()=>r.a.createElement(F,null,r.a.createElement(H,null));a(39);var V=()=>r.a.createElement("div",{className:"mobile-message"},r.a.createElement("div",{className:"message"},"Chart is too big for your screen.",r.a.createElement("br",null)," Turn your device sideways."),r.a.createElement("div",{className:"phone"},r.a.createElement("div",{className:"phone-screen"}),r.a.createElement("div",{className:"phone-button"})));a(40);var W=Object(c.b)(e=>({countryHistoryData:e.chartConfig.countryHistoryData,selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange,selectedFields:e.chartConfig.selectedFields}))(({countryHistoryData:e,selectedFields:t,selectedDateRange:a})=>{if(!e)return;var n=new Date;n.setDate(n.getDate()-Number(a));const s=((e,t)=>e.filter(e=>e.date>=t).sort((function(e,t){return e.date-t.date})))(e,S(n)),i=b(s,t),c=y(s);return r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart-header"},"Data for All United States last ",a," days"),r.a.createElement(O,{chartType:"line",chartOptions:f,chartLabels:c,chartDataSet:i}))});var G=Object(c.b)(e=>({dataRefreshedTimestamp:e.chartConfig.dataRefreshedTimestamp,selectedState:e.chartConfig.selectedState,selectedDateRange:e.chartConfig.selectedDateRange,selectedFields:e.chartConfig.selectedFields}),e=>({setCOVID19Data:t=>e((e=>({type:N.SET_COVID19_DATA,payload:e}))(t))}))(({setCOVID19Data:e,dataRefreshedTimestamp:t,selectedState:a,selectedDateRange:s,selectedFields:i})=>(Object(n.useEffect)(()=>{function a(){return(a=Object(m.a)(u.a.mark((function a(){var n,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,t){a.next=7;break}return a.next=4,T();case 4:n=a.sent,r={statesHistoryData:n.statesHistoryData,stateInformation:n.stateInformation,countryHistoryData:n.countryHistoryData},e(r);case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()},[e,t]),r.a.createElement("div",{className:"state-data-history"},r.a.createElement("div",{className:"page-title"},"Covid19 Data Charts for U.S. States"),t?r.a.createElement("div",{className:"page-layout"},r.a.createElement(V,null),r.a.createElement(C,null),"ALL"===a?r.a.createElement(W,null):r.a.createElement(R,null)):r.a.createElement(M,null),r.a.createElement("div",{className:"page-footer"},r.a.createElement("b",null,"** Data Quality Grade determined by The COVID Tracking Project "),r.a.createElement("br",null),"Not All States Report All Data",r.a.createElement("br",null),"Historical Data Refreshed daily at 4:00 PM EST",r.a.createElement("br",null),"~ ~ ~",r.a.createElement("br",null),"This is a visual representation of the data collected by The COVID Tracking Project",r.a.createElement("br",null),"For more info, visit ",r.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/")},"https://covidtracking.com/"),r.a.createElement("br",null),"For field definitions, visit ",r.a.createElement("span",{className:"site-link",onClick:()=>window.open("https://covidtracking.com/api")},"https://covidtracking.com/api"),r.a.createElement("br",null),"~ ~ ~",r.a.createElement("br",null),"Site built by Tanya Miranda",r.a.createElement("br",null),"tanya.miranda@gmail.com"))));a(41);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(G,null)))},P=a(2),U=(a(42),a(8));const K={statesHistoryData:null,stateInformation:null,countryHistoryData:null,dataRefreshedTimestamp:null,selectedState:null,selectedDateRange:null,selectedFields:[]};var Y=(e=K,t)=>{switch(t.type){case N.SET_COVID19_DATA:return{selectedState:"ALL",selectedDateRange:"30",selectedFields:v,statesHistoryData:t.payload.statesHistoryData,stateInformation:t.payload.stateInformation,countryHistoryData:t.payload.countryHistoryData,dataRefreshedTimestamp:(new Date).toLocaleString()};case N.SET_STATE_SELECTION:return Object(U.a)({},e,{selectedState:t.payload});case N.SET_FIELD_SELECTION:return Object(U.a)({},e,{selectedFields:t.payload});case N.SET_DATE_RANGE_SELECTION:return Object(U.a)({},e,{selectedDateRange:t.payload});default:return e}},z=Object(P.c)({chartConfig:Y});var J=Object(P.d)(z,Object(P.a)());i.a.render(r.a.createElement(c.a,{store:J},r.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19-by-state",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/covid19-by-state","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):o(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):o(t,e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.9d2930c0.chunk.js.map