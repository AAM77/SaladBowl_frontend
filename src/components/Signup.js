import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from "../actions/currentUser.js";


const Styles = styled.div`
  .signup-form {
    display: inline-block;
    padding-bottom: 56px;
  }

  h3 {
    color: #efefef
  }
`;

const Signup = ( { loginFormData, updateLoginForm, login } ) => {

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
      <div className="signup-form">
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Enter Email" value={undefined} name="email" type="email" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter Username" value={undefined} name="username" type="text" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Enter Password" value={undefined} name="password" type="password" onChange={handleInputChange} />
          </Form.Group>

          <Button variant="primary" value="Log In" type="submit">
            Submit
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
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login }) (Signup);
