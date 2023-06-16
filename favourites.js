
let favorites = [];

// Function to add a city to the favorites array
function addToFavorites(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get the user input from the input field
  const city = document.getElementById("city-input").value;

  // Add the city to the favorites array
  favorites.push(city);

  // Update the favorites list on the page
  updateFavoritesList();

  // Log the updated favorites array to the console
  console.log(favorites);
}

// Function to update the favorites list on the page
function updateFavoritesList() {
  // Get the favorites list element
  const favoritesList = document.getElementById("favorites-list");

  // Clear the previous list items
  favoritesList.innerHTML = "";

  // Create a new list element for each city in the favorites array
  favorites.forEach(city => {
    const listItem = document.createElement("div");
    listItem.textContent = city;
    favoritesList.appendChild(listItem);
  });
}

// Call the updateFavoritesList() function to initially populate the list on page load
updateFavoritesList();
