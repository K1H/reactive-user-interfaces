import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './home.js'


class App extends Component {

  render() {
    return (
      <Router>

        <div className= "App">
          <header> <Link to = "/home">Home</Link> </header>

        <div className= "pages">
        <Route exact path = "/" compnent = {home} />

        </div>
      </Router>
    );
  }
}

export default App;
