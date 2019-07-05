import React from 'react';


const SaladBowlCard = ( { saladBowl }) => {

  const ingredients = () => saladBowl.ingredients.map( ingredient => <li>{ingredient.name}</li>)

  return(
    <div>
      <h5>{saladBowl.name} {saladBowl.id}</h5>
      <div>
        <ul>
          {ingredients()}
        </ul>
      </div>
    </div>
  )
}

export default SaladBowlCard;
