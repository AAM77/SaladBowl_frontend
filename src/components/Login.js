import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from "../actions/currentUser.js";
import styled from 'styled-components';

const Styles = styled.div`
  .login-form {
    display: inline-block;
    padding-bottom: 56px;
  }

  h3 {
    color: #efefef
  }
`;

const Login = ( { loginFormData, updateLoginForm, login } ) => {

  const handleInputChange = event => {
    const { name, value } = event.target

    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData)
  }

  return(
    <Styles>
      <div className="login-form">
        <h3>Sign In</h3><br />
        <form onSubmit={handleSubmit}>
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} /><br />
          <br />
          <input placeholder="password" value={loginFormData.password} name="password" type="password" onChange={handleInputChange} /><br />
          <br />
          <input value="Log In" type="submit" />
        </form>
      </div>
    </Styles>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login }) (Login);
