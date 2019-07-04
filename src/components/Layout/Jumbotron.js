import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Styles } from './JumbotronStyles.js';


export const BackgroundJumbotron = () => {
  return(
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome</h1>
          <p>Choose your perfect salad bowl!</p>
        </Container>
      </Jumbotron>
    </Styles>
  )
}
