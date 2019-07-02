import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Styles } from './LoginStyles.js';

const LoginForm = ( { loginFormData, updateLoginForm, login, handleSubmit, handleInputChange } ) => {

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
