import React, { Component } from 'react';
import './App.css';
import info from './info.js';

class App extends Component {

constructor(props){
  super(props);
  this.props.info = props.info.bind(this);
  this.state = {
    info: text
  };
}



  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
