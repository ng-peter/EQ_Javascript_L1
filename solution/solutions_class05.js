"use strict";



/*
Part 1:
create an object for each based on following code and output
create the objects that will allow for the code to run correctly:
*/

var pointa = {x:6, y:7};
// 1.a
// Output:
// 13 (Number, will be in blue in chrome)
console.log(pointa.x + pointa.y);

var pointb = {x:"1",y:"3"};
// 1.b
// Output:
// "13" (String, will be in black in chrome)
console.log(pointb.x + pointb.y);

var sObject = {string1:"hello",string2:"world"};
// 1.c
// Output:
// hello world
console.log(sObject.string1 + " " + sObject.string2);

var actor = {
  "first name": "Samuel",
  "middle name": "L",
  "last name": "Jackson",
}
// 1.d
// Output:
// Samuel L Jackson
console.log(actor["first name"] + " " + actor["middle name"] +  " " + actor["last name"]);



/*
Part 2: traverse an array with of loop
given the following array, output only the non-Number elements using console.log
OUTPUT:
bus
metro
car
*/
var mixedArr = [55,568,"bus",45,"metro",123,"car"];
for (let txt of mixedArr){
  if(isNaN(txt))
    console.log(txt);
}
// Equivalent to:
for (let i=0; i<mixedArr.length;i++){
  if (isNaN(mixedArr[i]))
    console.log(mixedArr[i]);
}



/*
Part 3: traverse an object with in loop
given the following object, output all properties and values using console.log
OUTPUT:
title: The Greatest Showman: Original Motion Picture Soundtrack
release date: December 8, 2017
length: 39:51
label: Atlantic Records
movie: The Greatest Showman
recorded: 2017
genre: Pop music
*/
var cd = {
  title: "The Greatest Showman: Original Motion Picture Soundtrack",
  "release date": "December 8, 2017",
  length: "39:51",
  label: "Atlantic Records",
  movie: "The Greatest Showman",
  recorded: 2017,
  genre: "Pop music"
}
for (let info in cd){
  console.log(info + ": " + cd[info]);
}



/*
Part 4: traverse an array of objects
for each of the book objects in books array, output the book title and rating
OUTPUT:
Harry Potter and the Sorcerer's Stone: 4.45
The Lord of the Rings: 4.48
In Search of Lost Time: 4.34
A Game of Thrones: 4.45
Trump: The Art of the Deal: 3.65
*/

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

for (let book of books){
  console.log(book.name + ": " + book.rating);
}

/*
Part 5: List the books with these attributes:
Worst rated
Best rated
Most page count
For this part, you can create and use as many extra variables as needed
I would recommend starting with 2 extra ratings variables with an initial values
*/


// PREFERED SOLUTION - Can handle sparse Array with empty elements
// typeof to check if book is empty (with !== 'undefined')

let currentBestRating = 0;
let currentWorstRating = 5;
let currentMostPageCount = 0;
let bestBook;
let worstBook;
let mostPagesBook;
for (let book of books){
  if(typeof book !== 'undefined'){
    if (book.rating > currentBestRating){
      currentBestRating = book.rating;
      bestBook = book;
    }
    if (book.rating < currentWorstRating){
      currentWorstRating = book.rating;
      worstBook = book;
    }
    if (book["page count"] > currentMostPageCount){
      currentMostPageCount = book["page count"];
      mostPagesBook = book;
    }
  }
}

console.log(bestBook.name + " is the best book with rating of: " +
  bestBook.rating);
console.log(worstBook.name + " is the wrost book with rating of: " +
  worstBook.rating);
console.log(mostPagesBook.name + " is the book with most pages of: " +
  mostPagesBook.rating);


/* 

// ALTERNATE SOLUTION - by setting the book to the first elemenet
// POSSIBLE ISSUE: if Array is sparse, and have no element in books[0]

let bestBook = books[0];
let worstBook = books[0];
let mostPagesBook = books[0];
for (let book of books){

  if (book.rating > bestBook.rating){
    bestBook = book;
  }


  if (book.rating < worstBook.rating){
    worstBook = book;
  }


  if (book["page count"] > mostPagesBook["page count"]){
    mostPagesBook = book;
  }

}
console.log(bestBook.name + " is the best book with rating of: " +
  bestBook.rating);
console.log(worstBook.name + " is the wrost book with rating of: " +
  worstBook.rating);
console.log(mostPagesBook.name + " is the book with most pages of: " +
  mostPagesBook.rating);
  
*/





// END OF FILE
