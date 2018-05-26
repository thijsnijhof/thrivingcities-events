import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Event from './components/Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
          <Event />
          <Event />
          <Event />

      </div>
    );
  }
}

export default App;
