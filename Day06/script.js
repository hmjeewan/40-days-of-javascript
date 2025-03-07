//task 01
function celsiusToFahrenheit(celsius) {
  console.log((celsius * 9) / 5 + 32);
}

celsiusToFahrenheit(65);

//task 02
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findMax(78, 102));

//task 03
function isPalindrome(str) {
  let leftSide = 0;
  let rightSide = str.length - 1;

  while (leftSide < rightSide) {
    while (leftSide < rightSide && !/[a-zA-Z0-9]/.test(str[leftSide])) {
      leftSide = leftSide + 1;
    }
    while (leftSide < rightSide && !/[a-zA-Z0-9]/.test(str[rightSide])) {
      rightSide = rightSide - 1;
    }
    if (str[leftSide].toLowerCase() !== str[rightSide].toLowerCase()) {
      return false;
    }
    leftSide = leftSide + 1;
    rightSide = rightSide - 1;
  }
  return true;
}

console.log(isPalindrome("hello"));

//task 04
function factorial(n) {
  let facto = 1;

  while (n > 0) {
    facto = facto * n;
    n--;
  }
  console.log(facto);
}

factorial(7);

//task 05
function countVowels(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  console.log("Total vowels in your text is ", count);
}

countVowels("jeewan");

//task 06
function capitalizeWords(sentence) {
  let result = "";
  let cNext = true;

  for (let char of sentence) {
    if (cNext && char !== " ") {
      result += char.toUpperCase();
      cNext = false;
    } else {
      result += char;
    }

    if (char === " ") {
      cNext = true;
    }
  }

  return result;
}

console.log(capitalizeWords("hello world"));

//task 07
(function (str) {
  console.log("Hello,", str);
})("JavaScript");

//task 08
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function callGreet() {
  console.log("Javascripts");
}

greet("Jeewan", callGreet);
