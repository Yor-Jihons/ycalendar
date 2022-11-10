let calendar = document.getElementById( "ycalendar" );

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
