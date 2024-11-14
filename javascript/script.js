// 1. Store the sentence 'Happy coding!' in a variable named 'coding'.
let coding = "Happy coding!";

// 2. Display the variable 'coding' as a message in the console.
console.log(coding);

// 3. Store the sentence 'Happy hacking!' in the variable named 'hacking'.
let hacking = "Happy hacking!";

// 4. Display the variable 'hacking' as a message in the console.
console.log(hacking);

// ------------------------------------------------------

// VARIABLES

console.log("HelloWorld");

const myOtherNumber = 10;
console.log("myOtherNumber", myOtherNumber);

const OneTimeFee = 5;
const MonthlyFee = 12;

const amountToBeCharged = OneTimeFee + MonthlyFee;
console.log("amountToBeCharged: ", amountToBeCharged);

let balance = 20;
balance = balance + 1;
balance += 1;
balance++;
console.log("balance after addition: ", balance);

const body = document.querySelector("body");

const addButton = document.querySelector("[data-js=add-button]");
const removeButton = document.querySelector("[data-js=remove-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");

// ------------------------------------------------------
// EVENTS

addButton.addEventListener("click", () => {
  console.log("add button clicked");
  body.classList.add("dark");
});

removeButton.addEventListener("click", () => {
  body.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// ------------------------------------------------------
// CONDITIONS & BOOLEANS;

let carrots = 2;
const dishesCleaned = 3;

const kidDidHelpCleanTheDishes = dishesCleaned > 3;

if (kidDidHelpCleanTheDishes) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}
// ------------------------------------------------------

// ternary operator
dishesCleaned > 3 ? (carrots = carrots + 2) : (carrots = carrots - 1);
// carrots = carrots + (dishesCleaned > 3 ? 2 : -1);

// condition ? ifConditionTrue : ifConditionFalse/OR/otherwise

const animal = "Dog";
let emoji;

if (animal === "Dog") {
  emoji = "🐶";
} else if (animal === "Tiger") {
  emoji = "🐯";
} else {
  emoji = "❓";
}

// ------------------------------------------------------
// SWITCH

switch (animal) {
  case "Dog":
    emoji = "🐶";
    break;
  case "Tiger":
    emoji = "🐯";
    break;
  default:
    emoji = "❓";
}

console.log("animal is: ", animal, emoji);

// ------------------------------------------------------// ------------------------------------------------------
// ------------------------------------------------------ // FUNCTIONS // ------------------------------------------------------
// ------------------------------------------------------// ------------------------------------------------------

function sayHi() {
  console.log("Hi");
  console.log("Bye");
}

sayHi();

function sum(a, b) {
  return a + b;
}

const value = sum(1, 2);
console.log(value);

// Function that returns a sentence describing a person's name and age
function howOldAreYouStranger(name, age) {
  // Example debug code to check arguments passed
  // const name = "Alex";
  // const age = 35;
  // console.log("arguments:", name, age);
  // console.log(name + " is " + age + " years old");

  // Constructing a sentence with the provided name and age
  const sentence = name + " is " + age + " years old";
  return sentence; // Returning the constructed sentence
}

// Testing the howOldAreYouStranger function with various inputs
const firstPerson = howOldAreYouStranger("Max", 36);
// const secondPerson = howOldAreYouStranger("Klaus", 63);
// const thirdPerson = howOldAreYouStranger("Hans", 85);
// const fourthPerson = howOldAreYouStranger("Lisa", 20);

// Logging the result for the first person
// console.log("firstPerson: ", firstPerson);

// Simple function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b; // Returns the sum of a and b
}

// Example usage of calculateSum
const result = calculateSum(1, 3); // Storing the sum of 1 and 3
console.log("result: ", result); // Logging the result of the sum

// Arrow function alternative
// const calculateSum = (a, b) => {
//     return a + b;
// };

// Single-line arrow function alternative (with implicit return)
// const calculateSum = (a, b) => a + b;

// Additional calls to calculateSum with different inputs
// console.log(calculateSum(1, 3));
// console.log(calculateSum(5, 7));
// console.log(calculateSum(1123, 214214));

// Function to check if a given input string has less than 10 characters
function checkInputLength(inputString) {
  if (inputString.length < 10) {
    // Checks if string length is under 10
    return true; // Returns true if the condition is met
  } else {
    return false; // Returns false if the condition is not met
  }
}

// Example usage of checkInputLength
const isValid = checkInputLength("Kristoffer");
console.log("isValid", isValid); // Logs the result of checkInputLength
