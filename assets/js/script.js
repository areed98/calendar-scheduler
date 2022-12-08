// Variables declared
var todaysDate = moment().local().format("dddd, MMMM Do, YYYY");
var containerEl = $(".container");

// Set Header Date to Today's Date
var today = $("#currentDay");

today.text(todaysDate);


// save button
$(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

// Clear Button
$(".clearBtn").on("click", function() {

    localStorage.clear();
})

// Create the hour rows
var rowCreator = function() {
        // Get the hour
        var getHour = moment().hour();

        // Loop
        $(".block").each(function () {
            var hourRow = parseInt($(this).attr("id").split("hour")[1]);
            // Change class for the rows, when they are past, present, and future.
            if (hourRow < getHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (hourRow === getHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
}
// Storage values
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
// Function called
rowCreator();


