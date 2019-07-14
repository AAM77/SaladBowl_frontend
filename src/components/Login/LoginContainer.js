import React, { Component } from 'react';
import LoginForm from './LoginForm.js';
import Logout from './Logout.js';
import { connect } from 'react-redux';
import { login } from '../../actions/session.js';
import { updateLoginForm } from '../../actions/accountForms.js';


class LoginContainer extends Component {

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
  }

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
          <LoginForm
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
    loginFormData: state.userForms.loginForm,
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, { login, updateLoginForm }) (LoginContainer);
