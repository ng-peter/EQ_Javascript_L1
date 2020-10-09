var name = "peter";
console.log(123);

// augmented operators

var num1 = 18;
num1 %= num1 + 1;

num1 + 1; // 19
num1 % 19; // 18 % 19 = 18
num1 = 18;

num1 %= num1 % 5;

num1 % 5; // 3
num1 % num1; // 3 % 3 = 0
num1 = 0;

// increment operators

var i = 1; // i = 1
var j = i++;

var j = i; // j = i = 1
i++; // i += 1 = 2

var i = 1; // i = 1
var j;
j += ++i;

// mindfuck examples

var i = 1; // i = 1
var j = ++i; // i = 2, j = 2
j += ++j; // j = jl(2) + ++jr(3) = 5

var i = 1; // i = 1
var j = i++; // i = 2, j = 1
j += j++; // 2

var i = 1; // i = 1
var j = ++i; // i = 2, j = 2
j += j++; // 4
