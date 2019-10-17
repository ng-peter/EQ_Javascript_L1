var obj = {};

for (let i = 0, random = Math.random() * 100; i < random; i++) {
  let randomLetter = (Math.random() * 10) % 3;
  let letter = "A";
  switch (parseInt(randomLetter)) {
    case 0:
      letter = "A";
      break;
    case 1:
      letter = "B";
      break;
    default:
      letter = "C";
  }
  obj[i] = letter;
}

console.log(obj);

/*

INSTRUCTIONS:

A will console.log, replace with VALID
B will break if 5 instances
C will continue

generate a new array with all the properties / numbering that are VALID

*/
