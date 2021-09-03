$(document).ready(function () {
  $("#six .description").val(localStorage.getItem("6"));
  $("#seven .description").val(localStorage.getItem("7"));
  $("#eight .description").val(localStorage.getItem("8"));
  $("#nine .description").val(localStorage.getItem("9"));
  $("#ten .description").val(localStorage.getItem("10"));
  $("#eleven .description").val(localStorage.getItem("11"));
  $("#twelve .description").val(localStorage.getItem("12"));
  $("#one .description").val(localStorage.getItem("1"));
  $("#two .description").val(localStorage.getItem("2"));
  $("#three .description").val(localStorage.getItem("3"));
  $("#four .description").val(localStorage.getItem("4"));
  $("#five .description").val(localStorage.getItem("5"));

  function saveTask() {
    alert("saved");
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("data-time");
    // save in localStorage
    localStorage.setItem(time, value);
  }

  //user clicks save button
  $(".saveBtn").on("click", saveTask);
  function updateRowColor() {
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  //use interval to update row color
  //color rows based on the time of the day
  updateRowColor();

  //load data from local storage and put it into the correct row
  // #hour9 textarea to value of localstorage key number "hour-9"
  // #hour10 textarea to value of localstorage key number "hour-10"
  //display current date - moment (get document by id)
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
