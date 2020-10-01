"use strict";

/*
Remember that properties that are functions are called methods
In this assignment, you will practice to make some methods for 
a student object, using its other properties

PART 1:
Complete the method getFullGrade that returns the grade property of this student

After the function is created, use it on student1 and
test how well it works
*/

var student1 = { name:"Tom", grade:80,
  getFullGrade:function(){
    //to be completed
  },
  getLetterGrade:function(){
    //to be completed
  },
  getPassed:function(){
    //to be completed
  }
}

//uncomment to test
//console.log(student1.name + " has a grade of: " + student1.getFullGrade());





/*
PART 2:
Complete the function called letterGrade that takes a grade (Number) as ARGUMENT
and RETURN an output with a letter (string)
- 90-100  returns A
- 80-89   returns B
- 70-79   returns C
- 60-69   returns D
- 0-59    returns F

After the function is created, update the getLetterGrade method in student1
and test how well it works
*/

function letterGrade(renameArgument){
  //to be completed
}

//uncomment to test
//console.log(student1.name + " has a letter grade of: " + student1.getLetterGrade());





/*
PART 3:
Complete the function called passFail that takes a grade (Number) as ARGUMENT
and RETURN a boolean for passing or failing

After the function is created, update the getPassed method in student1
getPassed should return one of the following strings:
"passed"
"failed"
based on the result of the passFail function

test how well it works
*/

function passFail(renameArgument){
  //to be completed
}

//uncomment to test
//console.log(student1.name + " has " + student1.getPassed());









//if all is correct, this following should work
//uncomment to test
/*
console.log(student1.name + " has " + student1.getPassed() + " with a grade of: " + 
  student1.getFullGrade() + " / " + student1.getLetterGrade());
*/


























// EOF - END OF FILE
