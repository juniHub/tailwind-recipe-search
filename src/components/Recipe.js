import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="container">
      <div className="active-recipe">
        <h2 className="active-recipe-title">{label}</h2>
        <img className="active-recipe-img" src={image} alt={label} />
        <a
          className="active-recipe-website"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get full recipe here
        </a>
        <button className="active-recipe-button" onClick={() => setShow(!show)}>
          Ingredients
        </button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default Recipe;
