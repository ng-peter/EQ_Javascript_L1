// from previous class, think about palindromes with spaces (ANY AMOUNT OF SPACES)
// 100% you will need to use continue; or break;
// the two for loops for just suggestions

var word5 = "              Ka    y               Ak        ";
var word6 = "asdasdasdasdasd";
var word7 = "taco cat";

function isPalindrome4(wordToCompare) {
  wordToCompare = wordToCompare.toLowerCase();
  let j = wordToCompare.length - 1;
  let compareBoolean;
  for (let i = 0; i < wordToCompare.length; i++) {
    if (wordToCompare[i] === " ") {
      continue;
    }
    while (wordToCompare[j] === " ") {
      j--;
    }
    console.log(wordToCompare[i], i);
    console.log(wordToCompare[j], j);
    compareBoolean = wordToCompare[i] === wordToCompare[j];
    j--;
    if (!compareBoolean) break;
  }
  return compareBoolean;
}

// Ratings array exercise:
// Return an array of the ratings from the books

var book1 = {
  name: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  "page count": 320,
  rating: 4.45,
};

var book2 = {
  name: "The Lord of the Rings",
  author: "J. R. R. Tolkien",
  "page count": 1216,
  rating: 4.48,
};

var book3 = {
  name: "In Search of Lost Time",
  author: "Marcel Proust,",
  "page count": 4211,
  rating: 4.34,
};

var book4 = {
  name: "A Game of Thrones",
  author: "George R.R. Martin",
  "page count": 848,
  rating: 4.45,
};

var book5 = {
  name: "Trump: The Art of the Deal",
  author: "Donald Trump, Tony Schwartz",
  "page count": 384,
  rating: 3.65,
};

var books = [book1, book2, book3, book4, book5];

// Do a function that returns an Array of ratings from
// the books array

// shell of function
function getRatings(books) {
  let ratingsArr = [];
  for (let i = 0; i < books.length; i++) {
    ratingsArr[i] = books[i].rating;
  }
  return ratingsArr;
}

var ratings = getRatings(books);

// character analysis and replacement
// return a string that changes the digits to dashes "-"
// and turn upper case characters to lowercase

var mixedString = "1a5aaaAA71a";

function fixIt(stringToFix) {
  let tempString = "";

  for (let i = 0; i < stringToFix.length; i++) {
    // check if a number, replace with -
    if (!isNaN(stringToFix[i])) {
      tempString += "-";
    } else {
      // lower case
      tempString += stringToFix[i].toLowerCase();
    }
  }

  return tempString;
}

var fixedString = fixIt(mixedString);
// will result in: fixedString = "-a-aaaaa--a"

// self-executing functions (always anonymous)
// related to scoping

(function () {
  console.log("hi!");
})();

// arrow functions

const add = function (num1, num2) {
  return num1 + num2;
};

const add2 = (num1, num2) => num1 + num2;

const plusOne = (num) => num + 1;

const plusTwo = (num) => plusOne(num + 1);

const printOut = () => {
  console.log("something");
};
