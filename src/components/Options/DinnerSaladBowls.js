import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SaladBowlCard from './SaladBowlCard.js'

const DinnerSaladBowls = ( { allDinnerBowls } ) => {
  const dinnerBowls = () => {
    return allDinnerBowls.map ( dinnerBowl => <Col sm className="column-text" key={dinnerBowl.id}><SaladBowlCard saladBowl={dinnerBowl} /></Col>)
  }
  return(
    <div>
      {
         allDinnerBowls ?
        <div className="rows-and-columns">
          <Container>
            <Row className="row-of-columns">
              {dinnerBowls()}
            </Row>
          </Container>
        </div> :
        <p>Loading items</p>
      }
    </div>
  )
}

export default DinnerSaladBowls;
