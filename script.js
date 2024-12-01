// API Configuration
const API_KEY = '679ee502c9msha15194f6d58d215p1d20fcjsn979c1c49b771';
const API_HOST = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

// DOM Element Selectors
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeResults = document.getElementById('recipeResults');
const cuisineFilter = document.getElementById('cuisineFilter');
const dietFilter = document.getElementById('dietFilter');
const recipeModal = document.getElementById('recipeModal');
const recipeDetails = document.getElementById('recipeDetails');
const closeButton = document.querySelector('.close-button');

// Main Search Function
async function searchRecipes() {
    const query = searchInput.value.trim();
    const cuisine = cuisineFilter.value;
    const diet = dietFilter.value;

    // Validate input
    if (!query) {
        alert('Please enter a recipe to search');
        return;
    }

    // Construct API URL
    const url = `https://${API_HOST}/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&number=12`;

    try {
        // Fetch recipes
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();
        
        // Check if recipes exist
        if (data.results.length === 0) {
            recipeResults.innerHTML = '<p>No recipes found. Try a different search.</p>';
            return;
        }

        // Display recipes
        displayRecipes(data.results);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        recipeResults.innerHTML = `<p>Error finding recipes: ${error.message}</p>`;
    }
}

// Display Recipes in Grid
function displayRecipes(recipes) {
    recipeResults.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p>Cooking Time: ${recipe.readyInMinutes} minutes</p>
                <p>Servings: ${recipe.servings}</p>
            </div>
        `;
        
        // Add click event to show recipe details
        recipeCard.addEventListener('click', () => showRecipeDetails(recipe.id));
        recipeResults.appendChild(recipeCard);
    });
}

// Fetch and Display Recipe Details
async function showRecipeDetails(recipeId) {
    const url = `https://${API_HOST}/recipes/${recipeId}/information`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }

        const recipe = await response.json();
        
        // Populate modal with recipe details
        recipeDetails.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 100%;">
            
            <h3>Ingredients</h3>
            <ul>
                ${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}
            </ul>
            
            <h3>Instructions</h3>
            <p>${recipe.instructions || 'No detailed instructions available'}</p>
            
            <div>
                <p>Cooking Time: ${recipe.readyInMinutes} minutes</p>
                <p>Servings: ${recipe.servings}</p>
                <p>Health Score: ${recipe.healthScore}/100</p>
            </div>
        `;
        
        // Show modal
        recipeModal.style.display = 'block';
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        recipeDetails.innerHTML = `<p>Error loading recipe details: ${error.message}</p>`;
        recipeModal.style.display = 'block';
    }
}

// Event Listeners
searchButton.addEventListener('click', searchRecipes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});

// Close Modal Button
closeButton.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Optional: Initial load or featured recipes
// Uncomment and modify as needed
// window.addEventListener('load', () => {
//     searchInput.value = 'pasta'; // Default search
//     searchRecipes();
// });