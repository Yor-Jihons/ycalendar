"use strict";


(function(){
    window.YCalendars = window.YCalendars || {};

    /**
    * The class to show the calendar.
    */
    window.YCalendars.YCalendar = class{
        /**
        * The object of a class, which is derived from the class YC_Event, to use some events.
        */
        #event;

        /**
        * The constructor.
        */
        constructor(){
            this.#event = null;
        }

        /**
        * The setter for the event.
        * @param {*} yc_event The object of a class, which is derived from the class YC_Event, to use some events.
        */
        setEvent( yc_event ){
            this.#event = yc_event;
        }

        /**
        * Draw the ycalendar.
        * @param {*} date The object of the class Date.
        * @param {*} checkedDateList The object of the class CheckedDateList.
        * You can ommit this parameter.
        */
        draw( date, checkedDateList ){
            let prevDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
            prevDate.setMonth( date.getMonth() - 1 );

            let mainDate_first = new Date( date.getFullYear(), date.getMonth(), 1 );
            let mainDate_last  = new Date( date.getFullYear(), date.getMonth(), 0 );

            let nextDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
            nextDate.setMonth( date.getMonth() + 1 );

            const tableCreator = new window.YCalendars.TableCreator();

            let htmlText = "";
            htmlText += tableCreator.createTitleHTMLString( prevDate, mainDate_first, nextDate );

            htmlText += tableCreator.createTableHeaderHtmlString();

            const NUM_OF_EMPTY_CELL = mainDate_first.getDay();
            htmlText += tableCreator.createEmptyCells( NUM_OF_EMPTY_CELL );

            const lastDayInMonth   = mainDate_last.getDate();
            htmlText += tableCreator.createMainCells( mainDate_first, lastDayInMonth, checkedDateList );

            const MAX_CELL       = 42;
            let num_of_tail_cell = MAX_CELL - (NUM_OF_EMPTY_CELL + lastDayInMonth);
            htmlText += tableCreator.createEmptyCells( num_of_tail_cell );

            htmlText += tableCreator.createTableFooterHtmlString();

            window.YCalendars.calendar.innerHTML = htmlText;
        }

        /**
        * The method for the double-click event.
        * @param {*} year 
        * @param {*} month 
        * @param {*} day 
        */
        onDoubleClicked( year, month, day ){
            if( this.#event != null ){
                this.#event.onDoubleClicked( year, month, day );
            }
        }
    }
})();
