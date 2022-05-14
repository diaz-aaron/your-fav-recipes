import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice'
import { useSelector, useDispatch } from 'react-redux';

import React, { useEffect } from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = process.env.PUBLIC_URL+'img/icon/favorite.svg';

export const AllRecipes = (props) => {
  
  // const { allRecipes, dispatch } = props;
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

