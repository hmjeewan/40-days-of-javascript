//Task 02
let amount = 400;
if (amount % 100 == 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

//Task 03
let fNumber = 34;
let sNumber = 23;

let operator = 7;

switch (operator) {
  case 1:
    console.log(fNumber + sNumber);
    break;
  case 2:
    console.log(fNumber - sNumber);
    break;
  case 3:
    console.log(fNumber * sNumber);
    break;
  case 4:
    console.log(fNumber / sNumber);
    break;
  case 5:
    console.log(fNumber % sNumber);
    break;
  default:
    console.log("Invalid Operator");
}

//Task 04
let age = 68;
if (age < 10) {
  console.log("Your Ticket price is $3");
} else if (age < 60) {
  console.log("Your Ticket price is $10");
} else {
  console.log("Your Ticket price is $8");
}

//Task 05
let month = 10;
switch (month) {
  case 1:
    console.log("Your Zodiac sign is Capricorn ");
    break;
  case 2:
    console.log("Your Zodiac sign is Aquarius ");
    break;
  case 3:
    console.log("Your Zodiac sign is Pisces ");
    break;
  case 4:
    console.log("Your Zodiac sign is Aries ");
    break;
  case 5:
    console.log("Your Zodiac sign is Taurus ");
    break;
  case 6:
    console.log("Your Zodiac sign is Gemini ");
    break;
  case 7:
    console.log("Your Zodiac sign is Cancer ");
    break;
  case 8:
    console.log("Your Zodiac sign is Leo ");
    break;
  case 9:
    console.log("Your Zodiac sign is Virgo ");
    break;
  case 10:
    console.log("Your Zodiac sign is Libra ");
    break;
  case 11:
    console.log("Your Zodiac sign is Scorpio ");
    break;
  default:
    console.log("Your Zodiac sign is Sagittarius ");
}

//Task 06
let oneSide = 23;
let secondSide = 2;
let thirdSide = 2;

if (oneSide === secondSide && secondSide === thirdSide) {
  console.log("Equilateral Triangle");
} else if (oneSide === secondSide || secondSide === thirdSide) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
