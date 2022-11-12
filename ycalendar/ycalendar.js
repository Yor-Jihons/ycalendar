"use strict";


(function(){
    window.NameSpace1 = window.NameSpace1 || {};

    window.NameSpace1.YCalendar = class{
        #event;

        constructor(){
            this.#event = null;
        }

        setEvent( yc_event ){
            this.#event = yc_event;
        }

        draw( date, dateExManager ){
            let prevDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
            prevDate.setMonth( date.getMonth() - 1 );

            let mainDate_first = new Date( date.getFullYear(), date.getMonth(), 1 );
            let mainDate_last  = new Date( date.getFullYear(), date.getMonth(), 0 );

            let nextDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
            nextDate.setMonth( date.getMonth() + 1 );

            const tableCreator = new window.NameSpace1.TableCreator();

            let htmlText = "";
            htmlText += tableCreator.createTitleHTMLString( prevDate, mainDate_first, nextDate );

            htmlText += tableCreator.createTableHeaderHtmlString();

            const NUM_OF_EMPTY_CELL = mainDate_first.getDay();
            htmlText += tableCreator.createEmptyCells( NUM_OF_EMPTY_CELL );

            const lastDayInMonth   = mainDate_last.getDate();
            htmlText += tableCreator.createMainCells( mainDate_first, lastDayInMonth, dateExManager );

            const MAX_CELL       = 42;
            let num_of_tail_cell = MAX_CELL - (NUM_OF_EMPTY_CELL + lastDayInMonth);
            htmlText += tableCreator.createEmptyCells( num_of_tail_cell );

            htmlText += tableCreator.createTableFooterHtmlString();

            window.NameSpace1.calendar.innerHTML = htmlText;
        }

        onDoubleClicked( year, month, day ){
            if( this.#event != null ){
                this.#event.onDoubleClicked( year, month, day );
            }
        }
    }
})();
