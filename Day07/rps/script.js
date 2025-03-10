//task 01
function rockPaperScissorsGame() {
  console.log(
    "Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game"
  );
  const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  console.log("User selected", userChoice);
  console.log("Computer selected", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You the User WIN, yay!!!!");
  } else if (userChoice === computerChoice) {
    console.log("The Game is a Tie");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh Ho... Computer Wins!!!!");
  } else {
    console.log("Please check the input, We didn't understand it.");
  }

  const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for Playing! See you Next Time");
  }
}

rockPaperScissorsGame();
