export const getDisplayNumber = (num) => {
    if (!num)
        num = 0;
    return Intl.NumberFormat('en-US', {useGrouping: true}).format(num);
}

export const getFormattedDateForFiltering = (date) => {
    var d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return year + month + day;
}

export const getDateDisplayString = (date) => {
    var d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    return month + "/" + day + "/" + year;
}

export const getPercentage = (partialNum, totalNum) => {
    var percent = ((partialNum / totalNum) * 100).toFixed(2);
    if (percent === "0.00")
        percent = "< 0.01"
    return percent + "%";
}