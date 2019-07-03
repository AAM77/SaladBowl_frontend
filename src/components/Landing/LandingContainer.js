import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class LandingContainer extends Component {

  render() {
    const {
      currentUser,
      history
    } = this.props

    return(
      <div>
        <h1>THE LANDING PAGE</h1>
        {currentUser ? history.push(`/users/${currentUser.id}`) : <h3>Please Sign in</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps) (LandingContainer));
