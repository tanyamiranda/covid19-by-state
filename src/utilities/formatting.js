export const getDisplayNumber = (num) => {
    if (!num)
        num = 0;
    return Intl.NumberFormat('en-US', {useGrouping: true}).format(num);
}

export const getPercentage = (partialNum, totalNum) => {

    if (totalNum===0)
        return "0";

    var percent = ((partialNum / totalNum) * 100).toFixed(2);
    if (percent === "0.00")
        percent = "< 0.01"

    return percent + "%";
}

export const getPercentageText = (partialNum, totalNum) => {

    if (totalNum===0)
        return partialNum;

    var percent = ((partialNum / totalNum) * 100).toFixed(2);
    if (percent === "0.00")
        percent = "< 0.01"
        
    return percent + "% of " + getDisplayNumber(totalNum);
}

export const getFormattedDateForFiltering = (dateValue) => {
  
    const date = new Date(dateValue);

    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = "" + date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return Number(year + month + day);
}

export const getFormattedDateForQuery = (dateValue) => {

    const date = new Date(dateValue);

    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = "" + date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return year + "-" + month + "-" +  day;

}

export const formatISODate = (dateValue) => {

    const date = new Date(dateValue);

    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = "" + date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return year + "-" + month + "-" +  day + "T00:00:00.000";

}


export const formatAgeGroupName = (ageGroupName) => {
    
    const newGroupName = ageGroupName.toLowerCase().replace("years and over","").replace("years","").replace("year","").replace("Under","<").replaceAll("-","_").replaceAll(" ",""); 

    return newGroupName;
}

export const shrinkAgeGroupName = (ageGroupName) => {
    
    const newGroupName = ageGroupName.toLowerCase().replace("years and over","+").replace("years","").replace("year","").replace("Under","<").replaceAll(" ",""); 

    return newGroupName;
}

export const shrinkAgeGroupNameList = (ageGroupNameList) => {
    
    const newList = [];

    ageGroupNameList.forEach(rec => {
        const newGroupName = rec.toLowerCase().replace("years and over","+").replace("years","").replace("year","").replace("Under","<").replaceAll(" ",""); 
        newList.push(newGroupName);
    });

    return newList;
}

export const formatDateListForChart = (dateList) => {

    const newDateList = [];

    const uniqueDates = [...new Set(dateList.map(item => item.substr(0,10)))];

    uniqueDates.forEach(dateString => {
        const year = Number(dateString.substring(2,4));
        const month = Number(dateString.substring(5,7));
        const day = Number(dateString.substring(8,10));
        const fullDate = new Date(month + "/" + day + "/" + year)
        newDateList.push(fullDate);
    });

    return newDateList;
}