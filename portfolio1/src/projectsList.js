
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './ContactPage.css';

class projectsList extends Component {
  render() {
    return (
      <div className="projectsList">
        <h1>
          {this.props.projectsList.first} {this.props.projectsList.last}
        </h1>
        <p>{this.props.projectsList.email}</p>
        <Link to="/">Back to contact list</Link>
      </div>
    );
  }
}

export default projectsList;
