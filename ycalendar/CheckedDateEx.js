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
    * The class to put other color as the checked dates, like a schedule.
    */
    window.YCalendars.CheckedDateEx = class{
        /**
        * The target date.
        */
        #date;

        /**
        * The constructor.
        * @param {*} year The year.
        * @param {*} month The month.
        * @param {*} day The date.
        */
        constructor( year, month, day ){
            this.#date = new Date( year, month, day, 1, 1, 1, 1 );
        }

        /**
        * Check whether date is same or not.
        * @param {*} d The object of the class Date.
        * @returns Returns true if d is same, otherwise returns false.
        */
        equals( d ){
            if( this.#date.getFullYear() == d.#date.getFullYear()
            && this.#date.getMonth() == d.#date.getMonth()
            && this.#date.getDate() == d.#date.getDate() ) return true;
        return false;
        }

        /**
        *  Make a string to print.
        * @returns The string for the date.
        */
        toString(){
            return this.#date.toDateString();
        }
    };
})();

