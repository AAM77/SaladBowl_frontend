import React from 'react';


const SaladBowlCard = ( { saladBowl }) => {
  return(
    <div>
      <h5>{saladBowl.name} {saladBowl.id}</h5>
    </div>
  )
}

export default SaladBowlCard;
