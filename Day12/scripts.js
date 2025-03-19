//task 03
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

const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;
console.log(name, companyName, city);

//task 04
const student = {
  stname: "jeewan",
  age: 40,
  grades: [87, 78, 65, 89],
  calculateAverage() {
    let average = 0;
    let total = 0;
    for (let grade of this.grades) {
      total = total + grade;
    }
    return (average = total / this.grades.length);
  },
};

const { stname, age } = student;
console.log(stname, age, student.calculateAverage());

//task 05
const book = {
  bookname: "Enter the Dragon",
  author: "Jeewan Nandasena",
  isbn: 12421789,
  publishedYear: 2025,
  quantity: 4,
};

let { bookname, quantity } = book;

function checkAvailability(nameOfBook) {
  if (nameOfBook === bookname && quantity > 0) {
    console.log(`The ${bookname} is available`);
  } else {
    console.log(`The ${bookname} is not available`);
  }
}

function restock(nameOfBook, qty) {
  if (nameOfBook === bookname) {
    quantity = qty;
    console.log(`The ${bookname} is restocked!`);
  } else {
    console.log(`The ${bookname} is not restocked!`);
  }
}

checkAvailability("Enter the Drgon");
restock("Enter the Dragon", 10);

//task 10
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

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
