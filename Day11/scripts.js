//task 03
function btnCount() {
  let clickCount = 1;

  document.getElementById("myBtn").addEventListener("click", function () {
    console.log(`Button clicked ${clickCount} times`);
    clickCount++;
  });
}

//task 04
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const multiplierVal = createMultiplier(12);
const multiplierVal2 = createMultiplier(10);

console.log(multiplierVal(42));
console.log(multiplierVal(47));

//task 06
function factory() {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(`Counter value is  increased to ${count}`);
    },
    decrement: () => {
      count--;
      console.log(`Counter value is decreased to ${count}`);
    },
    reset: () => {
      count = 0;
      console.log(`Counter value is reset to ${count}`);
    },
  };
}

const myFac = factory();
myFac.decrement();
myFac.reset();
myFac.increment();
