"use strict";

(function(){
    window.YCalendars = window.YCalendars || {};

    window.YCalendars.TableCreator = class{

        static #MAX_DAY_OF_WEEK = 7;

        #cellCounter;

        constructor(){
            this.#cellCounter = 1;
        }

        createTitleHTMLString( prevDate, mainDate, nextDate ){
            var titleHtml = "";
            titleHtml += '<h2 id="yc_title"><a title="' + prevDate.getFullYear() + '/' + (prevDate.getMonth() + 1) + '" onclick="window.YCalendars.prevButton_Click(' + prevDate.getFullYear() + ', ' + prevDate.getMonth() + ')">◀</a> ';
            titleHtml += mainDate.getFullYear() + '/' + (mainDate.getMonth() + 1);
            titleHtml += ' <a title="' + nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '" onclick="window.YCalendars.nextButton_Click(' + nextDate.getFullYear() + ', ' + nextDate.getMonth() + ')">▶</a></h2>';
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
                if( this.#cellCounter % window.YCalendars.TableCreator.#MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
                this.#cellCounter++;
            }
        return txt;
        }

        createMainCells( mainDate, lastDayInMonth, checkedDateList ){
            let txt = "";
            for( var i = 0; i < lastDayInMonth; i++ ){
                const classname = window.YCalendars.createClassName( checkedDateList, new window.YCalendars.CheckedDateEx( mainDate.getFullYear(), mainDate.getMonth(), i + 1 ) );
                txt += '<td class="' + classname + '">';
                txt += '<div ondblclick="window.YCalendars.ycalender_DoubleClick(' + mainDate.getFullYear() + ',' + (mainDate.getMonth() + 1) + ',' + (i + 1) + ')">';
                txt += (i + 1);
                txt += '</div>';
                txt += '</td>';
                if( this.#cellCounter % window.YCalendars.TableCreator.#MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
                this.#cellCounter++;
            }
        return txt;
        }

        createTableFooterHtmlString(){
            return "</table>";
        }
    }

})();

