import React, { Component } from 'react';
import './App.css';
import Buttons from "./Buttons";


import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleBox = this.toggleBox.bind(this);

    this.state = {
      animating: false,
    };
  }

  toggleBox() {
    this.setState({
      showBox: !this.state.showBox
    });
  }

  render() {
    return (

  <Router>
      <div className="App">

        <div className = "extension">
              <Buttons onClick={this.toggleBox}>
                      <img className = "logo"
                      src= "khlogo.png"/>
              </Buttons>
         </div>

         <CSSTransition
                in={this.state.showBox}
                timeout={500}
                classNames="box"
                unmountOnExit>
             <div className="box">
                       <button>Web Development</button>
                       <button>Design</button>
                       <button> 3D Modeling</button>
                       <button> Vr/Ar</button>
                   </div>
          </CSSTransition>

          <div className="NavigationBar">
            <button className = "Projects">Projects</button>
            <button className = "AboutMe">About Me</button>
            <button className = "MoreInfo">More Info</button>
          </div>

          <div className="Projects">
              <p>Project here</p>
              <p>Project here</p>
              <p>Project here</p>
              <p>Project here</p>
          </div>

          <div className="Footer">
              <p>Social Media Here</p>
          </div>
      </div>
  </Router>
    );
  }
}

export default App;
