let calendar = document.getElementById( "ycalendar" );


class YC_Event{
    onDoubleClicked( date, isChecked ){}
}

class YCalendar{
    #event;

    constructor(){
        this.#event = null;
    }

    set event( yc_event ){
        this.#event = yc_event;
    }

    draw( date ){
        // 現在の日付
        // 先月
        // 今月
        let prevDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
        prevDate.setMonth( date.getMonth() - 1 );

        let mainDate_first = new Date( date.getFullYear(), date.getMonth(), 1 );
        let mainDate_last  = new Date( date.getFullYear(), date.getMonth(), 0 );

        let nextDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() );
        nextDate.setMonth( date.getMonth() + 1 );

        var text = "";
        text += '<h2 id="yc_title"><a title="' + prevDate.getFullYear() + '/' + (prevDate.getMonth() + 1) + '" onclick="prevButton_Click(' + prevDate.getFullYear() + ', ' + prevDate.getMonth() + ')">◀</a> ';
        text += mainDate_first.getFullYear() + '/' + (mainDate_first.getMonth() + 1);
        text += ' <a title="' + nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '" onclick="nextButton_Click(' + nextDate.getFullYear() + ', ' + nextDate.getMonth() + ')">▶</a></h2>';

        text += '<table id="yc_table">';
        text += '<tr><th class="yc_table_header">Sun</th><th class="yc_table_header">Mon</th><th class="yc_table_header">Thue</th>';
        text += '<th class="yc_table_header">Wed</th><th class="yc_table_header">Thu</th><th class="yc_table_header">Fri</th><th class="yc_table_header">Sat</th></tr>';

        // 1. mainDate_firstの曜日を取得
        // 2. mainDateの月末を取得
        // 3. 1stから(2)までを繰り返す
        //     3.1. テンプレートに埋め込んで表示

        let beginDayOfWeek = mainDate_first.getDay();
        let nCell = 1;

        let tmp1 = "";
        tmp1 += "<tr>\n";

        const MAX_DAY_OF_WEEK = 7;

        const NUM_OF_EMPTY_CELL = beginDayOfWeek;

        const MAX_CELL = 42;

        let lastDayInMonth = mainDate_last.getDate();

        let num_of_tail_cell = MAX_CELL - (NUM_OF_EMPTY_CELL + lastDayInMonth);

        for( var i = 0; i < NUM_OF_EMPTY_CELL; i++ ){
            tmp1 += '<td class="yc_unchecked_day">&nbsp;</td>\n';
            if( nCell % MAX_DAY_OF_WEEK == 0 ) tmp1 += "</tr>\n<tr>\n";
            nCell++;
        }

        for( var i = 0; i < (lastDayInMonth); i++ ){
            tmp1 += '<td class="yc_unchecked_day">';
            tmp1 += '<div ondblclick="ycalender_DoubleClick(' + mainDate_first.getFullYear() + ',' + (mainDate_first.getMonth() + 1) + ',' + (i + 1) + ')">';
            tmp1 += (i + 1);
            tmp1 += '</div>';
            tmp1 += '</td>';
            if( nCell % MAX_DAY_OF_WEEK == 0 ){ tmp1 += "</tr>\n<tr>\n"; }
            nCell++;
        }

        for( var i = 0; i < num_of_tail_cell; i++ ){
            tmp1 += '<td class="yc_unchecked_day">&nbsp;</td>\n';
            if( nCell % MAX_DAY_OF_WEEK == 0 ) tmp1 += "</tr>\n<tr>\n";
            nCell++;
        }

        text += tmp1;

        text += "</table>";

        calendar.innerHTML = text;
    }

    onDoubleClicked( date, isChecked ){
        if( this.#event != null ){
            this.#event.onDoubleClicked( date, isChecked );
        }
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
    alert( "ycalender_DoubleClick on " + year + "年" + month + "月" + day + "日" );
}
