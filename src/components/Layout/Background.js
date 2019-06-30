import React from 'react';
// import flowerSalad from '../../assets/images/flower_salad.jpg';
// import fruitSaladGalore from '../../assets/images/fruit_salad_galore.jpg';
// import greenSalad from '../../assets/images/green_salad.jpg';
// import makingSalad from '../../assets/images/making_salad.jpg';
import saladBowls from '../../assets/images/salad_bowls.jpg';
import { Styles } from './BackgroundStyles.js';


export const Background = () => {
  return(
    <Styles>
      <img src={saladBowls} id='background' alt="a salad" />
    </Styles>
  )
}

export default Background;
