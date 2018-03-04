"use strict";








var strExample = "This is a string and a string is long."

console.log(strExample);

console.log(strExample.toUpperCase());
console.log(strExample.toLowerCase());

console.log(strExample.substr(3));
console.log(strExample.substr(3, 8));

console.log(strExample.substring(23));
console.log(strExample.substring(23, 31));






/*
For Arrays, we know that from previous classes, when you have:
var arrayA = [llist of values]
var arrayB = arrayA
arrayB is actually a reference to arrayA, it is therefore not a deep copy.

For this assignment, the first exercise will involve doing
a deep copy function for copying Arrays.

This first exercise will be broken down in parts to help you facilitate
the steps necessary for such a complex function.
*/

/*
Part 1:
Given the Array arrToCopy1 (that contains only numbers), copy the elements
to the empty Array copiedArr.
*/

var arrToCopy1 = [12,3213,123,12,312,35,234,645,53];
var copiedArr1 = [];



/*
Part 2:
Take the code you did in Part 1 and turn it into a function named:
copyArr(arg1, arg2)
that takes two arguments (that you can name whatever you desire):
- the array to be copied
- an array to copy the elements to
*/


//uncomment once function is completed:
//copyArr(arrToCopy1, copiedArr1);

console.log(copiedArr1);



/*
Part 3:
Now take into account an array that contains an array in itself
HINT: since you already have a function that copies Arrays, perhaps reuse it?

Try using arrToCopy2 first, then arrToCopy3 once you are confident it works
*/

var arrToCopy2 = [12,3213,123,12,312,35,[12,3213,123,12,312,35,234,645,53],645,53];
var copiedArr2 = [];
//copyArr(arrToCopy2, copiedArr2);

var arrToCopy3 = [12,3213,123,12,312,35,[12,3213,123,12,312,[12,3213,[12,3213,123,12,312,35,234,645,53],12,312,35,234,645,53],234,645,53],645,53];
var copiedArr3 = [];
//copyArr(arrToCopy3, copiedArr3);

console.log(copiedArr2);
console.log(copiedArr3);
































// EOF - END OF FILE
