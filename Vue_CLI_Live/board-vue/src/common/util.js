export default{
    makeDateStr(year, month, day, type){ // type + / . 2022/07/24 2022.11.24
        return year + type + ( ( month < 10 ) ? '0' + month : month ) + type + ( ( day < 10 ) ? '0' + day : day );
    },
    makeTimeStr(hour, minute, second, type){ // type + / . 2022/07/24 2022.11.24
        return hour + type + ( ( minute < 60 ) ? '0' + minute : minute ) + type + ( ( second < 60 ) ? '0' + second : second );
    }

}