// import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
=======
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    }
>>>>>>> Implement Pagination - Part 1
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

<<<<<<< 57c189923707dbdcaf322b3389b20ba28c5de4c0
>>>>>>> Reimplement Search Results
=======
export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;
    
    const start = (page - 1) * state.search.resultsPerPage; // 0;
    const end = page * state.search.resultsPerPage; // 9;
    return state.search.results.slice(start, end)
} 

>>>>>>> Implement Pagination - Part 1
