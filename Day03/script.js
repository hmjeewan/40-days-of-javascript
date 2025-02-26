//task 01
let a = 6;

a % 2 == 0
  ? console.log(`${a} is an even number`)
  : console.log(`${a} ia an odd number`);

//task 02
let age = 43;
age >= 18
  ? console.log("You can get a driving license")
  : console.log("You can't get a driving license");

//task 03
let monthSalary = 47275;
let bonus = monthSalary * 12 * 0.2;
console.log("Your anum as a CTC is " + (monthSalary + bonus) * 12 + " LKR");

//task 04
let color = "Red";
color === "Red" ? console.log("STOP") : console.log("GO");

//task 05
let units = 88;
console.log("Your monthly bill is " + units * 150);
console.log(
  "Your annual payment is " + (units * 150 * 12 - units * 150 * 12 * 0.12)
);

//task 06
let year = 2024;
(year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  ? console.log("true")
  : console.log("false");

//task 07
let p = 110;
let q = 81;
let r = 34;

p > q && p > r
  ? console.log(" The maximum number is " + p)
  : q > p && q > r
  ? console.log(" The maximum number is " + q)
  : console.log(" The maximum number is " + r);

//task 08
 let count =5;
 console.log(count << 1);
