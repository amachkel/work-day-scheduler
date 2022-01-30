const today = moment();
$("#currentDay").text(today.format('LLLL'));

//if time has passed, make it gray; else if time is
//present, make it red. else, make it green.
//for loop comparing momentjs time with hour in <span>?

const currentHour = moment();
console.log(currentHour.format('LT'));
let hourEl = document.getElementsByClassName("hour");
determineColor = () => {
//need to convert string to number to compare hourEl and current hour
if (currentHour > hourEl)
}

//select element by class
//$('.className')
//select element by ID
//$('#idName')