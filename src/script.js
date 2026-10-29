// 1. Dark Mode Toggle // Names the first section.
const darkModeBtn = document.querySelector("#dark-mode-btn"); // Finds the dark mode button.

if (darkModeBtn) { // Checks whether the button exists.
  darkModeBtn.addEventListener("click", () => { // Runs code when the button is clicked.
    // Toggle dark-mode class on body // Explains the next line.
    document.body.classList.toggle("dark-mode"); // Adds or removes the dark mode class.

    // Check current dark mode state // Explains the next line.
    const isDarkMode = document.body.classList.contains("dark-mode"); // Checks if dark mode is active.

    // Update button text accordingly // Explains the next line.
    darkModeBtn.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"; // Updates the button text.
  }); // Ends the click event listener.
} // Ends the button existence check.

// 2. Form Handling & Validation // Names the second section.
const contactForm = document.querySelector("#contact-form"); // Finds the contact form.
const formMessage = document.querySelector("#form-message"); // Finds the form feedback element.

if (contactForm) { // Checks whether the form exists.
  contactForm.addEventListener("submit", (event) => { // Runs code when the form is submitted.
    // Prevent standard form submission page reload // Explains the next line.
    event.preventDefault(); // Stops the page from reloading.

    // Get and trim user input // Explains the next line.
    const nameInput = document.querySelector("#user-name").value.trim(); // Gets the name and removes surrounding spaces.

    // Validate input // Explains the next line.
    if (nameInput === "") { // Checks whether the name is empty.
      formMessage.style.color = "#d0190c"; // Sets the error message colour to red.
      formMessage.textContent = "Error: Name field cannot be empty. Please enter your name."; // Displays an error message.
      return; // Stops processing the invalid submission.
    } // Ends the empty-name check.

    // Display summary on valid submission // Explains the next lines.
    formMessage.style.color = "#2e7d32"; // Sets the success message colour to green.
    formMessage.textContent = `Thank you, ${nameInput}! Your submission was received successfully.`; // Displays a personalised success message.

    // Reset form field // Explains the next line.
    contactForm.reset(); // Clears the form fields.
  }); // Ends the form submission listener.
} // Ends the form existence check.

// 3. Filterable List & State Management // Names the third section.

// Array of at least 8 objects // Explains the data structure below.
const factsData = [ // Creates an array containing personal facts.
  { id: 1, title: "Age", detail: "19 years old", category: "Personal" }, // Stores the age fact.
  { id: 2, title: "Hometown", detail: "From Wales", category: "Location" }, // Stores the hometown fact.
  { id: 3, title: "Passion", detail: "Football is my passion", category: "Football" }, // Stores the football passion fact.
  { id: 4, title: "Current City", detail: "Living in Sarasota, Florida", category: "Location" }, // Stores the current city fact.
  { id: 5, title: "Youth Club", detail: "Holywell Town FC (Ages 6-12)", category: "Football" }, // Stores the youth club fact.
  { id: 6, title: "Academy Club", detail: "Colwyn Bay Academy FC (Ages 10-12)", category: "Football" }, // Stores the academy club fact.
  { id: 7, title: "Senior Club", detail: "Hellan FC Mens Team (Ages 16-18)", category: "Football" }, // Stores the senior club fact.
  { id: 8, title: "College Team", detail: "New College of Florida (Ages 18-present)", category: "Personal" }, // Stores the college team fact.
  { id: 9, title: "Favorite Team", detail: "Manchester United", category: "Football" } // Stores the favourite team fact.
]; // Ends the facts array.

// Central application state // Explains the state object below.
const state = { // Stores the current search and filter settings.
  searchTerm: "", // Starts with an empty search term.
  selectedCategory: "All" // Starts with all categories selected.
}; // Ends the state object.

// DOM Element references for the list // Explains the element references below.
const searchInput = document.querySelector("#search-input"); // Finds the search input field.
const itemCount = document.querySelector("#item-count"); // Finds the item count display.
const factsList = document.querySelector("#facts-list"); // Finds the list container.
const filterButtons = document.querySelectorAll(".filter-btn"); // Finds all category filter buttons.

// Render function to build list dynamically using createElement // Describes the rendering function.
function render() { // Defines the function that displays filtered facts.
  if (!factsList || !itemCount) return; // Stops if required elements are missing.

  // Clear existing items in list // Explains the next line.
  factsList.innerHTML = ""; // Removes the current list items.

  // Filter facts based on search term and selected category // Explains the filtering below.
  const filteredFacts = factsData.filter((fact) => { // Keeps facts that match the search and category.
    const matchesSearch = // Starts checking whether a fact matches the search.
      fact.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || // Checks the title for the search term.
      fact.detail.toLowerCase().includes(state.searchTerm.toLowerCase()); // Checks the detail for the search term.

    const matchesCategory = // Starts checking whether a fact matches the category.
      state.selectedCategory === "All" || fact.category === state.selectedCategory; // Allows all categories or the selected category.

    return matchesSearch && matchesCategory; // Keeps facts matching both conditions.
  }); // Ends the filtering operation.

  // Update item count text // Explains the next line.
  itemCount.textContent = `Showing ${filteredFacts.length} of ${factsData.length}`; // Displays the number of matching facts.

  // Build list elements using document.createElement // Explains the list creation below.
  filteredFacts.forEach((fact) => { // Loops through every matching fact.
    const li = document.createElement("li"); // Creates a list item.

    const titleStrong = document.createElement("strong"); // Creates a bold text element.
    titleStrong.textContent = `${fact.title}: `; // Adds the fact title and a colon.

    const detailSpan = document.createElement("span"); // Creates a span for the fact detail.
    detailSpan.textContent = fact.detail; // Adds the fact detail as text.

    li.appendChild(titleStrong); // Adds the bold title to the list item.
    li.appendChild(detailSpan); // Adds the detail to the list item.
    factsList.appendChild(li); // Adds the completed item to the list.
  }); // Ends the loop through matching facts.
} // Ends the render function.

// Event Listener: Search Input // Names the search event section.
if (searchInput) { // Checks whether the search field exists.
  searchInput.addEventListener("input", (e) => { // Runs whenever the search input changes.
    state.searchTerm = e.target.value; // Updates the search term with the current input.
    render(); // Refreshes the list using the new search term.
  }); // Ends the search input listener.
} // Ends the search field existence check.

// Event Listener: Category Filter Buttons // Names the category filter event section.
if (filterButtons.length > 0) { // Checks whether any filter buttons exist.
  filterButtons.forEach((btn) => { // Loops through every filter button.
    btn.addEventListener("click", (e) => { // Runs when a filter button is clicked.
      filterButtons.forEach((b) => b.classList.remove("active")); // Removes the active class from all buttons.
      e.target.classList.add("active"); // Marks the clicked button as active.

      state.selectedCategory = e.target.dataset.category; // Updates the selected category from the button's data attribute.
      render(); // Refreshes the list using the selected category.
    }); // Ends the button click listener.
  }); // Ends the loop through filter buttons.
} // Ends the filter button existence check.

// Initial render call when script loads // Explains the next line.
render(); // Displays the initial list of facts.