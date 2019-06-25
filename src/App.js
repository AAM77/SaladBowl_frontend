import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.to_json)
      .then()
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }

}

export default App;
