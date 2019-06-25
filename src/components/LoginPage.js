import React from 'react';
import Login from './Login.js';
import Logout from './Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser.js';


const LandingPage = ( { currentUser } ) => {
  return(
    <div>
      <h1>THE LOGIN PAGE</h1>
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser }) (LandingPage);
