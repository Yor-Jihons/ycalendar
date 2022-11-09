"use strict";

let calendar = document.getElementById( "ycalendar" );


function createClassName( dateExManager, targetDate ){
    if( dateExManager == undefined ) return "yc_unchecked_day";
    if( dateExManager.has( targetDate ) == true ) return "yc_checked_day";
return "yc_unchecked_day";
}


class YC_Event{
    onDoubleClicked( year, month, day ){}
}

class TableCreator{

    static #MAX_DAY_OF_WEEK = 7;

    #cellCounter;

    constructor(){
        this.#cellCounter = 1;
    }

    createTitleHTMLString( prevDate, mainDate, nextDate ){
        var titleHtml = "";
        titleHtml += '<h2 id="yc_title"><a title="' + prevDate.getFullYear() + '/' + (prevDate.getMonth() + 1) + '" onclick="prevButton_Click(' + prevDate.getFullYear() + ', ' + prevDate.getMonth() + ')">◀</a> ';
        titleHtml += mainDate.getFullYear() + '/' + (mainDate.getMonth() + 1);
        titleHtml += ' <a title="' + nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '" onclick="nextButton_Click(' + nextDate.getFullYear() + ', ' + nextDate.getMonth() + ')">▶</a></h2>';
    return titleHtml;
    }

    createTableHeaderHtmlString(){
        var tableHeaderHtml = "";
        tableHeaderHtml += '<table id="yc_table">';
        tableHeaderHtml += '<tr><th class="yc_table_header">Sun</th><th class="yc_table_header">Mon</th><th class="yc_table_header">Thue</th>';
        tableHeaderHtml += '<th class="yc_table_header">Wed</th><th class="yc_table_header">Thu</th><th class="yc_table_header">Fri</th><th class="yc_table_header">Sat</th></tr>';
        tableHeaderHtml += '<tr>';
    return tableHeaderHtml;
    }

    createEmptyCells( max ){
        let txt = "";
        for( var i = 0; i < max; i++ ){
            txt += '<td class="yc_unchecked_day">&nbsp;</td>';
            if( this.#cellCounter % TableCreator.#MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
            this.#cellCounter++;
        }
    return txt;
    }

    createMainCells( mainDate, lastDayInMonth, dateExManager ){
        let txt = "";
        for( var i = 0; i < lastDayInMonth; i++ ){
            const classname = createClassName( dateExManager, new CheckDateEx( mainDate.getFullYear(), mainDate.getMonth(), i + 1 ) );
            txt += '<td class="' + classname + '">';
            txt += '<div ondblclick="ycalender_DoubleClick(' + mainDate.getFullYear() + ',' + (mainDate.getMonth() + 1) + ',' + (i + 1) + ')">';
            txt += (i + 1);
            txt += '</div>';
            txt += '</td>';
            if( this.#cellCounter % TableCreator.#MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
            this.#cellCounter++;
        }
    return txt;
    }

    createTableFooterHtmlString(){
        return "</table>";
    }
}

class YCalendar{
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

        const tableCreator = new TableCreator();

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

        calendar.innerHTML = htmlText;
    }

    onDoubleClicked( year, month, day ){
        if( this.#event != null ){
            this.#event.onDoubleClicked( year, month, day );
        }
    }
}

class CheckDateEx{

    #date;

    constructor( year, month, day ){
        this.#date      = new Date( year, month, day, 1, 1, 1, 1 );
    }

    equals( d ){
        if( this.#date.getFullYear() == d.#date.getFullYear()
        && this.#date.getMonth() == d.#date.getMonth()
        && this.#date.getDate() == d.#date.getDate() ) return true;
    return false;
    }

    toString(){
        return this.#date.toDateString();
    }
}

class CheckDateList{
    #dateExs;

    constructor(){
        this.#dateExs = new Array();
    }

    add( d ){
        this.#dateExs.push( d );
    }

    clear(){
        this.#dateExs.splice( 0 );
    }

    at( target ){
        for( let i = 0; i < this.#dateExs.length; i++ ){
            if( this.#dateExs[i].equals( target ) == true ){
                return this.#dateExs[i];
            }
        }
    return null;
    }

    /**
     * 
     * @param {*} target the object of the class DateEx, which you want to search.
     * @returns Returns true if this object has the target, otherwise return false.
     */
    has( target ){
        return(this.at( target ) == null ? false : true);
    }

    print(){
        var txt = "";
        for( let i = 0; i < this.#dateExs.length; i++ ){
            txt += this.#dateExs[i].toString() + "\n";
        }
        alert( txt );
    }
}

const ycalendar = new YCalendar();

function prevButton_Click( year, month ){
    ycalendar.draw( new Date( year, month, 1 ) );
}

function nextButton_Click( year, month ){
    ycalendar.draw( new Date( year, month, 1 ) );
}

function ycalender_DoubleClick( year, month, day ){
    ycalendar.onDoubleClicked( year, month, day );
}
