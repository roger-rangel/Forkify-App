import * as model from './model.js';
import recipeView from './views/recipeView.js'
<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
=======
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}
>>>>>>> Reimplement Search Results

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    
    if (!id) return;
    recipeView.renderSpinner();
    
    // 1. Loading Recipe
    await model.loadRecipe(id);
    
    // 2. Rendering recipe 
    recipeView.render(model.state.recipe)
  } catch (error) {
    console.log(error);
    recipeView.renderError()
  }
};

<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
=======
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    
    // 1) Get search query
    const query = searchView.getQuery()
    if (!query) return;
    
    // 2) Load search results
    await model.loadSearchResults(query);
    
    // 3) Render results
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results)
  } catch (error) {
    console.log(error);
  }
};

>>>>>>> Reimplement Search Results
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();

