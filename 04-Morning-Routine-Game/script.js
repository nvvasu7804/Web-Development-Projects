const prompt = require("prompt-sync")(); // Importing the prompt-sync module for user input

// Morning Routine Challenge Game

// Greeting the user and asking for their name
const name = prompt("What is your name? ");
console.log("Namaste", name, "Welcome to the Morning Routine Challenge!");

// Asking if the user wants to play
const shouldWePlay = prompt(
  "Do you want to start your morning routine? (yes/no) "
).toLowerCase();

if (shouldWePlay === "yes") {
  console.log("Great! Let's start your day.");

  // First choice: Tea or Coffee
  const teaOrCoffee = prompt(
    "Would you like to have Tea or Coffee? (tea/coffee) "
  ).toLowerCase();

  if (teaOrCoffee === "tea") {
    console.log("You enjoy a nice cup of Masala Chai. Refreshing!");

    // Second choice: Exercise or Relax
    const exerciseOrRelax = prompt(
      "Do you want to do Yoga or just relax? (yoga/relax) "
    ).toLowerCase();

    if (exerciseOrRelax === "yoga") {
      console.log(
        "You start your day with Surya Namaskar. You feel energetic and positive!"
      );
    } else {
      console.log(
        "You decide to relax and scroll through your phone. Not the most productive choice..."
      );
    }
  } else if (teaOrCoffee === "coffee") {
    console.log(
      "You sip on strong South Indian filter coffee. Now you're wide awake!"
    );

    // Second choice: Breakfast or Skip
    const breakfastOrSkip = prompt(
      "Do you want to have Idli or skip breakfast? (idli/skip) "
    ).toLowerCase();

    if (breakfastOrSkip === "idli") {
      console.log(
        "You have a delicious plate of Idli with coconut chutney. A healthy start to the day!"
      );
    } else {
      console.log(
        "You skip breakfast. Now you're hungry by mid-morning. Not a good choice!"
      );
    }
  } else {
    console.log(
      "Invalid choice. The day feels incomplete without a good start!"
    );
  }
} else if (shouldWePlay === "no") {
  console.log("Okay, maybe another time. Have a great day!");
} else {
  console.log("Invalid Input. Please enter yes or no.");
}
