import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        {
          currentUser ? history.push(`/users/${currentUser.id}`) :
          <div>
            <h1>Welcome to SaladBowl!</h1>
            <br />
            <img src={simpleSalad} alt='a simple salad bowl' />
            <br />
            <h3>Let us help you decide what to have for breakfast, lunch, and dinner!</h3>
            <br />
          </div>
        }
      </Styles>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps) (LandingContainer);
