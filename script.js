/* =========================
   PART 1: JavaScript Basics
========================= */

// Variable declarations
let userName = "Adoh"; // Replace with your name if you like
let isLearning = true;

// Conditional example
if (isLearning) {
  console.log(`${userName} is learning JavaScript!`);
} else {
  console.log(`${userName} is not learning right now.`);
}

// DOM interaction #1: Button click to show greeting
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = `Hi ${userName}, keep going!`;
});

/* =========================
   PART 2: Functions
========================= */

// Function #1: Calculate a total
function calculateTotal(a, b) {
  return a + b;
}
console.log("Total of 5 and 10:", calculateTotal(5, 10));

// Function #2: Format a message
function formatMessage(name) {
  return `Welcome, ${name}!`;
}
console.log(formatMessage(userName));

/* =========================
   PART 3: Loops
========================= */

// Loop #1: Generate a list of numbers
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i}`;
  numberList.appendChild(li);
}

// Loop #2: Simple countdown
for (let count = 3; count > 0; count--) {
  console.log("Countdown:", count);
}

/* =========================
   PART 4: DOM Manipulation
========================= */

// DOM interaction #2: Toggle a class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("highlight");
});

// DOM interaction #3: Create an element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically with JS!";
document.body.appendChild(newParagraph);
