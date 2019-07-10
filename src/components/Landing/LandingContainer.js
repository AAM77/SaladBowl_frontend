import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import simpleSalad from '../../assets/images/simple_salad_bowl.jpg';
import { Styles } from './LandingContainerStyles.js';


class LandingContainer extends Component {

  render() {
    const {
      currentUser,
      history
    } = this.props

    return(
      <Styles>
        <div>
          <h1>Welcome to SaladBowl!</h1>
          <br />
          <img src={simpleSalad} alt='a simple salad bowl' />
          <br />
          <h3>Let us help you decide what to have for breakfast, lunch, and dinner!</h3>
          <br />
          {currentUser ? history.push(`/users/${currentUser.id}`) : <h3>Please Sign in</h3>}
        </div>
      </Styles>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps) (LandingContainer));
