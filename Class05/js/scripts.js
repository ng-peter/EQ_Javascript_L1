"use strict";

//  TO USE THIS FILE, SIMPLY REMOVE /* AND */
//  FROM EACH EXAMPLE BLOCK TO UNCOMMENT FOR TESTING



/*
// EXAMPLE 01 - value assignment vs refence assignment for objects
var x = 1;
var y = x;
//console.log("-x: "+x+" y: "+y);
y += 2;
//console.log("-x: "+x+" y: "+y);

var point = {x:1,y:1};
//console.log("x: "+point.x+" y: "+point.y);
var point2 =  {x:2,y:2};

// by assigning point2 to the reference of point
// any changes to point2 will also affect point
// you can comment out this line to see difference
point2 = point;
//console.log("--x: "+point.x+" y: "+point.y);
//console.log("--x: "+point2.x+" y: "+point2.y);
point2.x += 10;
//console.log("x: "+point.x+" y: "+point.y);
//console.log("x: "+point2.x+" y: "+point2.y);
*/



/*
// EXAMPLE 02,03,04 works together

// EXAMPLE 02 - a more complex object with spaces in property (must use ""s)
var movie = {
  "movie title": "Three Billboards",
  director: {
    firstname: "Martin",
    surname: "McDonagh"
  },
  year:2017
};

// EXAMPLE 03 - simple changes to values of properties
movie.year = 2018;
movie["movie title"] = "Shape";

// EXAMPLE 04 - look at the difference in console log between array vs object
var numArr = [4,5,6,7,8];
//console.log(movie);
//console.log(numArr);
*/



/*
// EXAMPLE 05 - value of i depending on scope (local vs global)
let i = 0;
var displayMsg = "";
var stringArr = ["bus", "car", "metro"];
for(let i = 0; i < stringArr.length;  i++){
  displayMsg += "I arrived by " + stringArr[i] + "\n";
}
console.log(displayMsg);
console.log(i);
*/



/*
// EXAMPLE 06 - using for / in loop to access properties and values of each
// Note: properties can be directly access with pointi
var points = {x:1,y:2,z:3};
for (let pointi in points){
  console.log(pointi);
  console.log(points[pointi]);
}
*/



/*
// EXAMPLE 07 - using for / of loop to access elements of an array
// Note: properties can be DIRECTLY ACCESSED with n
// No longer need to use sampleArr[n] to access elements
var sampleArr = [55,568,"bus",45,"metro",123,"car"];
for (let n of sampleArr){
  console.log(n);
  // THIS IS NOT NEEDED ANYMORE: (and will result in undefined)
  //console.log(sampleArr[n]);
}
*/



/*
// EXAMPLE 08 - break vs continue
// break will end the loop once conditions are meet from the if()
var text="";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
   }
  text += "The number is " + i + "\n";
}
text += "\n";
// continue will simply skip the rest of the current iteration and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
   }
  text += "The number is " + i + "\n";
}
console.log(text);
*/



/*
// EXAMPLE 09 - multidimensional (2-dimensional) array
let iArr = [];
for (let i = 0; i<10; i++){
  iArr[i] = [];
  for (let j = 0; j<10; j++){
    iArr[i][j] = (i+1)*(j+1);
  }
}
// can view the array literal inside the console to see the data
console.log(iArr);
// to get the 3rd element of the 4th array element within the iArr
console.log(iArr[3][2]);












// nothing here
