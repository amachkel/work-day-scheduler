//Alternate solve using ES5

//displays current day and time
function getCurrentTime() {
  var today = moment();
  $("#currentDay").text(today.format("LLLL"));
}

function setItem() {
  $(".saveBtn").click(function () {
    //stores the value of the save button's sibling class "description". This is the
    //value of the localStorage.setItem(key, value).
    var descriptionEl = $(this).siblings(".description").val();
    //stores the attribute "data-id" of .saveBtn's sibling .description, this is the key.
    var dataId = $(this).siblings(".description").attr("data-id");
    //setItem using the variable names.
    localStorage.setItem(dataId, descriptionEl);
  });
}
function getItem() {
  for (var i = 9; i < 18; i++) {
    $("#hour" + i + " .description").val(localStorage.getItem(i.toString()));
  }
  // $("#hour9 .description").val(localStorage.getItem("9"));
  // $("#hour10 .description").val(localStorage.getItem("10"));
  // $("#hour11 .description").val(localStorage.getItem("11"));
  // $("#hour12 .description").val(localStorage.getItem("12"));
  // $("#hour13 .description").val(localStorage.getItem("13"));
  // $("#hour14 .description").val(localStorage.getItem("14"));
  // $("#hour15 .description").val(localStorage.getItem("15"));
  // $("#hour16 .description").val(localStorage.getItem("16"));
  // $("#hour17 .description").val(localStorage.getItem("17"));
}

function setColor() {
  $(".description").each(function () {
    var dataId = $(this).attr("data-id");
    var currentHour = moment().hour();
    if (dataId < currentHour) {
      $(this).addClass("past");
    } else if (dataId == currentHour) {
      $(this).addClass("present");
    } else $(this).addClass("future");
  });
}
function main() {
  getCurrentTime();
  setItem();
  getItem();
  setColor();
}
main();