# Recipe Finder Website

A **Recipe Finder Website** that allows users to search for recipes based on keywords, filter results by cuisine and diet type, and view detailed recipe information using the Spoonacular API.

---

## Features

- **Search Recipes:** Users can search for recipes by entering keywords in the search bar.
- **Filter Options:**
  - Cuisine types: Italian, Mexican, Chinese, Indian, etc.
  - Diet preferences: Vegetarian, Vegan, Gluten-Free.
- **Recipe Display:**
  - Results are shown in a modern, responsive grid layout.
  - Recipes include an image, cooking time, and servings.
- **Recipe Details Modal:**
  - Click on a recipe to view detailed information, including ingredients, instructions, and health scores.

---

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (modern responsive styling)
  - JavaScript (ES6+ features)
- **API:**
  - [Spoonacular API](https://spoonacular.com/food-api)

---

## Getting Started

### Prerequisites
- A code editor (e.g., VS Code).
- Live server or a static hosting platform (e.g., Netlify or GitHub Pages).

### API Key
To use this project, you need a valid Spoonacular API key. Sign up on [RapidAPI](https://rapidapi.com/) to get your API key.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Otani-ibe/Recipe_Finder.git
   cd recipe_finder
   ```

2. Update API Configuration:
   - Open `script.js` and replace the placeholder `API_KEY` with your actual Spoonacular API key.
     ```javascript
     const API_KEY = 'your-api-key-here';
     ```

3. Open `index.html` in a browser or use a live server to view the website.

---

## Usage

1. **Search for Recipes:**
   - Enter a keyword (e.g., "pasta") in the search bar.
   - Click the **Search** button or press `Enter`.

2. **Filter Recipes:**
   - Select a cuisine or diet preference from the dropdown menus before searching.

3. **View Recipe Details:**
   - Click on any recipe card to view detailed information.

4. **Close Details Modal:**
   - Click the "X" button or anywhere outside the modal to close it.

---

## Project Structure

```plaintext
📁 recipe-finder/
├── 📄 index.html       # Main HTML file
├── 📄 styles.css       # CSS file for styling
├── 📄 script.js        # JavaScript file for logic
├── 📄 README.md        # Project documentation (this file)
```

---

## Future Enhancements

- Add user login and personalized recipe recommendations.
- Enable saving and sharing favorite recipes.
- Include additional filters (e.g., cooking time, calorie count).
- Implement a "dark mode" for better user experience.

---

---

## Contact

For questions or suggestions, feel free to reach out:  
**Email:** o.ibe@alustudent.com  


--- 

Thank you for exploring the Recipe Finder Website! 🌟