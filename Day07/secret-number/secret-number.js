const min = 1;
const max = 10;

function startSecretNumberGame() {
  let attempt = 0;
  let guess;

  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to guess a number between 1 and 10.");

  const secretNumber = Math.floor(Math.random() * max) + 1;
  while (guess !== secretNumber) {
    const guessPrompt = prompt("Enter your number: ");
    guess = parseInt(guessPrompt);

    if (isNaN(guess) || guess < min || guess > max) {
      console.log(
        `Invalid input! Please enter a number between ${min} and ${max}.`
      );
      continue;
    }

    attempt = attempt + 1;
    if (guess < secretNumber) {
      console.log("Too Low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too High! Try again.");
    } else {
      console.log(
        `🎉 Congrats! You guessed the number in ${attempt} attempts.`
      );
      break;
    }
  }

  const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    console.log("Thanks for Playing! See you Next Time");
  }
}

startSecretNumberGame();
