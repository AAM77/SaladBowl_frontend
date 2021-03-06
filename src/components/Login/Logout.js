import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session.js';

const Logout = ( { logout } ) => {
  return(
    <form onSubmit={logout}>
      <input value="Log Out" type="submit" />
    </form>
  )
}

export default connect(null, { logout }) (Logout);
