import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
const unfavoriteIconUrl = process.env.PUBLIC_URL+'img/icon/unfavorite.svg';

export const FavoriteRecipes = (props) =>{
  
  // Extract dispatch and favoriteRecipes from props.
  //const { favoriteRecipes, dispatch } = props;
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes)
  const dispatch = useDispatch();
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id='favorite-recipes' className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};