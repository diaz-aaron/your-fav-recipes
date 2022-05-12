import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import {allRecipesReducer} from '../features/allRecipes/allRecipesSlice.js';
import {favoriteRecipesReducer} from '../features/favoriteRecipes/favoriteRecipesSlice.js'
import {searchTermReducer} from '../features/searchTerm/searchTermSlice.js'
const reducers = {
  // Add the slice properties here
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}

// Declare the store here.
export const store = createStore(combineReducers(reducers));
