$(document).ready(function () {
    let currentHour = moment().hour();

//Moment = displays the current day, date, and time
let updateClock = function () {
    $("#presentDate").text(moment().format('dddd, MMMM Do'));
    $("#presentTime").text(moment().format("h:mm a"));
};
updateClock();

//Makes sure the clock is up-to-date
setInterval(updateClock, 1000);







});