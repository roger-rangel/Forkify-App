import * as model from './model.js';
import recipeView from './views/recipeView.js'
<<<<<<< HEAD
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

<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
if (module.hot) {
  module.hot.accept();
}
>>>>>>> Reimplement Search Results
=======
// if (module.hot) {
//   module.hot.accept();
// }
>>>>>>> Implement Pagination - Part 1
=======
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }
>>>>>>> main

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    
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

<<<<<<< HEAD
<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
=======
=======
>>>>>>> main
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    
    // 1) Get search query
    const query = searchView.getQuery()
    if (!query) return;
    
    // 2) Load search results
    await model.loadSearchResults(query);
    
    // 3) Render results
    resultsView.render(model.getSearchResultsPage());
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
>>>>>>> Reimplement Search Results
=======
>>>>>>> main
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();

