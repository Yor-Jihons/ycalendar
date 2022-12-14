/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar/blob/main/ycalendar/LICENSE
*/

"use strict";

(function(){
    window.YCalendars = window.YCalendars || {};

    /**
    * To create the class name string for the cells.
    * @param {*} checkedDateList The DateEx list you want to check.
    * @param {*} targetDate The object of the class DateEx you want to check.
    * @returns "yc_unchecked_day" or "yc_checked_day"
    */
    window.YCalendars.createClassName = function( checkedDateList, targetDate ){
        if( checkedDateList == undefined ) return "yc_unchecked_day";
        if( checkedDateList.has( targetDate ) == true ) return "yc_checked_day";
    return "yc_unchecked_day";
    }
})();
