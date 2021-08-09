import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, dishType, cuisineType, dietLabels, image, url, ingredients } = recipe.recipe;

  return (
   
    <div className="shadow-lg border-2 border-blue-900 rounded-md">
      <div className="h-40">
        <h2 className="font-bold bg-blue-900 text-white capitalize text-center p-4 h-20">{ label }</h2>
        <h5 className="capitalize text-blue-900 text-center">{ dishType }</h5>
        <h5 className="capitalize text-blue-900 text-center">{ cuisineType }</h5>
        <h5 className="capitalize text-blue-900 text-center">{ dietLabels }</h5>
        </div>
      <img className="block h-auto w-full" src={ image } alt={ label } />
      <div className="flex flex-col leading-8 items-center justify-center p-4 md:p-8">
        <a
          className="font-bold text-blue-900 hover:underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get full recipe here
        </a>
        <button className="font-bold text-blue-900 bg-yellow-500 rounded-full py-1 px-6" onClick={() => setShow(!show)}>
          Ingredients
        </button>
        { show && <RecipeDetails ingredients={ ingredients } /> }
        </div>
      </div>
    
  );
};

export default Recipe;
