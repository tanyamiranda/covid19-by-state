(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),s=a(13),l=a.n(s),o=(a(24),a(1)),c=a.n(o),u=a(2),d=a(3),m=a(4),f=a(6),h=a(7),p=(a(26),["positive","negative","totalTestResults","pending","death","recovered","hospitalized","hospitalizedCurrently","inIcuCurrently","onVentilatorCurrently","hospitalizedCumulative","inIcuCumulative","onVentilatorCumulative","deathIncrease","hospitalizedIncrease","negativeIncrease","positiveIncrease","totalTestResultsIncrease"]),v={15:"Last 15 days",30:"Last 30 days",45:"Last 45 days",60:"Last 60 days"},g=["#138E05","#A15B81","#2E16A6","#146AD4","#A9D422","#18F8BB","#AFC044","#3B9793","#822611","#FB2E76","#A5CA71","#983538","#082BD9","#2E136A","#05BB78","#44A4AD","#28FD7E","#387862"],E={hospitalizedCurrently:!0,inIcuCurrently:!0,onVentilatorCurrently:!0,death:!0},b={AK:"Alaska",AL:"Alabama",AR:"Arkansas",AS:"American Samoa",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District Of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",IA:"Iowa",ID:"Idaho",IL:"Illinois",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",MA:"Massachusetts",MD:"Maryland",ME:"Maine",MI:"Michigan",MN:"Minnesota",MO:"Missouri",MP:"Northern Mariana Islands",MS:"Mississippi",MT:"Montana",NC:"North Carolina",ND:"North Dakota",NE:"Nebraska",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NV:"Nevada",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VA:"Virginia",VI:"US Virgin Islands",VT:"Vermont",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"},y=(a(27),a(18)),k=(a(28),function(e){var t=e.fieldName,a=e.optionList,n=e.labelsList,s=e.defaultSelected,l=e.onChangeEvent,o=Object(r.useState)(1),c=Object(y.a)(o,2),u=c[0],d=c[1],m=function(){d(0)};return i.a.createElement("select",{className:"short-drop-down",name:t,onChange:l,defaultValue:s,size:u,onMouseDown:function(){a.length<10?d(a.length):d(10)},onBlur:m},a.map((function(e,t){return i.a.createElement("option",{className:"short-drop-down-option",onClick:m,key:e,value:e},n?n[e]:e)})))}),N=function(e){var t=e.dataRefreshedTimestamp,a=e.selectedState,n=e.selectedDateRange,r=e.selectedFields,s=e.stateSelectionHandler,l=e.dateSelectionHander,o=e.fieldSelectionHandler;return i.a.createElement("div",{className:"chart-configuration"},i.a.createElement("form",null,i.a.createElement("div",{className:"config-field"},"Date Loaded:"),i.a.createElement("div",null,t),i.a.createElement("br",null),i.a.createElement("div",{className:"config-field"},"State:"),i.a.createElement(k,{fieldName:"states-list",optionList:Object.keys(b),labelsList:b,defaultSelected:a,onChangeEvent:s}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"config-field"},"Date Range:"),i.a.createElement(k,{fieldName:"date-range-list",optionList:Object.keys(v),labelsList:v,defaultSelected:n,onChangeEvent:l}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"config-field"},"Data Fields:"),p.map((function(e){return i.a.createElement("div",{className:"field-option",key:e},i.a.createElement("input",{type:"checkbox",name:"field-selection",onChange:o,value:e,checked:!!r[e]}),i.a.createElement("label",null,e))}))))},w=a(14),D=a.n(w),S=(a(31),a(32),function(){return i.a.createElement("div",{className:"mobile-message"},i.a.createElement("div",{className:"message"},"Chart is too big for your screen.",i.a.createElement("br",null)," Turn your device sideways."),i.a.createElement("div",{className:"phone"},i.a.createElement("div",{className:"phone-screen"}),i.a.createElement("div",{className:"phone-button"})))}),C=function(e){var t=[];return e.forEach((function(e){t[e.state]={name:e.name,website:e.covid19Site,twitter:e.twitter,notes:e.notes}})),t},A=function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n,r,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,a=null,e.prev=2,e.next=5,fetch("https://covidtracking.com/api/v1/states/info.json");case 5:if(!(n=e.sent).ok){e.next=13;break}return e.next=9,n.json();case 9:r=e.sent,a=C(r),e.next=14;break;case 13:throw Error(n.statusText);case 14:return e.next=16,fetch("https://covidtracking.com/api/v1/states/daily.json");case 16:if(!(i=e.sent).ok){e.next=24;break}return e.next=20,i.json();case 20:s=e.sent,t=s,e.next=25;break;case 24:throw Error(i.statusText);case 25:return e.next=27,fetch("https://covidtracking.com/api/v1/states/current.json");case 27:if(!(l=e.sent).ok){e.next=35;break}return e.next=31,l.json();case 31:e.sent.forEach((function(e){a[e.state].grade=e.dataQualityGrade})),e.next=36;break;case 35:throw Error(l.statusText);case 36:return e.abrupt("return",{statesHistoryData:t,stateInformation:a});case 39:e.prev=39,e.t0=e.catch(2),console.log(e.t0);case 42:case"end":return e.stop()}}),e,null,[[2,39]])})));return function(){return e.apply(this,arguments)}}(),x={responsive:!0,title:{display:!1},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Day"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]}},I=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).chartRef=i.a.createRef(),e}return Object(m.a)(a,[{key:"loadChart",value:function(){var e=this.props,t=e.statesHistoryData,a=e.selectedState,r=e.selectedFields,i=e.selectedDateRange;if(t){var s=new Date;s.setDate(s.getDate()-Number(i));var l,o,c=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),r+a+n}(s),u=Object.keys(r).filter((function(e){return r[e]})),d=(l=a,o=c,t.filter((function(e){return e.state===l&&e.date>=o})).sort((function(e,t){return e.date-t.date}))),m=function(e,t){var a=[];return t.forEach((function(e,t){a.push({label:e,fill:!1,backgroundColor:g[t],borderColor:g[t],data:[]})})),e.forEach((function(e){t.forEach((function(t){a.find((function(e){return e.label===t})).data.push(e[t]?e[t]:0)}))})),a}(d,u),f=function(e){var t=e.map((function(e){return e.date})).filter((function(e,t,a){return a.indexOf(e)===t})),a=[];return t.forEach((function(e){var t=String(e),n=Number(t.substring(4,6)),r=Number(t.substring(6,8));a.push(n+"/"+r)})),a}(d);"undefined"!==typeof n&&n.destroy();var h=this.chartRef.current.getContext("2d");n=new D.a(h,{type:"line",data:{labels:f,datasets:m},options:x})}}},{key:"componentDidMount",value:function(){this.loadChart()}},{key:"componentDidUpdate",value:function(){this.loadChart()}},{key:"render",value:function(){return i.a.createElement("div",{className:"chart-display"},i.a.createElement(S,null),i.a.createElement("div",{className:"chart"},i.a.createElement("canvas",{id:"myChart",ref:this.chartRef})))}}]),a}(i.a.Component),O=a(8),R=a(9);function j(){var e=Object(O.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return j=function(){return e},e}function M(){var e=Object(O.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return M=function(){return e},e}var T=R.a.div(M()),F=R.a.div(j()),H=function(){return i.a.createElement(T,null,i.a.createElement(F,null))},L=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={selectedState:"NJ",selectedDateRange:"30",selectedFields:E,statesHistoryData:null,stateInformation:null,dataRefreshedTimestamp:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Date,a=t.toLocaleString(),e.next=5,A();case 5:return n=e.sent,e.next=8,this.setState({statesHistoryData:n.statesHistoryData,stateInformation:n.stateInformation,dataRefreshedTimestamp:a});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleStateSelection",value:function(e){this.setState({selectedState:e.target.value})}},{key:"handleDateRangeSelection",value:function(e){this.setState({selectedDateRange:e.target.value})}},{key:"handleFieldSelection",value:function(e){var t=this.state.selectedFields;t[e.target.value]=e.target.checked,this.setState({selectedFields:t})}},{key:"render",value:function(){var e=this.state,t=e.statesHistoryData,a=e.selectedState,n=e.selectedDateRange,r=e.selectedFields,s=e.stateInformation,l=e.dataRefreshedTimestamp;return i.a.createElement("div",{className:"state-data-history"},i.a.createElement("div",{className:"page-title"},i.a.createElement("h2",null,"Covid19 Data Charts for U.S. States")),l?i.a.createElement("div",{className:"page-layout"},i.a.createElement(N,{dataRefreshedTimestamp:l,selectedState:a,selectedDateRange:n,selectedFields:r,stateSelectionHandler:this.handleStateSelection.bind(this),dateSelectionHander:this.handleDateRangeSelection.bind(this),fieldSelectionHandler:this.handleFieldSelection.bind(this)}),i.a.createElement("div",{className:"chart-container"},i.a.createElement("div",{className:"chart-header"},"Data for ",s[a].name," last ",n," days"),i.a.createElement(I,{selectedState:a,selectedDateRange:n,selectedFields:r,statesHistoryData:t}),i.a.createElement("div",{className:"chart-footer"},i.a.createElement("span",{className:"site-link",onClick:function(){return window.open(s[a].website)}},a," COVID19 Website"),"\xa0\xa0\u2022\xa0\xa0",i.a.createElement("span",{className:"site-link",onClick:function(){return window.open("https://www.twitter.com/"+s[a].twitter)}},"Twitter"),"\xa0\xa0\u2022\xa0\xa0Data Quality Grade for ",s[a].name,": \xa0\xa0",i.a.createElement("b",null,s[a].grade," **")))):i.a.createElement(H,null),i.a.createElement("div",{className:"page-footer"},i.a.createElement("p",null,i.a.createElement("b",null,"** Data Quality Grade determined by The COVID Tracking Project ")),i.a.createElement("p",null,"Not All States Report All Data"),i.a.createElement("p",null,"Historical Data Refreshed daily at 4:00 PM EST"),i.a.createElement("p",null,"~ ~ ~"),i.a.createElement("p",null,"This is a visual representation of the data collected by The COVID Tracking Project"),i.a.createElement("p",null,"For more info, visit ",i.a.createElement("span",{className:"site-link",onClick:function(){return window.open("https://covidtracking.com/")}},"https://covidtracking.com/")),i.a.createElement("p",null,"For field definitions, visit ",i.a.createElement("span",{className:"site-link",onClick:function(){return window.open("https://covidtracking.com/api")}},"https://covidtracking.com/api"))))}}]),a}(i.a.Component);a(35);var V=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ab6daa98.chunk.js.map