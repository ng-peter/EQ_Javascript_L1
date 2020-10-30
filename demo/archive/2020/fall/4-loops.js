// 1 - 10 output

var i = 0;
var result;

while (i < 10) {
  result = ++i;
  console.log(result);
}

var i = 0;

while (i < 10) {
  console.log(++i);
}

// if i wanted 0 - 9, then I can just do i++

var i = 0;

while (i < 10) {
  console.log(i++);
}

// do ... while () version
// 1 - 10

var i = 0;

do {
  console.log(++i);
} while (i < 10);

// 0 - 9

var i = 0;

do {
  console.log(i++);
} while (i < 10);

// deeper look

var i = 0;
// 0 1 2 3 4 5 6 7 8 9
do {
  console.log(i);
  i++;
} while (i < 10);
console.log(i);

// 1 2 3 4 5 6 7 8 9 10
do {
  i++;
  console.log(i);
} while (i < 10);
console.log(i);

// if we start with 0 and our condition
// is n, then we run n times and values
// if using i++ at the end, we will get:
// 0 to n-1
// if using i++ at the start, we will get:
// 1 to n

// for loop 1 - 10

// bogdan, l-a
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// neda, nicola, sara
for (var i = 0; i < 11; i++) {
  console.log(i);
}
// catherine, miguel
for (var i = 1; i < 10; ++i) {
  console.log(i);
}

// TRUE ANSWERS BELOW!
for (var i = 1; i < 11; ++i) {
  console.log(i);
}
for (var i = 1; i < 11; i++) {
  console.log(i);
}

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 0 - 9 (n-1)
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// 1 - 10, output is always +1
for (var i = 0; i < 10; i++) {
  console.log(i + 1);
}

// Do a for loop that will print: 9 to 0

// for (var i = 9; ) {

// }

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

// i++
// ++i
// i--
// --i

for (var i = 9; i > -1; i--) {
  console.log(i);
}

for (var i = 10; i > 0; ) {
  console.log(--i);
}

var i = 10;
for (; i > 0; ) {
  console.log(--i);
}
