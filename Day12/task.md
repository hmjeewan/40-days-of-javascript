# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```

# 🟢 answer:

Not provided.
The ?? operator is used to provide a default value when a variable is null or undefined. In this case age is undefined so it will display "not provided".

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

# 🟢 answer:

It will not changed.

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
```

# 🟢 answer:

in [javaScript File](./scripts.js)

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

# 🟢 answer:

in [javaScript File](./scripts.js)

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

# 🟢 answer:

in [javaScript File](./scripts.js)

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

# 🟢 answer:

Object.keys() - Returns an array of keys of an object
Object.entries() - Returns key value pairs

## 7. How do you check if an object has a certain property?

# 🟢 answer:

by using in operator

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

# 🟢 answer:

Doe
The person is assigned an object with a name property set to "John".
When assign person to newPerson, without creating a new object newPerson becomes a reference to the same object that person points to.
afterthat modify newPerson.name it also modifies person.name also.

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

# 🟢 answer:

structuredClone
It is builtin function to deep copy of nested objects.

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];
```

# 🟢 answer:

in [javaScript File](./scripts.js)
