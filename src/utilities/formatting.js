export const getDisplayNumber = (num) => {
    if (!num)
        num = 0;
    return Intl.NumberFormat('en-US', {useGrouping: true}).format(num);
}

export const getPercentage = (partialNum, totalNum) => {
    var percent = ((partialNum / totalNum) * 100).toFixed(2);
    if (percent === "0.00")
        percent = "< 0.01"
    return percent + "%";
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