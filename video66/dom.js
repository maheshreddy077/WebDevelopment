// ==================== DOM ====================

// DOM (Document Object Model)
// Represents HTML as a tree of objects.

// Select elements
document.getElementById("title");       // Select by ID
document.querySelector(".box");         // Select first matching CSS selector
document.querySelectorAll("p");         // Select all matching elements

// Change content
element.textContent = "Hello";          // Change text
element.innerHTML = "<b>Hello</b>";     // Change HTML content

// Change styles
element.style.color = "red";            // Change CSS style
element.classList.add("active");         // Add a CSS class
element.classList.remove("active");      // Remove a CSS class
element.classList.toggle("active");     // Add/remove a CSS class

// Create and remove elements
let p = document.createElement("p");     // Create an element
p.textContent = "New paragraph";         // Set its text
document.body.appendChild(p);            // Add it to the page
p.remove();                              // Remove the element

// Events
element.addEventListener("click", function() {
    console.log("Clicked");
}); // Run code when clicked


// ==================== BOM ====================

// BOM (Browser Object Model)
// Allows JavaScript to interact with browser features.

// Window
window.alert("Hello");                  // Show alert
window.confirm("Are you sure?");         // Show OK/Cancel dialog
window.prompt("Enter your name");        // Get user input

// Location
console.log(location.href);              // Current URL
location.reload();                       // Reload the page
// location.href = "https://example.com"; // Navigate to another URL

// History
history.back();                          // Go to previous page
history.forward();                       // Go to next page
history.go(-1);                          // Go back one page

// Navigator
console.log(navigator.userAgent);        // Browser user-agent information
console.log(navigator.language);         // Browser language

// Screen
console.log(screen.width);               // Screen width
console.log(screen.height);              // Screen height

// Timers
setTimeout(() => {
    console.log("After 2 seconds");
}, 2000); // Execute once after 2 seconds

let timer = setInterval(() => {
    console.log("Repeating");
}, 1000); // Execute every second

clearInterval(timer);                    // Stop repeating