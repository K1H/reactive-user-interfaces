import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import './App.css';

class App extends Component {

constructor(props) {
   super(props);
   this.clicked = this.clicked.bind(this);
   this.reset = this.reset.bind(this);
   this.state = {
    animating: false,
     projectsList: [
       { title: 'First', id: 1 },
       { title: 'Second', id: 2 },
       { title: 'Third', id: 3 }
     ]
   };
 }

 clicked() {
    this.setState({
      animating: true
    });
  }

  reset() {
    this.setState({
      animating: false
    });
  }

  render() {
    return (
      <Router>
        <div className="App">

             <div className="NavigationBar">
               <button className = "LogoButton" onClick={this.rotatedown}>
               <img src= "18khlogo800x800.png"/>
               </button>

               <button>Projects</button>
               <button>About Me</button>
            </div>

            <div className="Content">
                <p>Project 1</p>
                <p>Project 2</p>
                <p>Project 3</p>
           </div>


        </div>
      </Router>
    );
  }
}

export default App;
