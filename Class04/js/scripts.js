"use strict";

//  TO USE THIS FILE, SIMPLY REMOVE /* AND */
//  FROM EACH EXAMPLE BLOCK TO UNCOMMENT FOR TESTING

/*
var displayMsg = "";

var i = 0;
while(i<10){
  displayMsg += i;
  i++;
}

alert(displayMsg);
*/


/*
var displayMsg = "";

var i = 0;
do{
  displayMsg += i;
  i++;
}while(i < 10);

alert(displayMsg);
*/

/*
var displayMsg = "";

for(var j = 0; j < 10; j++ ){
  displayMsg += j;
}

alert(displayMsg);
*/


/*
var displayMsg = "";

for(var j = 0; j < 10; j++ ){
  for(var k = 0; k < 10; k++ ){
    displayMsg += j*k + "\t";
  }
  displayMsg += "\n";
}

alert(displayMsg);
*/


/*
var displayMsg = "";
var testVar = [1,2,"peter",3,"eater",4,"pizza"];
//testVar[0]
//testVar.length
//for(var k = 0; k < 10; k++ ){

for(var k = 0; k < testVar.length; k++ ){
  displayMsg += "k = " + k +
    " array[var]: " + testVar[k] + " \n";
}
alert(displayMsg);
*/


var bunchOfNumbers = [1,52,58,5,6,5,4];
var sum = 0;
for(var l = 0; l < bunchOfNumbers.length; l++ ){
  sum += bunchOfNumbers[l];
}
alert(sum);
