// Examples for using break; and continue;

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("Number:", i);
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Number:", i);
}

// Example of a multidimensional array (2-d)
let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = [];
  for (let j = 0; j < 10; j++) {
    arr[i][j] = (i + 1) * (j + 1);
  }
}

// START LOOKING AT FUNCTIONS!

// basic function

function customLog(v1, v2) {
  console.log("value1: " + v1 + " value2: " + v2);
}

customLog(123123, 234234);
// customLog( , 234234); // give you an error!
customLog(12387123);
customLog();

// how can we improve handling non-existant v2?
// 0 argument: give me a message to tell me nothing entered
// 1 argument: give me message: value1: whatever-was-entered
// 2 arguments: same as previous
function customLog(v1, v2) {
  //first case: nothing
  if (v1 === undefined) {
    console.warn("nothing was entered");
  } else {
    // we must have at least 1 value set in this else
    if (v2 === undefined) {
      // we have v1 but not v2
      console.log("value1: " + v1);
    } else {
      // if both are present
      console.log("value1: " + v1 + " value2: " + v2);
    }
  }
}

// example with objects in class slides

let testObj1 = { name: "peter", course: "js" };

function logProps(obj) {
  // console.log(obj.name, obj.course);
  for (let prop in obj) {
    console.log(prop, obj[prop]);
  }
  return "done";
}

logProps(testObj1);

// distance example
// distance between point a and b is:
// square root of ( a to b squared for both dimensions)

function calcDist(x1, y1, x2, y2) {
  dx = x2 - x1;
  dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// factorials!!!
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 * 4!
// 4! = 4 x 3 x 2 x 1
// 4! = 4 * 3!

function nFact(n) {
  console.log(n, n - 1);
  if (n == 0) {
    return 1;
  }
  return n * nFact(n - 1);
}

nFact(5);
// returns 120

// JSON stringify and parse

let testObj2 = { name: "dawson", dept: "ctd" };

JSON.stringify(testObj2);

JSON.parse('{ "name": "dawson", "dept": "ctd" }');

// text functions
let testTxt = "HeLlo WoRld!";

//testTxt[0] will give me h

testTxt.charAt(0);

testTxt.toUpperCase();
// "HELLO WORLD!"

testTxt.toLowerCase();
// "hello world!"

// substring functions
testTxt.substring(0, 3);
// "HeL"
testTxt.substring(0);
// "HeLlo WoRld!"
testTxt.substring(3);
// "lo WoRld!"

testTxt.substr(2, 3);
// "Llo"
testTxt.substr(3);
// "lo WoRld!" the no 2nd argument version
// is the same as the substring() version

// to try for next week:
// given an object obj1, create a function that returns a deep copy of obj1
// that you can assign to obj2
// NOTE: remember that if you tried to assign obj2 = obj1
// you will end up with a linked reference to obj1's original content.
// JSON stringify and parse will be needed

let copy1 = {
  name: "object to copy",
  type: {
    format: "text",
    data: "script",
  },
  lang: "javascript",
};

function copyObj() {
  return;
}

let copy2 = copyObj(copy1);
