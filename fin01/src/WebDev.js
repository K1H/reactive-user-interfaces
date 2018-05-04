import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WebDev.css';

class WebDev extends Component {
  render() {

    return <div className="WebDev">

      <div className="WebDevProject1">
        <h1>Filler Info</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <h3>Read More</h3>
      </div>


      <div className="WebDevProject2">
      <h1>Reactive User Interfaces</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <h3>Read More</h3>
      </div>

      <div className="WebDevProject3">
      <h1>More Stuff</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <h3>Read More</h3>
      </div>

      </div>;
  }
}

export default WebDev;
