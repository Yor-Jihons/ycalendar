"use strict";

(function(){
    window.NameSpace1 = window.NameSpace1 || {};

    /**
    * The Event for ycalendar.
    * If you want to double click, implement the method onDoubleClicked.
    */
    window.NameSpace1.YC_Event = class{
        /**
        * The event for ycalendar.
        * If some cells double-clicked, this event will run.
        * @param {*} year The year.
        * @param {*} month The month. { 1, 2, 3, ... 11, 12 }
        * @param {*} day The date. { 1, 2, 3, ... }
        */
        onDoubleClicked( year, month, day ){}
    }
})();

