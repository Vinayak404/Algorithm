/********************************************************************************************************************
* @Execution : default node : cmd> DayOfWeek.js
* @Purpose : to study the functionals working.
* @description :To find the day of the week for the given date using Gregorian calendar.
* @overview : Returns the day of the week .
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const Weekday = require('../Utility/Utility')
let input = require('readline-sync')
let d = parseInt(input.question("Enter the day:"));
let m = parseInt(input.question("Enter the month:"));
let y = parseInt(input.question("Enter the year:"));
if (0 < d <= 31 && 0 < m <= 12 && 0 < y <= 9999) {
    Weekday.dayOfWeek(d, m, y)
}