import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import flowerSalad from '../../assets/images/flower_salad.jpg';
import fruitSaladGalore from '../../assets/images/fruit_salad_galore.jpg';
import greenSalad from '../../assets/images/green_salad.jpg';
import makingSalad from '../../assets/images/making_salad.jpg';
import saladBowls from '../../assets/images/salad_bowls.jpg';

const images = [
  flowerSalad,
  fruitSaladGalore,
  greenSalad,
  makingSalad,
  saladBowls
]


const Styles = styled.div`
  .jumbo {
    background: url(${images[Math.floor(Math.random() * images.length)]}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;


export const BackgroundJumbotron = () => {
  return(
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome</h1>
          <p>Make the perfect salad bowl!</p>
        </Container>
      </Jumbotron>
    </Styles>
  )
}
