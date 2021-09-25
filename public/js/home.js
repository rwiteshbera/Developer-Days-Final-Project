const searchBtn = document.getElementById("search-btn");
const user = document.getElementById("username");
const heading = document.querySelector('.heading');
const logOut = document.getElementById('logout');
const mealList = document.getElementById("meal");
const mealDetails = document.querySelector(".meal-details-content");
const meal = document.querySelector('.meal-details');
const recipeClose = document.getElementById("recipe-close-btn");

//Access local storage key and showing the value in frontend
let keyElement = JSON.parse(sessionStorage.getItem('payload'));
const userName = keyElement.customFieldInputValues.Name;
logOut.innerHTML = `Log out`;
user.innerHTML = `${userName}`;
heading.innerHTML = `<h2>Hi ${userName.split(" ")[0]}, Find Your Meal</h2>`;

// Event Listener
searchBtn.addEventListener("click", searchMeal);

mealList.addEventListener("click", getRecipeDetails);
recipeClose.addEventListener("click", () => {
  meal.classList.remove('showRecipe');
});

// Logout
logOut.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "index.html";
});

// Get meal list from API that matches the search term
function searchMeal(e) {
  let searchTerm = document.getElementById("search-input").value.trim();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals === null) {
        html += `
                <div class="alert alert-danger">
                    No meal found with the name <b>${searchTerm}</b>
                </div>
            `;
        mealList.innerHTML = html;
      } else {
        data.meals.forEach((meal) => {
          html += `
                <div class="meal-item" data-id=${meal.idMeal}>
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="" srcset="">
                     </div>
                    <div class="meal-name">
                        <h3>"${meal.strMeal}"</h3>
                        <button href="#" class="recipe-btn" id="recipe-btn">Get Recipe</button>
                    </div>
                </div>
                `;
        });
        mealList.innerHTML = html;
      }
    });
}


// Get Recipe of the meal
function getRecipeDetails(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    console.log(mealItem);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then(response => response.json())
      .then(data =>
        RecipeModal(data.meals)
      )
  }
}

// Modal
function RecipeModal(e) {
  console.log(e);
  html = `
  <h2 class="recipe-title">${e[0].strMeal}</h2>
  <p class="recipe-category">${e[0].strCategory}</p>
  <div class="recipe-instruct">
    <h3>Instructions</h3>
    <p>${e[0].strInstructions}</p>
  </div>

  <div class="recipe-meal-img">
    <img src="${e[0].strMealThumb}" alt="" srcset="">
  </div>

  <div class="recipe-link">
    <a href="${e[0].strYoutube}" target="_blank">Watch Videos</a>
  </div>
`;

  mealDetails.innerHTML = html;
  mealDetails.parentElement.classList.add('showRecipe');
}