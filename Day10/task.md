# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?

```js
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();
```

# 🟢 answer:

When inner() is called, it looks for the variable user in its own scope first. If not found, it looks in the outer() then it has Bob.
So it displays Bob.

## 2. What is the mistake in the code below?

```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

# 🟢 answer:

the total variable must be in loal. Because global variables can lead to bugs, naming conflicts, and poor code maintainability

## 3. Create a function with a nested function and log a variable from the parent function.

# 🟢 answer:

```js
function parent() {
  const message = "Hi from the parent!";

  function nested() {
    console.log(message);
  }

  nested();
}

parent();
```

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

# 🟢 answer:

No we can't access from out side.

## 5. Write a function that tries to access a variable declared inside another function.

# 🟢 answer:

```js
function outer() {
  const message = "This is a message!";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

console.log(message);
```

## 6. What will be the output and why?

```js
console.log(a);
let a = 10;
```

# 🟢 answer:

ReferenceError: a is not defined

## 7. Where is the `age` variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

Options:

- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

# 🟢 answer:

B

## 8. What will be the output and explain the output?

```js
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

# 🟢 answer:

Hi
When inner() is called, it looks for the variable message in its own scope first. If not found, it looks in the outer() then it has Hi.
So it displays Hi.

## 9. What will be the output and why?

```js
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();
```

# 🟢 answer:

Inner.
When inner() is called, it looks for the variable x in its own scope first.
So it displays Inner.

## 10. What will be the output and why?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
```

# 🟢 answer:

-1
-2
The counter function returns an inner function that decrements and logs the count variable.
