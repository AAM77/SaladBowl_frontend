import React from 'react';
import { ButtonToolbar, Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './OptionsContainerStyles.js';

const OptionsContainer = () => {
  return(
    <Styles>
      <div className="rows-and-columns">
        <Container>
          <Row className="row-of-columns">
            <Col sm className="column-text">HOW ARE YOU 1 of 4 HOW ARE YOU</Col>
            <Col sm className="column-text">HOW ARE YOU 2 of 4 HOW ARE YOU</Col>
            <Col sm className="column-text">HOW ARE YOU 3 of 4 HOW ARE YOU</Col>
            <Col sm className="column-text">HOW ARE YOU 4 of 4 HOW ARE YOU</Col>
          </Row>
        </Container>
      </div>
      <div id="user-page-div">
        <h1>Welcome, User!</h1>
        <h4>Your location: U.S.</h4>
        <div id="salad-bar-button">
          <Link to="/register" id="url-link">
            <ButtonToolbar>
              <Button variant="warning">Find a Salad Bar Near You</Button>
            </ButtonToolbar>
          </Link>
        </div>
      </div>
    </Styles>
  )
}

export default OptionsContainer;
