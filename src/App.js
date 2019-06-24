import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.to_json)
      .then()
  }
  render() {
    return (
      <div>
        "Hello, I'm React"
      </div>
    );
  }

}

export default App;
