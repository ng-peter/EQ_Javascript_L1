// Problem from last week's class:

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

function copyObj(origObj) {
  //   let copy2 = JSON.parse(JSON.stringify(origObj));
  //   return copy2;
  return JSON.parse(JSON.stringify(origObj));
}

let copy2 = copyObj(copy1);

let copy3 = {
  name: "object to copy",
  type: copy1.type,
  lang: "javascript",
};

let arr1 = [
  2143,
  1234,
  123,
  4,
  2,
  134,
  1234,
  [1234, 1234, 123, 4, 2314, 1234],
  [234, 234, 234, 23, 4234],
  2344,
];

function copyArr(originalArray) {
  let tempArr = [];
  for (let i = 0; i < originalArray.length; i++) {
    tempArr[i] = originalArray[i];
  }
  return tempArr;
}

let arr2 = copyArr(arr1);

function copyArrFix(originalArray) {
  // temp arr to be returned
  let tempArr = [];
  // loop thru original array
  for (let i = 0; i < originalArray.length; i++) {
    // check elements in original if each is array or simple copy
    if (Array.isArray(originalArray[i])) {
      // if array, have to create deep copy to be returned
      tempArr[i] = copyArrFix(originalArray[i]);
    } else {
      // if non-array, do a simply copy by value
      tempArr[i] = originalArray[i];
    }
  }
  // return temp copy with everything!
  return tempArr;
}

let arr3 = copyArrFix(arr2);

// equivalent for copying an obj

function copyObj(originalObj) {
  let tempObj = {};
  for (let prop in originalObj) {
    if (typeof originalObj[prop] === "object") {
      tempObj[prop] = copyObj(originalObj[prop]);
      // console.log(originalObj[prop]);
    } else {
      tempObj[prop] = originalObj[prop];
      // console.log(originalObj[prop]);
    }
  }
  return tempObj;
}

let copy4 = copyObj(copy3);

// IN CLASS EXERCISES:

// #1 - Palindrome exercise:
// check if a word is a palindrome or not

var word0 = "kayak";
var word1 = "asdfghgfdsa";
var word2 = "whatefer";
var word3 = "Madam";

// things that you might need: 'string'.toLowerCase();

// KEEP THIS AS REFERNCE FOR THE IDEA
function isPalindrome(wordToCompare) {
  // convert wordToCompare to lowerCase()
  // need to compare from front to back characters one by one (LOOP)
  // if there's a mismatch, we should end (IF and maybe BREAK)
  // do we stop at the middle? how? wordToCompare.length / 2
  for (let i = 0; i < wordToCompare.length / 2; i++) {}
  return;
}

// reverse word and simply compare to original
function isPalindrome1(wordToCompare) {
  let wordReversed = "";
  for (let i = wordToCompare.length - 1; i >= 0; i--) {
    wordReversed += wordToCompare[i];
  }
  console.log(wordReversed);
  return wordToCompare === wordReversed;
}

// original idea
function isPalindrome2(wordToCompare) {
  for (let i = 0; i < wordToCompare.length / 2; i++) {
    if (wordToCompare[i] !== wordToCompare[wordToCompare.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// modified orginal idea with break / continue
function isPalindrome3(wordToCompare) {
  for (let i = 0; i < wordToCompare.length / 2; i++) {
    let returnVal =
      wordToCompare[i] === wordToCompare[wordToCompare.length - 1 - i];
    if (!returnVal) break;
  }
  return returnVal;
}

if (isPalindrome(word1)) {
  console.log("a palindrome");
} else {
  console.log("not a palindrome :(");
}

// for next class, think about palindromes with spaces (ANY AMOUNT OF SPACES)
// 100% you will need to use continue; or break;
// the two for loops for just suggestions

var word5 = "ka    yak";
var word6 = "asdasdasdasdasd";
var word7 = "taco cat";

function isPalindrome4(wordToCompare) {
  for (let i = 0; i < wordToCompare.length; i++) {}
  for (let j = wordToCompare.length - 1; j >= 0; j++) {}
}

// SOLUTION

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
