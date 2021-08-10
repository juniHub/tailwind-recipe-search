import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()}>
        <li className="capitalize text-blue-500 text-center">{ingredient.text}</li>
        <li className="capitalize text-yellow-600 text-center">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
