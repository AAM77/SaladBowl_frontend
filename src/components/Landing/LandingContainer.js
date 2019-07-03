import React from 'react';
import LoginContainer from '../Login/LoginContainer.js';
import Logout from '../Login/Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/currentUser.js';


const LandingContainer = ( { currentUser, history } ) => {
  return(
    <div>
      <h1>THE LANDING PAGE</h1>
      {currentUser ? history.push('/users/currentUser.id') : <LoginContainer />}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser }) (LandingContainer);
