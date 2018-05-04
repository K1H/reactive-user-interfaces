import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './modeling.css';

class modeling extends Component {
  render() {

    return <div className="modeling">

    <div className="ModelingProject1">
      <h1>Filler Info</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
      <h3>Read More</h3>
    </div>

    <div className="ModelingProject2">
    <h1>Reactive User Interfaces</h1>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
    <h3>Read More</h3>
    </div>

    <div className="ModelingProject3">
    <h1>More Stuff</h1>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
    <h3>Read More</h3>
    </div>

    </div>;
  }
}

export default modeling;
