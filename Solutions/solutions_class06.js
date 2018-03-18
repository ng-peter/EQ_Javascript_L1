'use strict';








var strExample = "This is a string and a string is long.";

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
var i = 0;
for (let ele of arrToCopy1){
  copiedArr1[i] = ele;
  i++;
}

// or equivalent:
for(var i=0;i<arrToCopy1.length;i++){
  copiedArr1[i] = arrToCopy1[i];
}
*/


/*
Part 2:
Take the code you did in Part 1 and turn it into a function named:
copyArr(arg1, arg2)
that takes two arguments (that you can name whatever you desire):
- the array to be copied
- an array to copy the elements to
*/


/*
function copyArr(arg1, arg2){
  for(var i=0;i<arg1.length;i++){
    arg2[i] = arg1[i];
  }
}

// arguments could have been named to something more relevant:
function copyArr(toCopy, copied){
  for(var i=0;i<toCopy.length;i++){
    copied[i] = toCopy[i];
  }
}

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


/*
function copyArr(toCopy, copied){
  for(var i=0;i<toCopy.length;i++){
    if(Array.isArray(toCopy[i])){
      copied[i] = [];
      copyArr(toCopy[i], copied[i]);
    }
    else{
      copied[i] = toCopy[i];
    }
  }
}
*/

var arrToCopy2 = [12,3213,123,12,312,35,[12,3213,123,12,312,35,234,645,53],645,53];
var copiedArr2 = [];
//copyArr(arrToCopy2, copiedArr2);

var arrToCopy3 = [12,3213,123,12,312,35,[12,3213,123,12,312,[12,3213,[12,3213,123,12,312,35,234,645,53],12,312,35,234,645,53],234,645,53],645,53];
var copiedArr3 = [];
//copyArr(arrToCopy3, copiedArr3);

console.log(copiedArr2);
console.log(copiedArr3);







/*

// A even more usable version of the function
// which returns an Array object:

function copyArr(origArr){
  let tempArr = [];
  for(var i=0;i<origArr.length;i++){
    if(Array.isArray(origArr[i])){
      tempArr[i] = copyArr(origArr[i]);
    }
    else{
      tempArr[i] = origArr[i];
    }
  }
  return tempArr;
}

copiedArr3 = copyArr(arrToCopy3);

*/





// IN CLASS EXERCISES:


// #1 - Palindrome exercise:
// check if a word is a palindrome or not

var word1 = "asdfghgfdsa";
var word2 = "whatefer";
var word3 = "Madam";

function isPalindrome(word){
  //do some checking:
  //maybe having the word in reverse?
  //temp variable
  var reverse = "";
  //some loop to create the reverse
  for(var i = word.length-1;i>=0;i--){
    reverse += word[i];
  }
  //check!
  //return boolean
  return (reverse.toLowerCase()===word.toLowerCase());
}





// #2 - Ratings array exercise:
// Return an array of the ratings from the books


var book1 = {
  "name":"Harry Potter and the Sorcerer's Stone",
  "author":"J.K. Rowling",
  "page count":320,
  "rating":4.45
};

var book2 = {
  "name":"The Lord of the Rings",
  "author":"J. R. R. Tolkien",
  "page count":1216,
  "rating":4.48
};

var book3 = {
  "name":"In Search of Lost Time",
  "author":"Marcel Proust,",
  "page count":4211,
  "rating":4.34
};

var book4 = {
  "name":"A Game of Thrones",
  "author":"George R.R. Martin",
  "page count":848,
  "rating":4.45
};

var book5 = {
  "name":"Trump: The Art of the Deal",
  "author":"Donald Trump, Tony Schwartz",
  "page count":384,
  "rating":3.65
};

var books = [book1,book2,book3,book4,book5];

// Do a function that returns an Array of ratings from
// the books array

function getRatings(books){
  var tempArr = [];
  for (let i = 0; i < book.length; i++)
  {
    tempArr[i] = book[i].rating;
  }
  /*
  //Another version of the loop
  var i = 0;
  for (let book of books){
    tempArr[i] = book.rating;
    i++;
  }
  */
  return tempArr;
}


var ratings = getRatings(books);








// #3 - character analysis and replacement
// return a string that changes the digits to -
// and turn upper case characters to lowercase

var mixedString = "1a5aaaAA71a";


function fixIt(origStr){
  var tempStr = "0";
  for(let i = 0; i<origStr.length; i++){
    if(isNaN(origStr[i])){
      //NOT a number
      tempStr += origStr[i].toLowerCase();
    } else {
      tempStr += "-";
    }
    console.log(Number.isInteger(origStr[i]));
  }
  return tempStr;
}

var fixedString = fixIt(mixedString);
// will result in: fixedString = "-a-aaaaa--a"


var strExample = "This is a string."
console.log(strExample.toUpperCase());
console.log(strExample.toLowerCase());



















// EOF - END OF FILE
