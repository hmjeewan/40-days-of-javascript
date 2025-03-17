# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
```

# 🟢 answer:

count value getting increment.

## 2. What will be the output and why?

```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
```

# 🟢 answer:

100
It returns 10 \* 10 when invoking testClosure()()

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

# 🟢 answer:

in [javaScript File](./scripts.js)

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

# 🟢 answer:

in [javaScript File](./scripts.js)

## 5. What happens if a closure references an object?

- 1. The object is garbage collected immediately
- 2. The object remains in memory as long as the closure exists
- 3. The object is automatically cloned
- 4. None of the Above.

# 🟢 answer:

2

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

# 🟢 answer:

in [javaScript File](./scripts.js)
