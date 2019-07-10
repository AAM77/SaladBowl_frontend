import React from 'react';


const SaladBowlCard = ( { saladBowl }) => {

  const ingredients = () => saladBowl.ingredients.map( ingredient => <div key={ingredient.id}>{ingredient.name}</div>)

  return(
    <div>
      <h4>{saladBowl.name}</h4>
      <br />
      <div>
        {ingredients()}
      </div>
    </div>
  )
}

export default SaladBowlCard;
