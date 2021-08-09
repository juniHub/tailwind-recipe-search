import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()} className="">
        <li className="">{ingredient.text}</li>
        <li className="">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
