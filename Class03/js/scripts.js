"use strict";
/*
var promptMsg = "please enter you last name";
var userText = prompt(promptMsg);
alert("Your name is " + userText);
*/
/*
var promptMsg = "please enter a number";
//var userText = prompt(promptMsg);
//userText++; // would not work without parsing
var userText = parseFloat(prompt(promptMsg));
userText++;
userText += 1;
alert("Your number +1 is " + userText);
*/


/*
var promptMsg = "please enter something";
var userText = prompt(promptMsg);
if(parseFloat(userText)){
  userText++;
  userText += 1;
  alert("Your number +2 is " + userText);
}
else {
  alert("You name is " + userText);
}
*/

/*
var promptMsg = "please enter you name";
var userText = prompt(promptMsg);
if(!Number(userText)){
  alert("You name is " + userText);
}
else {
  alert("Your name should not contain digits");
}
*/

/*
var promptMsg = "please enter a number";
var userText = prompt(promptMsg);
if(Number(userText) && userText>50){
  alert("You number is above 50");

  if(userText>70 && userText<100){
    alert("You number is above 70 and below 100");
  }
  if(userText>70 || userText<100){
    alert("You number is above 70 and might be below 100");
  }
}
else {
  alert("NO GOOD");
}
*/

/*
var promptMsg = "please enter a number";
var userText = prompt(promptMsg);
if(Number(userText)){
  if(userText > 70 ^ userText < 100){
    alert("You number is below or equal" +
     "70 or above or equal 100");
  }
  else {
    alert("number is between 71 to 99");
  }
}
else {
  alert("NO GOOD");
}
*/


/*
var promptMsg = "please enter a number";
var displayMsg = "DEFAULT MESSAGE + ";
var userText = prompt(promptMsg);
if(Number(userText)){
  if(userText > 70 ^ userText < 100){
    displayMsg += "Your number is below or equal" +
     "70 or above or equal 100";
  }
  else {
    displayMsg += "Your number is between 71 to 99";
  }
}
else {
  displayMsg += "NO GOOD!!";
}

alert(displayMsg);
*/



var displayMsg = "MESSAGE IS: ";

/*

var switchString;
//switchString = "OK";
//switchString = "1";
//switchString = 1;
//switchString = 123123;
switchString = "whatever";


switch (switchString){
case "OK":
  displayMsg += "OK";
  break;
case "1":
  displayMsg += "string ONE";
  break;
case 1:
  displayMsg += "digit 1";
  break;
default:
  displayMsg += "EVERYTHING ELSE";
  break;
}



switch (new Date().getDay()){
case 1:
  displayMsg += "Monday";
  break;
case 6:
  displayMsg += "Saturday";
  break;
default:
  displayMsg += " which is a Weekend";
  break;
}


*/


var numberPosNeg = 12;


/*
if(numberPosNeg > 0){
  displayMsg = "This is a Positive number";
  numberPosNeg = 0;
}
else {
  displayMsg = "This is a Negative number";
}
*/
displayMsg += numberPosNeg > 0 ? "POSTIVE" : "NEGATIVE";

alert(displayMsg);



//Example of wrong semicolon at the if Line
//if(numberPosNeg = 0);
