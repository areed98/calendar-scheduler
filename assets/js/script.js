// Variables declared
var tasks = [];
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
var containerEl = $(".container");

// Set Header Date to Today's Date
var today = $("#currentDay");

today.text(todaysDate);

// Create the hour rows

var rowCreator = function() {
        // Get the hour
        var getHour = moment().format();

        // For loop
        $(containerEl).each(function () {
            var hourRow = parseInt($(this).attr("id").split("hour")[1]);

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

rowCreator();


