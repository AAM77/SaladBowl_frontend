import React, { Component } from 'react';
import Login from './Login.js';
import Logout from './Logout.js';
import { connect } from 'react-redux';
import { login, getCurrentUser } from '../../actions/currentUser.js';
import { updateLoginForm } from '../../actions/loginForm.js';


class LandingPage extends Component {

  handleInputChange = (event) => {
    const { name, value } = event.target

    const updatedFormInfo = {
      ...this.props.loginFormData,
      [name]: value
    }
    this.props.updateLoginForm(updatedFormInfo)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.props.loginFormData, this.props.history)
    //return(<LoginContainer />)
  }
  // = ( { currentUser, loginFormData, updateLoginForm, login } ) =>

  render() {
    const {
      currentUser,
      loginFormData,
      updateLoginForm,
      login
    } = this.props

    return(
      <div>
        <h1>Sign In</h1>
        {currentUser ? <Logout /> :
          <Login
            loginFormData={loginFormData}
            updateLoginForm={updateLoginForm}
            login={login}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
           />
         }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    loginFormData: state.loginForm,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { login, updateLoginForm, getCurrentUser }) (LandingPage);
