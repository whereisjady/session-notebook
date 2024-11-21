// // 1. Store the sentence 'Happy coding!' in a variable named 'coding'.
// let coding = "Happy coding!";

// // 2. Display the variable 'coding' as a message in the console.
// console.log(coding);

// // 3. Store the sentence 'Happy hacking!' in the variable named 'hacking'.
// let hacking = "Happy hacking!";

// // 4. Display the variable 'hacking' as a message in the console.
// console.log(hacking);

// // ------------------------------------------------------

// // VARIABLES

// console.log("HelloWorld");

// const myOtherNumber = 10;
// console.log("myOtherNumber", myOtherNumber);

// const OneTimeFee = 5;
// const MonthlyFee = 12;

// const amountToBeCharged = OneTimeFee + MonthlyFee;
// console.log("amountToBeCharged: ", amountToBeCharged);

// let balance = 20;
// balance = balance + 1;
// balance += 1;
// balance++;
// console.log("balance after addition: ", balance);

// const body = document.querySelector("body");

// const addButton = document.querySelector("[data-js=add-button]");
// const removeButton = document.querySelector("[data-js=remove-button]");
// const toggleButton = document.querySelector("[data-js=toggle-button]");

// // ------------------------------------------------------
// // EVENTS

// addButton.addEventListener("click", () => {
//   console.log("add button clicked");
//   body.classList.add("dark");
// });

// removeButton.addEventListener("click", () => {
//   body.classList.remove("dark");
// });

// toggleButton.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });
// // ------------------------------------------------------
// // CONDITIONS & BOOLEANS;

// let carrots = 2;
// const dishesCleaned = 3;

// const kidDidHelpCleanTheDishes = dishesCleaned > 3;

// if (kidDidHelpCleanTheDishes) {
//   carrots = carrots + 2;
// } else {
//   carrots = carrots - 1;
// }
// // ------------------------------------------------------

// // ternary operator
// dishesCleaned > 3 ? (carrots = carrots + 2) : (carrots = carrots - 1);
// // carrots = carrots + (dishesCleaned > 3 ? 2 : -1);

// // condition ? ifConditionTrue : ifConditionFalse/OR/otherwise

// const animal = "Dog";
// let emoji;

// if (animal === "Dog") {
//   emoji = "🐶";
// } else if (animal === "Tiger") {
//   emoji = "🐯";
// } else {
//   emoji = "❓";
// }

// // ------------------------------------------------------
// // SWITCH

// switch (animal) {
//   case "Dog":
//     emoji = "🐶";
//     break;
//   case "Tiger":
//     emoji = "🐯";
//     break;
//   default:
//     emoji = "❓";
// }

// console.log("animal is: ", animal, emoji);

// // ------------------------------------------------------// ------------------------------------------------------
// // ------------------------------------------------------ // FUNCTIONS // ------------------------------------------------------
// // ------------------------------------------------------// ------------------------------------------------------

// function sayHi() {
//   console.log("Hi");
//   console.log("Bye");
// }

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// const value = sum(1, 2);
// console.log(value);

// // Function that returns a sentence describing a person's name and age
// function howOldAreYouStranger(name, age) {
//   // Example debug code to check arguments passed
//   // const name = "Alex";
//   // const age = 35;
//   // console.log("arguments:", name, age);
//   // console.log(name + " is " + age + " years old");

//   // Constructing a sentence with the provided name and age
//   const sentence = name + " is " + age + " years old";
//   return sentence; // Returning the constructed sentence
// }

// // Testing the howOldAreYouStranger function with various inputs
// const firstPerson = howOldAreYouStranger("Max", 36);
// // const secondPerson = howOldAreYouStranger("Klaus", 63);
// // const thirdPerson = howOldAreYouStranger("Hans", 85);
// // const fourthPerson = howOldAreYouStranger("Lisa", 20);

// // Logging the result for the first person
// // console.log("firstPerson: ", firstPerson);

