import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import Logout from '../Login/Logout.js';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session.js';
import { updateSignupForm } from '../../actions/signupForm.js';
import { signup } from "../../actions/userAccount.js";
import { withRouter } from 'react-router-dom';


class SignupContainer extends Component {

  handleInputChange = (event) => {
    const { name, value } = event.target

    const updatedFormInfo = {
      ...this.props.signupFormData,
      [name]: value
    }

    this.props.updateSignupForm(updatedFormInfo);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.props.signupFormData, this.props.history);

    //this.props.history.push('/login');
  }

  render() {
    const {
      signupFormData,
      currentUser,
      updateSignupForm,
      signup
     } = this.props;

    return(
      <div>
        <h1>Register</h1>
        {
          currentUser ?
          <Logout /> :
          <SignupForm
            signupFormData={signupFormData}
            updateSignupForm={updateSignupForm}
            signup={signup}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
        }
      </div>
    )
  }
}


// = ( { currentUser } ) =>
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm,
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup, getCurrentUser }) (withRouter(SignupContainer));
