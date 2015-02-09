
//将1970年1月1日到现在的毫秒数（或者秒）转换为yyyy-MM-dd的格式
function changeNumberToyyyyMMdd(number) {
    var intDate = number;

    //10位，按照秒处理
    if(number > 1000000000 && number < 9999999999) {
        intDate = number * 1000;
    }

    var date = new Date();
    date.setTime(intDate);

    var month = date.getMonth() + 1;
    if(month < 10) {
        month = "0" + month;
    }

    var day = date.getDate() + 1;
    if(day < 10) {
        day = "0" + day;
    }

    return date.getFullYear() + "-" + month + "-" + day;
}