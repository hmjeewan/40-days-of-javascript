//task 01
for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a = a + "*";
  }
  console.log(a);
}

//task 02
let a = 9;
for (let i = 1; i <= 10; i++) {
  console.log(a + " X " + i + " = " + a * i);
}

//task 03
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

//task 04
let num = 6789;
let len = num.toString().length;
let x = 1;
let last = 0;
let reverse = "";
while (x <= len) {
  last = num % 10;
  reverse = reverse + parseInt(last);
  x = x + 1;
  num = num / 10;
}
console.log(reverse);
