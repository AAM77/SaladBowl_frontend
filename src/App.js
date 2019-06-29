import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import LoginPage from './components/LoginPage.js';
import RegistrationPage from './components/RegistrationPage.js';
import About from './components/About.js';
import UserPage from './components/UserPage.js';
import Account from './components/Account.js';
import SaladBars from './components/SaladBars.js';
import SaladBowls from './components/SaladBowls.js';
import NoMatch from './components/NoMatch.js';
import Layout from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import { BackgroundJumbotron } from './components/Jumbotron.js';
import Background from './components/Background.js';

import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <React.Fragment>
          <Router>
            <NavigationBar />
            <BackgroundJumbotron />
            <Background />
            <Layout>
              <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/register" component={RegistrationPage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/account" component={Account} />
                  <Route exact path="/salad_bars" component={SaladBars} />
                  <Route exact path="/salad_bowls" component={SaladBowls} />
                  <Route exact path="/users/:id" component={UserPage} />
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

export default connect(mapStateToProps, { getCurrentUser }) (App);
