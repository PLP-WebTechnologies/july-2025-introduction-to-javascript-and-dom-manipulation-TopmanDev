// ==============================
// 1. Variable Declarations & Conditionals
// ==============================
let userName = "";  // will store user's input
let isLoggedIn = false;  // boolean to simulate login status

// Conditional check for login status
if (!isLoggedIn) {
  console.log("User is not logged in.");
} else {
  console.log("User is logged in.");
}

// ==============================
// 2. Functions
// ==============================

// Function 1: Change header text (DOM interaction)
function changeHeaderText() {
  const header = document.querySelector("h1");
  header.textContent = "You just changed this text with JavaScript! 🎉";
}

// Function 2: Greet user (DOM interaction)
function greetUser(name) {
  const container = document.getElementById("messageContainer");
  if (name.trim() === "") {
    container.textContent = "⚠️ Please enter a valid name.";
  } else {
    container.textContent = `Hello, ${name}! 👋 Welcome to JavaScript Basics.`;
  }
}

// ==============================
// 3. Loops
// ==============================

// Loop 1: Print numbers 1–5 in the console
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Loop 2: Add numbers 1–5 to the webpage list (DOM interaction)
const numberList = document.getElementById("numberList");
let counter = 1;
while (counter <= 5) {
  const li = document.createElement("li");
  li.textContent = `Number ${counter}`;
  numberList.appendChild(li);
  counter++;
}

// ==============================
// 4. DOM Event Listeners
// ==============================
document.getElementById("changeTextBtn").addEventListener("click", changeHeaderText);

document.getElementById("greetBtn").addEventListener("click", function() {
  userName = document.getElementById("nameInput").value;
  greetUser(userName);
});
