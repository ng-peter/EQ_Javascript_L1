// nest loop example

for (var i = 0; i < 10; i++) {
  console.log(i);
  for (var j = 0; j < 10; j++) {
    console.log(j);
  }
}

/*
0
0...9
1
0...9
2
...
9
0...9
*/

// multiplication table
/*
1   2   3   4   5 ... 9
2   4   6   8  10 ...18
3   6   9  12  15 ...27
4   ...
...
9                    81

\t = tab
\n = newline

1
1...9
2
...
9
1...9

*/

var line = "\n";
for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    line += i * j;
  }
  console.log(line);
}

/*
123456789
24681012141618
369121518212427
4812162024283236
51015202530354045
61218243036424854
71421283542495663
81624324048566472
91827364554637281
*/

// v1 solution
// multi-line output with reset every loop
for (var i = 1; i < 10; i++) {
  // reset line
  var line = "";
  for (var j = 1; j < 10; j++) {
    line += i * j + "\t";
  }
  //print line
  console.log(line);
  //line no longer useful
}

// v2 solution
// one single output with lines integrated
var line = "\n";
for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    line += i * j + "\t";
  }
  line += "\n";
}
console.log(line);

// for loop using the length property of an array
var testVar = [1, 2, "peter", 3, "eater", 4, "pizza"];
// testVar[0] (1) - index always starts at 0
// testVar.length (7)

for (var i = 0; i < testVar.length; i++) {
  console.log(testVar[i]);
}

// NEW EXERCISE
// for loop again, this time using an extra variable to get the sum
var bunchOfNumbers = [1, 52, 58, 5, 6, 5, 4];
var sum = 0;

for (var l = 0; l < bunchOfNumbers.length; l++) {
  sum += bunchOfNumbers[l];
}

console.log(sum);

// potentially try:
// add ONLY numbers in my array and output the sum
var testVar = [1, 2, "peter", 3, "eater", 4, "pizza"];

// SOLUTION:
// loop {
// use some conditional evalution
// }
var sum = 0;
for (var i = 0; i < testVar.length; i++) {
  if (parseInt(testVar[i])) {
    sum += testVar[i];
  }
}
