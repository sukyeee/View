export default{
    makeDateStr(year, month, day, type){ // type + / . 2022/07/24 2022.11.24
        return year + type + ( ( month < 10 ) ? '0' + month : month ) + type + ( ( day < 10 ) ? '0' + day : day );
    }
}