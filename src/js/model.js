// import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`)
        
        console.log(data);
        
        const { recipe } = data.data;
        state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceURL: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients
        }
        
        console.log(state.recipe);
    } catch (error) {
        console.error(`${error} 👻`)
        throw error;
    }
<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
}
=======
};

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        
        const data = await getJSON(`${API_URL}?search=${query}`);
        
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            }
        })
       
    } catch (error) {
        console.error(`${error} 👻`)
        throw error;
    }
}

>>>>>>> Reimplement Search Results
