import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Styles } from './SignupFormStyles.js';

const SignupForm = ( { signupFormData, updateSignupForm, signup, handleSubmit, handleInputChange } ) => {

  return(
    <Styles>
      <div className="signup-form">
        <Form onSubmit={(event) => handleSubmit(event)}>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Enter Email" value={signupFormData.email} name="email" type="email" onChange={(event) => handleInputChange(event)} required/>
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter Username" value={signupFormData.username} name="username" type="text" onChange={(event) => handleInputChange(event)} required/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Enter Password" value={signupFormData.password} name="password" type="password" onChange={(event) => handleInputChange(event)} required/>
          </Form.Group>

          <Button variant="primary" value="Create My Account" type="submit">
            Create My Account
          </Button>
        </Form>

        <br />

        <p>Already have an account? <Link to="/login">Sign In</Link></p>

      </div>
    </Styles>
  )
}

export default SignupForm;
