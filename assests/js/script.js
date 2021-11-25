// function to check the time and display appropriate color 
function timeCheck() {
    var currentHour = moment().hours();

    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
        if (hourBlock < currentHour) {
            $(this).addClass("past")
        } else if (hourBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass("present");
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }
    })
}

timeCheck();

// variable that checks time every 15 seconds and writes that time to page
var timeInterval = setInterval(timeCheck, 15000);
$("#currentDay").text(moment().format('dddd, MMM Do hh:mm a'));