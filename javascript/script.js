// 1. Store the sentence 'Happy coding!' in a variable named 'coding'.
let coding = "Happy coding!";

// 2. Display the variable 'coding' as a message in the console.
console.log(coding);

// 3. Store the sentence 'Happy hacking!' in the variable named 'hacking'.
let hacking = "Happy hacking!";

// 4. Display the variable 'hacking' as a message in the console.
console.log(hacking);

// ------------------------------------------------------

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

EVENTS;

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

CONDITIONS & BOOLEANS;

let carrots = 2;
const dishesCleaned = 3;

const kidDidHelpCleanTheDishes = dishesCleaned > 3;

if (kidDidHelpCleanTheDishes) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}

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

// switch (animal) {
//     case "Dog":
//         emoji = "🐶";
//         break;
//     case "Tiger":
//         emoji = "🐯";
//         break;
//     default:
//         emoji = "❓";
// }

console.log("animal is: ", animal, emoji);

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
