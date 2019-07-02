import React from 'react';
// import { connect } from 'react-redux';
// import { updateLoginForm } from '../../actions/loginForm.js';
// import { login } from "../../actions/currentUser.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Styles } from './LoginStyles.js';
//import LoginContainer from '../Login/LoginContainer.js';

const LoginForm = ( { loginFormData, updateLoginForm, login, handleSubmit, handleInputChange } ) => {

  // const handleInputChange = event => {
  //   const { name, value } = event.target
  //
  //   const updatedFormInfo = {
  //     ...loginFormData,
  //     [name]: value
  //   }
  //   updateLoginForm(updatedFormInfo)
  // }
  //
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   login(loginFormData)
  //   return(<LoginContainer />)
  // }

  return(
    <Styles>
      <div className="login-form">
        <Form  onSubmit={(event) => handleSubmit(event)}>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter Username" value={loginFormData.username} name="username" type="text" onChange={(event) => handleInputChange(event)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Enter Username" value={loginFormData.password} name="password" type="password" onChange={(event) => handleInputChange(event)} />
          </Form.Group>

          <Button variant="primary" value="Log In" type="submit">
            Submit
          </Button>
        </Form>

        <br />

        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>


    </Styles>
  )
}

export default LoginForm;
