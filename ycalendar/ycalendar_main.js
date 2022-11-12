"use strict";

(function(){
    window.YCalendars = window.YCalendars || {};

    /**
    * The main object for the class div#ycalendar.(for HTML)
    */
    window.YCalendars.calendar = document.getElementById( "ycalendar" );

    /**
    * The main object of the class YCalendar.
    */
    window.YCalendars.ycalendar = new window.YCalendars.YCalendar();

    /**
    * The event for prevButton click.
    * @param {*} year The target year.
    * @param {*} month The target month.
    */
    window.YCalendars.prevButton_Click = function( year, month ){
        window.YCalendars.ycalendar.draw( new Date( year, month, 1 ) );
    }

    /**
    * The event for nextButton click.
    * @param {*} year The target year.
    * @param {*} month The target month.
    */
    window.YCalendars.nextButton_Click = function( year, month ){
        window.YCalendars.ycalendar.draw( new Date( year, month, 1 ) );
    }

    /**
    * The event for the cells doubleclick.
    * @param {*} year The target year.
    * @param {*} month The target month.
    * @param {*} day The target date.
    */
    window.YCalendars.ycalender_DoubleClick = function( year, month, day ){
        window.YCalendars.ycalendar.onDoubleClicked( year, month, day );
    }

})();
