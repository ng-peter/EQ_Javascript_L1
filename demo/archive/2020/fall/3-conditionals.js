var i;
i = prompt("please enter a number:");
alert("You value +1 is: " + parseInt(i) + 1);

var i;
i = parseInt(prompt("please enter a number:"));
alert("You value +1 is: " + ++i);

// baisc if / else
var a = 0;

if (a > 0) {
  result = "positive";
} else {
  result = "non-positive";
}

console.log(result);

// basic switch

var expr = "a";
switch (expr) {
  case "a":
    console.log("a");
    break;
  case "b":
  case "c":
    console.log("b or c");
    break;
  default:
    console.log("Sorry, no matches");
}

// not !

var a = 3;

if (a != 12) {
  a *= 2;
}

console.log(a);

//  Example of using conditionals (if) to check
//  if input is strings or numbers and output accordingly
var userText = prompt("please enter something");
if (parseInt(userText)) {
  console.log("numbers");
} else {
  console.log("strings");
}

var userText = prompt("please enter something");
if (parseInt(userText)) {
  console.log("numbers" + userText);
} else {
  console.log("strings" + userText);
}

//  EXAMPLE 04
//  Example of using negation with a conditional
var promptMsg = "please enter you name";
var userText = prompt(promptMsg);
//  if userText not(is a number), meaning: is not a number
if (!parseInt(userText)) {
  alert("You name is " + userText);
} else {
  alert("Your name should not contain digits");
}

//  EXAMPLE 05
//  Example of using && (AND) and || (OR) logical operators
var promptMsg = "please enter a number";
var userText = prompt(promptMsg);
if (Number(userText) && userText > 50) {
  // anything inside this section is 51+

  alert("Your number is bigger than 50");
  if (userText > 70 && userText < 100) {
    // between 71 && 99
    alert("Your number is above 70 and below 100");
  }
  if (userText > 70 || userText < 100) {
    // really everything (almost) 51 +
    alert("Your number is going to match all numbers");
  }
  if ((userText > 70) ^ (userText < 100)) {
    // 51 - 70 or 100 +
    alert("Your number is anything 70 or below and 100 and above");
  }
} else {
  // 50 and below or not a number
  alert("NO GOOD");
}

//  Example of using dates to see how specificity works

var displayMsg = "DAY IS: ";

// new Date().getDay() will give us 0 - 6 (0 is sunday)

// 1 - 5, week, else weekend
if (new Date().getDay() > 0) {
  // not sunday
  if (new Day().getDay() < 6) {
    // weekday
  } else {
    // saturday
  }
} else {
  // sunday
}

if (new Date().getDay() > 0 && new Day().getDay() < 6) {
  // week day
} else {
  // weekend
}

switch (new Date().getDay()) {
  // weekend
  case 0:
  case 6:
    // weekend
    console.log("weekend");
    break;

  default:
    // week day
    console.log("weekday");
}

var num = 10;
var sign;
// ?? find out positive or negative with trenary operator
sign = num > 0 ? "positive" : "negative";
