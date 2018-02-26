"use strict";



/*
Part 1:
create an object for each based on following code and output
create the objects that will allow for the code to run correctly:
*/

// 1.a
// Output:
// 13 (Number, will be in blue in chrome)
console.log(pointa.x + pointa.y);

// 1.b
// Output:
// "13" (String, will be in black in chrome)
console.log(pointb.x + pointb.y);

// 1.c
// Output:
// hello world
console.log(sObject.string1 + " " + sObject.string2);

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




/*
Part 4: traverse an array of objects
for each of the book objects in books array, output the book title and rating
OUTPUT:
Trump: The Art of the Deal: 3.65
The Lord of the Rings: 4.48
Foundation: 4.14
A Game of Thrones: 4.45
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



/*
Part 5: List the books with these attributes:
Worst rated
Best rated
Most page count
For this part, you can create and use as many extra variables as needed
I would recommend starting with 2 extra ratings variables with an initial values
*/






// END OF FILE
