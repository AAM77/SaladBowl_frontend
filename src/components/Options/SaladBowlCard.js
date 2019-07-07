import React from 'react';


const SaladBowlCard = ( { saladBowl }) => {

  const ingredients = () => saladBowl.ingredients.map( ingredient => <div key={ingredient.id}>{ingredient.name}</div>)

  return(
    <div>
      <h5>{saladBowl.name} {saladBowl.id}</h5>
      <div>
        {ingredients()}
      </div>
    </div>
  )
}

export default SaladBowlCard;
