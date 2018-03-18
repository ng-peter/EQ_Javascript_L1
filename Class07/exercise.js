'use strict';





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
