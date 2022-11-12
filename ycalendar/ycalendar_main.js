"use strict";

(function(){
    window.NameSpace1 = window.NameSpace1 || {};

    /**
    * The main object for the class div#ycalendar.(for HTML)
    */
    window.NameSpace1.calendar = document.getElementById( "ycalendar" );

    /**
    * The main object of the class YCalendar.
    */
    window.NameSpace1.ycalendar = new YCalendar();

    /**
    * The event for prevButton click.
    * @param {*} year The target year.
    * @param {*} month The target month.
    */
    window.NameSpace1.prevButton_Click = function( year, month ){
        window.NameSpace1.ycalendar.draw( new Date( year, month, 1 ) );
    }

    /**
    * The event for nextButton click.
    * @param {*} year The target year.
    * @param {*} month The target month.
    */
    window.NameSpace1.nextButton_Click = function( year, month ){
        window.NameSpace1.ycalendar.draw( new Date( year, month, 1 ) );
    }

})();

/**
 * The event for the cells doubleclick.
 * @param {*} year The target year.
 * @param {*} month The target month.
 * @param {*} day The target date.
 */
function ycalender_DoubleClick( year, month, day ){
    window.NameSpace1.ycalendar.onDoubleClicked( year, month, day );
}
