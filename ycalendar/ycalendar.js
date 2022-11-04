let calendar = document.getElementById( "ycalendar" );

/*
let text = "";
text = "<h2><a onclick='PrevButton_Click(2022,1)'>◀</a> 2022/2 <a onclick='NextButton_Click(2022,3)'>▶</a></h2>";
calendar.innerHTML = text;
*/

function prevButton_Click( year, month ){
    alert( "PrevButton_Click" + year + "年" + month + "月" );
    // TODO: 先月に移動
}

function nextButton_Click( year, month ){
    alert( "NextButton_Click" + year + "年" + month + "月" );
    // TODO: 翌月に移動
}

function ycalender_DoubleClick( year, month, day ){
    alert( "ycalender_DoubleClick on " + year + "年" + month + "月" + day + "日" );
}
