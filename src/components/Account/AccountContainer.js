import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getCurrentUser } from '../../actions/session.js';
import { updateAccountForm } from '../../actions/accountForm.js';
import { updateAccountDetails, deleteAccount } from '../../actions/userAccount.js';
import { connect } from 'react-redux';
import { Styles } from './AccountContainerStyles.js';

class AccountContainer extends Component {

  handleOnChange = (event) => {

    const { name, value } = event.target;
    const updatedAccountInfo = {
      ...this.props.accountDetails,
      [name]: value
    }

    this.props.updateAccountForm(updatedAccountInfo);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.updateAccountDetails(this.props.accountDetails, this.props.currentUser.id, this.props.history);
  }

  handleDeleteAccount = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete your account? This action is IRREVERSIBLE!')) {
      this.props.deleteAccount(this.props.currentUser.id, this.props.history)
    }
  }

  render() {
    return(
      <Styles>
        { this.props.currentUser ?

          <div className="account-form">
            <h1>{this.props.currentUser.username} Account Details</h1>
            <br />
            <Form onSubmit={(event) => this.handleOnSubmit(event)}>
              <h4>Authentication</h4>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter an email" defaultValue={this.props.currentUser.email} name="email" type="email" onChange={(event) => this.handleOnChange(event)} required />
              </Form.Group>

              <h4>Personal Information</h4>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" defaultValue={this.props.currentUser.first_name} name="first_name" type="text" onChange={(event) => this.handleOnChange(event)} />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" defaultValue={this.props.currentUser.last_name} name="last_name" type="text" onChange={(event) => this.handleOnChange(event)} />
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Address" defaultValue={this.props.currentUser.address} name="address" type="text" onChange={(event) => this.handleOnChange(event)} />
              </Form.Group>

              <Form.Group controlId="formBasicZipcode">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control placeholder="Zipcode" defaultValue={this.props.currentUser.zipcode} name="zipcode" type="text" onChange={(event) => this.handleOnChange(event)} />
              </Form.Group>

              <Button variant="primary" defaultValue="Update Details" type="submit">
                Update
              </Button>
            </Form>

            <br />

            <Button variant="danger" onClick={(event) => this.handleDeleteAccount(event)}>Delete Account</Button>
          </div>
          :
          <p>No One is Logged In</p>
        }
      </Styles>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    accountDetails: state.accountForm
   }
}

export default connect(mapStateToProps, { getCurrentUser, updateAccountForm, updateAccountDetails, deleteAccount })(AccountContainer);
