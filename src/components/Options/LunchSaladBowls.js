import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SaladBowlCard from './SaladBowlCard.js'

const LunchSaladBowls = ( { allLunchBowls } ) => {

  const lunchBowls = () => {
    return allLunchBowls.map ( lunchBowl => <Col sm className="column-text" key={lunchBowl.id}><SaladBowlCard saladBowl={lunchBowl} /></Col>)
  }
  return(
    <div>
      {
         allLunchBowls ?
        <div className="rows-and-columns">
          <Container>
            <Row className="row-of-columns">
              {lunchBowls()}
            </Row>
          </Container>
        </div> :
        <p>Loading items</p>
      }
    </div>
  )
}

export default LunchSaladBowls;
