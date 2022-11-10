"use strict";

/**
 * The main object for the class div#ycalendar.(for HTML)
 */
let calendar = document.getElementById( "ycalendar" );

/**
 * The main object of the class YCalendar.
 */
const ycalendar = new YCalendar();

/**
 * The event for prevButton click.
 * @param {*} year The target year.
 * @param {*} month The target month.
 */
function prevButton_Click( year, month ){
    ycalendar.draw( new Date( year, month, 1 ) );
}

/**
 * The event for nextButton click.
 * @param {*} year The target year.
 * @param {*} month The target month.
 */
function nextButton_Click( year, month ){
    ycalendar.draw( new Date( year, month, 1 ) );
}

/**
 * The event for the cells doubleclick.
 * @param {*} year The target year.
 * @param {*} month The target month.
 * @param {*} day The target date.
 */
function ycalender_DoubleClick( year, month, day ){
    ycalendar.onDoubleClicked( year, month, day );
}
