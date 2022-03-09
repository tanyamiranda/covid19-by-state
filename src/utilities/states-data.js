/**
 * Population data taken from US Census estimates for July 2020. 
 * https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/population-change-data-table.pdf
 * 
 * This data changes approx every 18 months. No need to scrub every time.
 * "USA" population = US Total in pdf + PR Total
 */

export const STATIC_STATE_DATA = [
    {state:"USA", name:"United States", population:334735155},
    {state:"AK", name:"Alaska", population:733391},
    {state:"AL", name:"Alabama", population:5024279},
    {state:"AR", name:"Arkansas", population:3011524},
    {state:"AZ", name:"Arizona", population:7151502},
    {state:"CA", name:"California", population:39538223},
    {state:"CO", name:"Colorado", population:5773714},
    {state:"CT", name:"Connecticut", population:3605944},
    {state:"DC", name:"District of Columbia", population:689545},
    {state:"DE", name:"Delaware", population:989948},
    {state:"FL", name:"Florida", population:21538187},
    {state:"GA", name:"Georgia", population:10711908},
    {state:"HI", name:"Hawaii", population:1455271},
    {state:"IA", name:"Iowa", population:3190369},
    {state:"ID", name:"Idaho", population:1839106},
    {state:"IL", name:"Illinois", population:12812508},
    {state:"IN", name:"Indiana", population:6785528},
    {state:"KS", name:"Kansas", population:2937880},
    {state:"KY", name:"Kentucky", population:4505836},
    {state:"LA", name:"Louisiana", population:4657757},
    {state:"MA", name:"Massachusetts", population:7029917},
    {state:"MD", name:"Maryland", population:6177224},
    {state:"ME", name:"Maine", population:1362359},
    {state:"MI", name:"Michigan", population:10077331},
    {state:"MN", name:"Minnesota", population:5706494},
    {state:"MO", name:"Missouri", population:6154913},
    {state:"MS", name:"Mississippi", population:2961279},
    {state:"MT", name:"Montana", population:1084225},
    {state:"NC", name:"North Carolina", population:10439388},
    {state:"ND", name:"North Dakota", population:779094},
    {state:"NE", name:"Nebraska", population:1961504},
    {state:"NH", name:"New Hampshire", population:1377529},
    {state:"NJ", name:"New Jersey", population:9288994},
    {state:"NM", name:"New Mexico", population:2117522},
    {state:"NV", name:"Nevada", population:3104614},
    {state:"NY", name:"New York", population:20201249, extra:" (Excludes NYC)"},
    {state:"NYC", name:"New York City", population:8804190},
    {state:"OH", name:"Ohio", population:11799448},
    {state:"OK", name:"Oklahoma", population:3959353},
    {state:"OR", name:"Oregon", population:4237256},
    {state:"PA", name:"Pennsylvania", population:13002700},
    {state:"PR", name:"Puerto Rico", population:3285874},
    {state:"RI", name:"Rhode Island", population:1097379},
    {state:"SC", name:"South Carolina", population:5118425},
    {state:"SD", name:"South Dakota", population:886667},
    {state:"TN", name:"Tennessee", population:6910840},
    {state:"TX", name:"Texas", population:29145505},
    {state:"UT", name:"Utah", population:3271616},
    {state:"VA", name:"Virginia", population:8631393},
    {state:"VT", name:"Vermont", population:643077},
    {state:"WA", name:"Washington", population:7705281},
    {state:"WI", name:"Wisconsin", population:5893718},
    {state:"WV", name:"West Virginia", population:1793716},
    {state:"WY", name:"Wyoming", population:576851}
];


export const getStateCodes = () => {
    var output = [];
    STATIC_STATE_DATA.forEach((rec) => {
        output.push(rec.state);
    });
    return output;
}

export const getStateData =(stateCode) => {
    return STATIC_STATE_DATA.find(rec => rec.state === stateCode)
}
