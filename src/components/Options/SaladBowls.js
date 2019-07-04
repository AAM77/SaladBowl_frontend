import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SaladBowlCard from './SaladBowlCard.js'

const SaladBowls = ( { saladBowls } ) => {

  const parseSaladBowls = () => {
    const bowls = saladBowls.slice(0);
    const shuffled = bowls.sort(() => 0.5 - Math.random());
    let bowl_suggestions = shuffled.slice(0, 4);

    return bowl_suggestions.map ( saladBowl => <Col sm className="column-text" key={saladBowl.id}><SaladBowlCard saladBowl={saladBowl} /></Col>)
  }
  
  return(
    <div>
      {
        saladBowls ?
        <div className="rows-and-columns">
          <Container>
            <Row className="row-of-columns">
              {parseSaladBowls()}
            </Row>
          </Container>
        </div> :
        <p>Loading items</p>
      }
    </div>
  )
}

export default SaladBowls;
