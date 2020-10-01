"use strict";

//  TO USE THIS FILE, SIMPLY REMOVE /* AND */
//  FROM EACH EXAMPLE BLOCK TO UNCOMMENT FOR TESTING



var displayMsg = "";



/*
// simple while loop from 1 to 10
var i = 0;
while(i<10){
  displayMsg += i;
  i++;
}

*/



/*
// same while loop using do/while
var i = 0;
do{
  displayMsg += i;
  i++;
}while(i < 10);

*/



/*
// simple for loop
for(var j = 0; j < 10; j++ ){
  displayMsg += j;
}

*/



/*
// nested loops, one loop within another
for(var j = 0; j < 10; j++ ){
  for(var k = 0; k < 10; k++ ){
    displayMsg += j*k + "\t";
  }
  displayMsg += "\n";
}

*/



/*
// for loop using the length property of an array
var testVar = [1,2,"peter",3,"eater",4,"pizza"];

for(var k = 0; k < testVar.length; k++ ){
  displayMsg += "k = " + k +
    " array[var]: " + testVar[k] + " \n";
}

*/



/*
// for loop again, this time using an extra variable to get the sum
var bunchOfNumbers = [1,52,58,5,6,5,4];
var sum = 0;
for(var l = 0; l < bunchOfNumbers.length; l++ ){
  sum += bunchOfNumbers[l];
}
displayMsg = sum;
*/



alert(displayMsg);


// END OF FILE
