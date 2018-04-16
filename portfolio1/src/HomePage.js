
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './HomePage.css';

class HomePage extends Component {
  render() {
    <div  className = "NavigationBar">
      <h1>Projects</h1>
    </div>

    const project = this.props.projectsList.map(c => (
      <div className="project" key={'project' + c.id}>
        <h2>
          {c.first} {c.last}
        </h2>
        <p>{c.email}</p>
        <Link to={'/project/' + c.id}>Go to person</Link>
      </div>
    ));
    return <div className="HomePage">{project}</div>;
  }
}
export default HomePage;
