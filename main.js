// Get the element with the id "counter-el"
let countEl = document.getElementById("counter-el");

// Initialize a variable count to 0
let count = 0;

// Function to increment the count and update the display
function increment() {
    count += 1; // Increment the count by 1
    countEl.textContent = count; // Update the content of the element with the new count
}

// Get the element with the id "save-el"
let saveEl = document.getElementById("save-el");

// Function to save the current count and update the display
function save() {
    let prevEntry = count + " - "; // Create a string with the current count followed by a dash
    saveEl.textContent += prevEntry; // Append the new entry to the existing content
    countEl.textContent = 0; // Reset the content of the counter element to zero
    count = 0; // Reset the count variable to zero for further increments without reloading the page
}
