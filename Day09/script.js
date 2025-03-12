//Task 01
{
  //TDZ name starts
  console.log(name);

  let name = jeewan; // TDZ name ends

  //TDZ age starts
  console.log(age);

  let age = 40; // TDZ age ends

  //TDZ gender starts
  console.log(gender);

  let gender = true; // TDZ gender ends
}

//Task 02
//hoisting means memory allocation and initialization of variables. hoisting has two parts variable hoisting and function hoisting.

// variable hoisting
console.log(greeting);

var greeting = "Hello javaScripts";

//function hoisting
greeting();

function greeting() {
  console.log("Hello javaScripts");
}
