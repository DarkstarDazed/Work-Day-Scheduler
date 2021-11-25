$(document).ready(function() {
            $('.saveBtn').on('click', function() {
                var value = $(this).siblings(".description").val()
                var time = $(this).parent().attr("id")

                console.log(value, time);
                localStorage.setItem(time, value);
            });