import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SaladBowlCard from './SaladBowlCard.js'

const SaladBowls = ( { saladBowls } ) => {

  const parseSaladBowls = () => {
    return saladBowls.map ( saladBowl => <Col sm className="column-text" key={saladBowl.id}><SaladBowlCard saladBowl={saladBowl} /></Col>)
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