// // Simple function to calculate the sum of two numbers
// function calculateSum(a, b) {
//   return a + b; // Returns the sum of a and b
// }

// // Example usage of calculateSum
// const result = calculateSum(1, 3); // Storing the sum of 1 and 3
// console.log("result: ", result); // Logging the result of the sum

// // Arrow function alternative
// // const calculateSum = (a, b) => {
// //     return a + b;
// // };

// // Single-line arrow function alternative (with implicit return)
// // const calculateSum = (a, b) => a + b;

// // Additional calls to calculateSum with different inputs
// // console.log(calculateSum(1, 3));
// // console.log(calculateSum(5, 7));
// // console.log(calculateSum(1123, 214214));

// // Function to check if a given input string has less than 10 characters
// function checkInputLength(inputString) {
//   if (inputString.length < 10) {
//     // Checks if string length is under 10
//     return true; // Returns true if the condition is met
//   } else {
//     return false; // Returns false if the condition is not met
//   }
// }

// // Example usage of checkInputLength
// const isValid = checkInputLength("Kristoffer");
// console.log("isValid", isValid); // Logs the result of checkInputLength

// ------------------------------------------------------FORMS//------------------------------------------------------



const form = document.querySelector('[data-js="form"]');
console.log("form", form);

// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//     if (confirm("Are you sure you want to leave the page?")) {
//         return;
//     } else {
//         event.preventDefault();
//     }
//     console.log("runnning through");
// });

// ------------------------------------------------------
// ------------------------------------------------------
// OPTION 1
form.addEventListener("submit", (event) => {
    event.preventDefault();
Extracting form elements from the event target
    const formElements = event.target.elements;

Creating a structured data object and retrieving values from form elements
    const data = {
        firstName: formElements.firstName.value,
        lastName: formElements.lastName.value,
        age: formElements.age.value,
        email: formElements.email.value,
        date: formElements.date.value,
        subOptions: formElements.subOptions.value,
        personalMessage: formElements.personalMessage.value,
    };
    console.log("data", data);
});

// ------------------------------------------------------
// ------------------------------------------------------
// OPTION 2
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data", data);
    // const formData = [
    //     ["firstName", "Klaus"],
    //     ["lastName", "Stille"],
    // ];
    // const data = Object.fromEntries(formData);
    // console.log("data: ", data); //--> Output: { firstName: 'Klaus', lastName: 'Stille' }
});

// ------------------------------------------------------
// ------------------------------------------------------
// Character count
const personalMessage = document.querySelector(
    '[  data-js="personal-message"]'
);
const remainingChar = document.querySelector(
    '[data-js="remaining-characters"]'
);

personalMessage.addEventListener("input", (event) => {
    console.log("first approach: ", event.target.value);
    console.log("second approach: ", personalMessage.value);
    // If you're only using the input element once an it's clear in
    // the context of your code, you might prefer the second approach
    // (input.value). if you're dealing with multiple input elements
    // or if you wnt to reuse the same event handler function for
    // different input elements, the first approach (event.target.value)
    // might be more versatile.
    remainingChar.textContent = 150 - event.target.value.length;
});

// Playground 😃
// window.addEventListener("mousemove", (event) => {
//     console.log("mousemove Event: ", event);
//     document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 255)`;
// });


// ------------------------------------------------------// CREATING ELEMENTS // ------------------------------------------------------

console.clear();

const form = document.querySelector('[data-js="card-form"]'); // the form used on this page
const html = document.querySelector('[data-js="html"]'); // the DOM
const textInput = document.querySelector('[data-js="text-input"]'); // the text value in the form
const cardContainer = document.querySelector('[data-js="card-container"]'); // the cards 

form.addEventListener("submit", (event) => {
  // prevent default
  event.preventDefault();
  const newCard = document.createElement("li"); // 1
  cardContainer.appendChild(newCard); // 2
  //   newCard.textContent = textInput.value;
  newCard.classList.add("card");
  newCard.innerHTML = `<h2>Product Details:</h2> <p>${textInput.value}</p>`;
});
