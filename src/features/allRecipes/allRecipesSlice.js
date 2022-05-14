import allRecipesData from "../../data";
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  };
}

const initialAllRecipes = [];
export const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData': 
      return action.payload
    default:
      return allRecipes;
  }
}

export const selectAllRecipes = (state) => state.allRecipes;
export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}