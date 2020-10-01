"use strict";

//  TO USE THIS FILE, SIMPLY REMOVE /* AND */
//  FROM EACH EXAMPLE BLOCK TO UNCOMMENT FOR TESTING



/*
//  EXAMPLE 01
//  Example of setting variables to a static message
//  and from input using prompt()

var promptMsg = "please enter you last name";
var userText = prompt(promptMsg);
alert("Your name is " + userText);
*/



/*
//  EXAMPLE 02
//  Example of using user input with and without parsing

var promptMsg = "please enter a number";
//  Way 1: just prompt without parsing, numbers will not work
//  since input is considered as text by javascript engine
//var userText = prompt(promptMsg);
//userText++; // would not work without parsing
//  Way 2: Improved, parsing will work if starting with numbers
var userText = parseFloat(prompt(promptMsg));
//  increment using ++ (autoincrement by 1) and += (add and assign)
userText++;
userText += 1;
alert("Your number +1 is " + userText);
*/



/*
//  EXAMPLE 03
//  Example of using conditionals (if) to check
//  if input is strings or numbers and output accordingly

var promptMsg = "please enter something";
var userText = prompt(promptMsg);
if(parseFloat(userText)){
  userText++;
  userText += 1;
  alert("Your entered number +2 is " + userText);
}
else {
  alert("Your entered text is " + userText);
}
*/



/*
//  EXAMPLE 04
//  Example of using negation with a conditional

var promptMsg = "please enter you name";
var userText = prompt(promptMsg);
//  if userText not(is a number), meaning: is not a number
if(!Number(userText)){
  alert("You name is " + userText);
}
else {
  alert("Your name should not contain digits");
}
*/




/*
//  EXAMPLE 05
//  Example of using && (AND) and || (OR) logical operators

var promptMsg = "please enter a number";
var userText = prompt(promptMsg);
//  using AND for both conditions to be true
if(Number(userText) && userText>50){
  alert("You number is above 50");
  //  additional AND conditions
  if(userText>70 && userText<100){
    alert("You number is above 70 and below 100");
  }
  //  using OR for if only one or both conditions to be true
  if(userText>70 || userText<100){
    alert("You number is above 70 and might be below 100");
  }
}
else {
  alert("NO GOOD");
}
*/



/*
//  EXAMPLE 06
//  Example of using ^ (XOR, exclusive or) conditional operator

var promptMsg = "please enter a number";
var userText = prompt(promptMsg);
if(Number(userText)){
  //  XOR - Excusive OR, meaning true ONLY if one and only one
  //  of the two conditions are true, and not both
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
//  EXAMPLE 07
//  Improved version of EXAMPLE 06, where the message is only
//  displayed at the very end and messages are modular or added
//  to a default message using += to concatenate and assign

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



/*
//  EXAMPLE 08
//  Example of using switch, case, break and default

//  Setting up test variables, uncomment and try each one
var displayMsg = "MESSAGE IS: ";
var switchString;
//switchString = "OK";
//switchString = "1";
//switchString = 1;
//switchString = 123123;
switchString = "whatever";

//  Note the string "1" and the number 1 can be detected
//  as different matches
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
*/



/*
//  EXAMPLE 09
//  Example of using dates to see how specificity works

var displayMsg = "MESSAGE IS: ";
//  Note the more specific case 6 (for saturday)
//  is matched as the more important match
//  You can try to add in or change other cases to test
//  TO TRY: remove a break; statement and see what happens
switch (new Date().getDay()){
case 1:
  displayMsg += "Monday";
  break;
case 6:
  displayMsg += "Saturday";
  break;
default:
  displayMsg += " DEFAULT WEEK(END) MESSAGE";
  break;
}
*/



/*
//  EXAMPLE 10
//  Example of using dates to see how specificity works

var displayMsg = "MESSAGE IS: ";
//  TO TRY: change this variable to negative
var numberPosNeg = -12;
//  The following is same as using:
//  if(numberPosNeg > 0){ displayMsg += "POSTIVE"; }
//  else{ displayMsg += "NEGATIVE"; }
displayMsg += numberPosNeg > 0 ? "POSTIVE" : "NEGATIVE";
alert(displayMsg);
*/



/*
//  EXAMPLE 11 (BONUS)
//  Example of two common mistakes:
//  - using = (assignment operator) rather than == or ===
//  - wrong semicolon at the if Line
//  Everything that follows even if in brackets will do nothing
//  since the if statement will run ; effectively doing nothing
//  Both errors will run correctly, but results till be unexpected
var numberPosNeg = -12;
if(numberPosNeg = 0);
*/
