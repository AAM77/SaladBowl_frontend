import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  #salad-bar-button {
    display: inline-block;
    padding: 25px 0px 50px 0px;
  }

  #user-page-div {
    display: inline-block;
    padding: 25px;
  }

  #url-link {
    text-decoration: none;
  }
`;


const UserPage = () => {
  return(
    <Styles>
      <div id="user-page-div">
      </div>
      <h1>Welcome, User!</h1>
      <h4>Your location: U.S.</h4>
      <div id="salad-bar-button">
        <Link to="/register" id="url-link">
          <ButtonToolbar>
            <Button variant="warning">Find a Salad Bar Near You</Button>
          </ButtonToolbar>
        </Link>
      </div>
    </Styles>
  )
}

export default UserPage;
