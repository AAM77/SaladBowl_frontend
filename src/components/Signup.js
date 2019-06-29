import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from "../actions/newUser.js";


const Styles = styled.div`
  .signup-form {
    display: inline-block;
    padding-bottom: 56px;
  }

  h3 {
    color: #efefef
  }
`;

const Signup = ( { signupFormData, updateSignupForm, signup } ) => {

  const handleInputChange = event => {

    const { name, value } = event.target

    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData);
  }


  return(
    <Styles>
      <div className="signup-form">
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Enter Email" value={signupFormData.email} name="email" type="email" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter Username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Enter Password" value={signupFormData.password} name="password" type="password" onChange={handleInputChange} />
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

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup }) (Signup);
