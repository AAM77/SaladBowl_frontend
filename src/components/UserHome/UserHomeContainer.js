import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './UserHomeContainerStyles.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class UserHomeContainer extends Component {
  render() {
    return(
      <>
        {
          this.props.currentUser ?

          <Styles>
            <div id="user-page-div">
              <h1>Welcome, {this.props.currentUser.username}!</h1>
              <h4>Your location: U.S.</h4>
              <div id="salad-bar-button">
                <Link to="/saladbars" id="url-link">
                  <ButtonToolbar>
                    <Button variant="warning">Find a Salad Bar Near You</Button>
                  </ButtonToolbar>
                </Link>
              </div>
            </div>
          </Styles> :

          this.props.history.push('/')
        }
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default withRouter(connect(mapStateToProps)(UserHomeContainer));
