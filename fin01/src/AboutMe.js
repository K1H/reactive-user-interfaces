import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="introduction">
        <h1>
            Kilian Hauser
        </h1>
        <p>about me</p>
        <p>more about me</p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default AboutMe;
