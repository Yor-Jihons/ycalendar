# ycalendar

This JavaScript library to show the calendar which you can double-click the cells, in order to make a schedule.
If you double-click the number (as a date in the calendar), the double-click event raised.
You can also color those cells, if you want.

## 1. Install

1. Put the directory "ycalendar" into your project directly.
2. You can use this with the usage article.

## 2. Usage

Step 1. Put the html tag as a ycalendar (the div tag which id is ycalendar).

```
<div id="ycalendar"></div>
```

Step 2. Include the js-files and the css-files.
```
    <script src="./ycalendar/CheckedDateEx.js"></script>
    <script src="./ycalendar/CheckedDateList.js"></script>
    <script src="./ycalendar/util.js"></script>
    <script src="./ycalendar/TableCreator.js"></script>
    <script src="./ycalendar/YC_Event.js"></script>
    <script src="./ycalendar/YCalendar.js"></script>
    <script src="./ycalendar/ycalendar_main.js"></script>
    <link rel="stylesheet" href="./ycalendar/yc_styles.css" />
```
※ Caution: You definitely need to do as above.

Step 3. You call the method draw (of the window.YCalendars.ycalendar).
Its object is global which has already created.  
If you want a cumstomized ycalendar, you don't neeed this line.
```
window.YCalendars.ycalendar.draw( new Date() );
```

Step 4. If you want to color the cells, you should create an object of the class window.YCalendars.CheckedDateList.
```
var checkedDateList = new window.YCalendars.CheckedDateList();
checkedDateList.add( new window.YCalendars.CheckedDateEx( 2022, 10, 7 ) );
checkedDateList.add( new window.YCalendars.CheckedDateEx( 2022, 10, 8 ) );
```

Step 5. If you want to handle the double-click on the ycalendar, you ought to derive the class window.YCalendars.YC_Event.
Then you pass the object to the method window.YCalendars.ycalendar.setEvent.
```
class YC_Event_Extended extends window.YCalendars.YC_Event{
    onDoubleClicked( year, month, day ){
        alert( "EVENT: ycalender_DoubleClick on " + year + "/" + month + "/" + day );
    }
}

window.YCalendars.ycalendar.setEvent( new YC_Event_Extended() );
```

Step 6. You call the method draw, again.
```
window.YCalendars.ycalendar.draw( new Date( 2022, 10, 1 ), checkedDateList );
```

※ The sample is in the file "./index.html".

## 3. Chanaging the color of the cells

You can chage the color of the cells. If you want to do it, you have to override the css selectors.

The css selectors (and/or properties) you can override is as follows.

- color in h2#yc_title : The text color for the string as a title like "2022/10".
- background-color in h2#yc_title : The background color for the string as a title like "2022/10".
- color in table#yc_table : the text color for the table.
- background-color in table#yc_table : the text color for the table.
- color in th.yc_table_header : the text color for the table header.
- background-color in th.yc_table_header : the text color for the table header.
- color in td.yc_checked_day : the text color for the table as cells which is colored.
- background-color in td.yc_checked_day : the text color for the table as cells which is colored.


## 4. License

This library is released under the MIT License. See also [LICENCE which included](./README.md) or [on GitHub](https://github.com/Yor-Jihons/ycalendar/blob/main/ycalendar/LICENSE).

## 5. Contact

Author: Yor-Jihons  
GitHub: [ycalendar](https://github.com/Yor-Jihons/ycalendar)  
