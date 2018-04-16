import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './projectsList';

class App extends Component {

constructor(props) {
   super(props);
   this.state = {
     rotate: false,
     projectsList: [
       { first: 'First', last: 'Person', email: 'first@person.com', id: 1 },
       { first: 'Second', last: 'Person', email: 'second@person.com', id: 2 },
       { first: 'Third', last: 'Person', email: 'third@person.com', id: 3 }
     ]
   };
 }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"
            component={props => {
            return <HomePage projectsList={this.state.projectsList} />;
            }}
          />
          <Route
            path="/projectsList/:id"
            render={props => {
              // Find projects
              const projects = this.state.projectsList.find(
                c => c.id === parseInt(props.match.params.id)
              );

              // Pass to component as prop
              return <AboutMe projects={projects} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
