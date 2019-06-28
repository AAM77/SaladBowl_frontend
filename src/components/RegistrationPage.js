import React from 'react';
import Signup from './Signup.js';
import Logout from './Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser.js';


const LandingPage = ( { currentUser } ) => {
  return(
    <div>
      <h1>Register</h1>
      {currentUser ? <Logout /> : <Signup />}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser }) (LandingPage);
