import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './UserHomeContainerStyles.js';
import { withRouter } from 'react-router-dom';


const UserHomeContainer = () => {
  return(
    <Styles>
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

export default withRouter(UserHomeContainer);
