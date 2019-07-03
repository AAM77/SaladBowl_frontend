import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/currentUser.js';

import About from '../About/About.js';
import LandingContainer from '../Landing/LandingContainer.js';
import SignupContainer from '../Signup/SignupContainer.js';
import LoginContainer from '../Login/LoginContainer.js';
import UserHomeContainer from '../UserHome/UserHomeContainer.js';
import AccountContainer from '../Account/AccountContainer.js';
import SaladBars from '../Options/SaladBars.js';
import SaladBowls from '../Options/SaladBowls.js'; //THIS IS SIMILAR TO THE OPTIONS PAGE... REPLACE or INSERT INTO OPTIONS PAGE
import OptionsContainer from '../Options/OptionsContainer.js';
import NoMatch from '../NoMatch/NoMatch.js';
import Layout from '../Layout/Layout.js';
import NavigationBarContainer  from '../NavigationBar/NavigationBarContainer.js';
import { BackgroundJumbotron } from '../Layout/Jumbotron.js';
import Background from '../Layout/Background.js';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <React.Fragment>
          <Router>
            <NavigationBarContainer />
            <BackgroundJumbotron />
            <Background />
            <Layout>
              <Switch>
                  <Route exact path="/" component={LandingContainer} />
                  <Route exact path="/login" component={LoginContainer} />
                  <Route exact path="/register" component={SignupContainer} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/account" component={AccountContainer} />
                  <Route exact path="/salad_bars" component={SaladBars} />
                  <Route exact path="/salad_bowls" component={SaladBowls} />
                  <Route exact path="/users/:id" component={UserHomeContainer} />
                  <Route exact path="/options" component={OptionsContainer} />
                  <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
      </React.Fragment>

    );
  }
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser }) (App));
