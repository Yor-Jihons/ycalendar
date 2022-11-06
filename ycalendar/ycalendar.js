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
