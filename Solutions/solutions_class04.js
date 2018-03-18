"use strict";

/*
SOLUTIONS FOR CLASS 4 EXERCISES
TO SEE SOLUTIONS, MAKE SURE TO OPEN THE CONSOLE
SINCE I USED console.log AT THE END OF THE FILE
*/



// ! Important to set displayMsg to "" (empty string) or else will get undefined
var displayMsg = "";
var stringArr = ["bus", "car", "metro"];
var numArr = [4,5,6,7,8];
var testArr = [55,568,"bus",45,"metro",123,"car"];
var mixedArr = [55,568,"bus",45,"metro",123,"car"];



/*
// Part 1
for(var i = 0; i < stringArr.length;  i++){
  displayMsg += "I arrived by" + stringArr[i] + "\n";
}
*/



/*
// Part 2 - can be done with 2 styles
// Style 1: using a squared variable
// Style 2: using *= to set the multiplication assignment
// ! COMMENT OUT ONE OF THE TWO WAYS
for(var i = 0; i < numArr.length;  i++){
  var squared = numArr[i] * numArr[i];
  displayMsg += "Square of " + numArr[i] + " is " + squared + "\n";
  numArr[i] = squared;
  //OR
  displayMsg += "Square of " + numArr[i] + " is " + numArr[i] * numArr[i] + "\n";
  numArr[i] *= numArr[i];
}
*/



/*
// Part 3
for(var i = 0; k < testArr.length; i++ ){
  if(isNaN(testArr[i]))
    displayMsg += testArr[i] + " is a string \n";
  else
    displayMsg += testArr[i] + " is a number \n";
}
*/




/*
// Part 4
for(var i = 0; i < testArr.length;  i++){
  if(isNaN(testArr[i])){
    //do whatever a text would do
    displayMsg += "I arrived by" + testArr[i] + "\n";
  }
  else {
    //numbers
    var squared = testArr[i] * testArr[i];
    displayMsg += "Square of " + testArr[i] +
      " is " + squared + "\n";
    testArr[i] = squared;
  }

}
*/



/*
// Part 5
// This do/while loop will ensure the user actually entered at least 1 keystroke
let userInput;
do{
  userInput = prompt("ask for a number");
} while(userInput.length === 0);

if(isNaN(userInput)){
  //do whatever a text would do
  displayMsg += "I arrived by" + userInput + "\n";
}
else {
  //numbers
  squared = userInput*userInput;
  displayMsg += "Square of " + userInput +
    " is " + squared + "\n";
}
*/



//OUTPUT FROM CONSOLE
console.log(displayMsg);



// ! Ignore this comment, nothing here, just to pad the file with spaces
