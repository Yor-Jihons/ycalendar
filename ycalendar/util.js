"use strict";

function createClassName( checkedDateList, targetDate ){
    if( checkedDateList == undefined ) return "yc_unchecked_day";
    if( checkedDateList.has( targetDate ) == true ) return "yc_checked_day";
return "yc_unchecked_day";
}
