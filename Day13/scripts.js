//task 01
// At the Global Level

console.log(this);

//Inside an Object Method

const student = {
  name: "jeewan",
  age: 40,

  message() {
    console.log(
      `Hello my name is ${this.name} and i am ${this.age} years old!`
    );
  },
};

student.message();

//Inside the Satandalone non-Arrow Function
function greeting() {
  console.log(this);
}

greeting();

//Inside an Arrow Function(standalone)

const greetMsg = () => {
  console.log(this);
};

greetMsg();

//Inside an Arrow Function(as object method)
const person = {
  name: "jeewan",
  age: 40,
  message: () => {
    console.log(
      `Hello my name is ${this.name} and i am ${this.age} years old!`
    );
  },
};

person.message();

//Inside an object created with the Constructor Function
function Teacher(name) {
  this.name = name;
  this.welcomeMsg = function () {
    console.log(`Hello i am ${this.name}, your teacher`);
  };
}

const ictTeacher = new Teacher("Jeewan");
ictTeacher.welcomeMsg();

//task 05
function Sports(name, no_of_players) {
  this.name = name;
  this.no_of_players = no_of_players;
  this.play = function () {
    console.log(
      `Hi we play ${this.name} and it needs ${this.no_of_players} players`
    );
  };
}

const cricket = new Sports("cricket", 10);
cricket.play();

const football = new Sports("Football", 11);
football.play();
