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
    * The class to manage the CheckedDateEx.
    */
    window.YCalendars.CheckedDateList = class{
        /**
        * The array of the class CheckedDateEx.
        */
        #dateExs;

        /**
        * The constructor.
        */
        constructor(){
            this.#dateExs = new Array();
        }

        /**
         * Add an object of the class CheckedDateEx.
         * @param {*} d An object of the class CheckedDateEx.
         */
        add( d ){
            this.#dateExs.push( d );
        }

        /**
        * Clear the array this object manages.
        */
        clear(){
            this.#dateExs.splice( 0 );
        }

        /**
        * Get the object of the class CheckedDateEx.
        * @param {*} target 
        * @returns Returns the object of the CheckedDateEx if this object has, otherwise returns null.
        */
        at( target ){
            for( let i = 0; i < this.#dateExs.length; i++ ){
                if( this.#dateExs[i].equals( target ) == true ){
                    return this.#dateExs[i];
                }
            }
        return null;
        }

        /**
        * Check whether this object has the target date or not.
        * @param {*} target the object of the class DateEx, which you want to search.
        * @returns Returns true if this object has the target, otherwise return false.
        */
        has( target ){
            return(this.at( target ) == null ? false : true);
        }

        /**
        * Print to debug.
        */
        print(){
            var txt = "";
            for( let i = 0; i < this.#dateExs.length; i++ ){
                txt += this.#dateExs[i].toString() + "\n";
            }
            alert( txt );
        }
    }

})();
