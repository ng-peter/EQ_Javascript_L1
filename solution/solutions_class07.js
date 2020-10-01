"use strict";

/*
PART 1:
Write a fucntion that takes a book object as ARGUMENT
and RETURN an output with the price of the book after taxes
- assume taxes is 15%
- do not worry about rounding decimals

After the function is created, use it on the Array books and
output the book name and the price after taxes
*/

function afterTax(book){
  //to be completed
  return book.price * 1.15;
}

var book1 = { name:"Harry Potter and the Sorcerer's Stone", price: 12.73 };
var book2 = { name:"The Lord of the Rings", price: 29.66 };
var book3 = { name:"In Search of Lost Time", price: 21.76 };
var book4 = { name:"A Game of Thrones", price: 11.69 };
var book5 = { name:"Trump: The Art of the Deal", price: 19.79 };

var books = [book1,book2,book3,book4,book5];

for (book of books){
  console.log(book.name + ": " + afterTax(book));
}


/*
PART 2:
Create a fucntion that takes an array as ARGUMENT
and RETURN the TOTAL price of all books inside the array after taxes
(you can reuse afterTax within this function to facilitate the task)
*/

function priceTotalAfterTax(books){
  //to be completed
  let totalPrice = 0;
  for (book of books){
    totalPrice += afterTax(book);
  }
  return totalPrice;
}

/*
PART3:
Revise and generalize the afterTax and priceTotalAfterTax functions
to take TWO ARGUMENTS, one: same as before, the other: a choice of tax values
(tax values predefined for you in the list below)
- if you wish, you can rename these functions with a slightly different name
*/

var taxAB = 5,
  taxBC = 12,
  taxMB = 13,
  taxNB = 15,
  taxNL = 15,
  taxNT = 5,
  taxNS = 15,
  taxNU = 5,
  taxON = 13,
  taxPE = 15,
  taxQC = 14.975,
  taxSK = 11,
  taxYT = 5;



function afterProvTax(book, prov){
  //to be completed

  //this one will work except returns a string
  //return (book.price * (1 + prov/100)).toFixed(2);

  return Math.round(book.price * (1 + prov/100) * 100)/100;
}


function priceTotalAfterProvTax(books, prov){
  //to be completed
  let totalPrice = 0;
  for (book of books){
    totalPrice += afterProvTax(book, prov);
  }
  return totalPrice;
}
































// EOF - END OF FILE
