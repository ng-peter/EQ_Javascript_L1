// sample json object - very complex, look below for simpler form

var testObj = {
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
        created: "2015-05-22T14:56:29.000Z",
        updated: "2015-05-22T14:56:28.000Z",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "42",
      attributes: {
        name: "John",
        age: 80,
        gender: "male",
      },
    },
  ],
};

// objects to try

var empty = {}; // An object with no properties
var point = { x: 0, y: 0 }; // Two properties
var point2 = { x: point.x, y: point.y + 1 }; // More complex values
var movie = {
  "movie title": "Three Billboards", // Property names include spaces,
  director: {
    // The value of this property is
    firstname: "Martin", // itself an object. Note that
    surname: "McDonagh", // these property names are unquoted.
  },
};

var o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.

// example of a super duper complex object
var car1 = {
  brand: "hummer",
  color: "metallic red",
  // engine: 'v6',
  engine: {
    type: "electric",
    power: "battery",
  },
  mileage: 300,
};

var car2 = {
  brand: "honda",
  color: "purple",
  engine: {
    type: "gaz",
    power: "oil",
  },
  mileage: 500,
};

var electric = {
  type: "electric",
  power: "battery",
};

var gaz = {
  type: "gaz",
  power: "oil",
};

var car3 = {
  brand: "honda",
  color: "green",
  engine: gaz,
  mileage: 500,
};

// explore relationship between object and array

var testArr = [345, 2456, 456, 4, 565687, 3];

var arrayObj = {
  0: 345,
  1: 2456,
  2: 456,
  3: 4,
  4: 565678,
  5: 3,
};

// querying & setting values of properties

var movie = {
  "movie title": "Three Billboards", // Property names include spaces,
  director: {
    // The value of this property is
    firstname: "Martin", // itself an object. Note that
    surname: "McDonagh", // these property names are unquoted.
  },
};

var title = movie["movie title"]; // Get the "title" property of the movie.
var name = movie.director.surname; // Get the "surname" property of the director.

movie.year = 2017; // Create a "year" property of movie.
movie["movie title"] = "Shape of Water"; // Set the "movie title" property.

// ES6 way to declare variables: const & let
// any legacy systems should use var for maximum compability

const pi = 3.14;

// let is scoped

var x = 1;
if (x === 1) {
  console.log(x); // expected output: 1
  var x = 2;
  console.log(x); // expected output: 2
}
console.log(x); // expected output: 2

// globally setting x to value of 1
let x = 1;
console.log(x); // expected output: 1
if (x === 1) {
  // setting x to value of 2 INSIDE this conditional
  let x = 2;
  console.log(x); // expected output: 2
}
console.log(x); // expected output: 1

// weird example of a nested loop

for (let i = 0; i < 10; i++) {
  console.log("before inner loop:", i);
  for (let i = 0; i < 10; i++) {
    console.log("inner loop:", i);
  }
  console.log("after inner loop:", i);
}

// For ... in loop - USED FOR OBJECTS ONLY

let str = "";
let obj1 = { a: 1, b: 2, c: 3 };
for (let prop in obj1) {
  console.log(prop);
  console.log(obj1[prop]);
}
console.log(str); // expected output: "123"

// remember this:
var i = 3;
var arr = [123, 123, 123, 123, 3213, 12312, 3];
console.log(arr[i]); // i is evaluated as [3]
console.log(arr[i + 2]); // i+2 is evaluated as [5]

// For ... of loop - FOR ARRAYS (and strings sort of)
let foo = [3, 4, 5, 6];
for (let e of foo) {
  console.log(e);
}

let foo = [3, 4, 5, 6];
for (let e of foo) {
  if (e === 4) {
    console.log("I have 4 here!");
  }
  console.log(e);
  console.log(e + 10);
}
//this is equivalent
for (let i = 0; 0 < foo.length; i++) {
  console.log(foo[i]);
  console.log(foo[i] + 10);
}

// something to thing about
// can we swap in / of
// and which will work
let obj1 = { a: 1, b: 2, c: 3 };
for (let prop in obj1) {
  console.log(prop);
}
let foo = [3, 4, 5, 6];
for (let e of foo) {
  console.log(e);
}

// TO TRY FOR NEXT CLASS:
// add ONLY numbers in my array and output the sum
// same exercise as at the beginning of class
// except using the new for loops
var testVar = [1, 2, "peter", 3, "eater", 4, "pizza"];

// SOLUTION

let sum = 0;
for (let n of testVar) {
  //console.log(n);
  if (parseInt(n)) {
    sum += n;
  }
}
console.log(sum);
