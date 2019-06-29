import React from 'react';
import styled from 'styled-components';
// import flowerSalad from '../assets/images/flower_salad.jpg';
// import fruitSaladGalore from '../assets/images/fruit_salad_galore.jpg';
// import greenSalad from '../assets/images/green_salad.jpg';
// import makingSalad from '../assets/images/making_salad.jpg';
import saladBowls from '../assets/images/salad_bowls.jpg';

const images = [
  saladBowls
]


const Styles = styled.div`

  #background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -4;
    opacity: 0.7;

    /* Preserve aspect ratio */
    width: 100%;
    height: 100%;
  }
`;


export const Background = () => {
  return(
    <Styles>
      <img src={images[Math.floor(Math.random() * images.length)]} id='background' alt="a salad" />
    </Styles>
  )
}

export default Background;
