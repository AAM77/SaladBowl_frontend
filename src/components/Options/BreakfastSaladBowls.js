import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SaladBowlCard from './SaladBowlCard.js'

const BreakfastSaladBowls = ( { allBreakfastBowls } ) => {

  const breakfastBowls = () => {
    return allBreakfastBowls.map ( breakfastBowl => <Col sm className="column-text" key={breakfastBowl.id}><SaladBowlCard saladBowl={breakfastBowl} /></Col>)
  }

  return(
    <div>
      {
        allBreakfastBowls ?
        <div className="rows-and-columns">
          <Container>
            <Row className="row-of-columns">
              {breakfastBowls()}
            </Row>
          </Container>

        </div> :
        <p>Loading items</p>
      }
    </div>
  )
}

export default BreakfastSaladBowls;
