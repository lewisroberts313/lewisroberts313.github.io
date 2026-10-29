// basics.js: JavaScript fundamentals, practiced with the Case-Shiller housing data.
// Run this file by opening index.html in a browser and reading the Console tab.
// The array housingData comes from data.js, which index.html loads before this file.

// ===== Part 1: Variables and data types =====

// Select the dark mode button
const darkModeBtn = document.querySelector("#dark-mode-btn");

const contactForm = document.querySelector("#contact-form")
const formMessage = document.querySelector("#form-message")

// ===== Part 2: Operators and equality =====


// ===== Part 3: Conditionals =====


// ===== Part 4: Loops =====


// ===== Part 5: Functions =====

// Toggle class and update button text on click
if (darkModeBtn) { // Checks if button exists on page
  darkModeBtn.addEventListener("click", () => { // listens to a click on darkModeBtn from user
    document.body.classList.toggle("dark-mode"); // flips the dark mode theme on or off depending on whether its already applied to the body


  // Check if dark mode is currently active and stores the result in 'isDarkMode'
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Updates button text to match current state
  darkModeBtn.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    // Prevent the page from reloading on form submission
    event.preventDefault()
    // Read input value and store in constant 'nameInput'
    const nameInput = document.querySelector("#user-name").value.trim();
    // Check/Validate input
    if (nameInput === "") {
      // Show error message if invalid
      formMessage.style.color = '#ff4d4d';
      formMessage.textContent = "Error: Name field cannot be empty. Please enter your name.";
      return; // Stop execution early
    }
    // Show summary on the page if valid
    formMessage.style.color = "#2e7d32"
    formMessage.textContent = `Thank you, ${nameInput} Your submission was successful.`;
  })
}

// ===== Part 6: Arrays and array methods =====


// ===== Part 7: Objects =====


// ===== Part 8: JSON =====


// ===== Part 9: Scope =====

