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