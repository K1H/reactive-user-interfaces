import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

import './App.css';

class App extends Component {

constructor(props) {
   super(props);
   this.toggleBox = this.toggleBox.bind(this);

   this.state = {
     showBox: false,
     projectsList: [
       { title: 'First', id: 1 },
       { title: 'Second', id: 2 },
       { title: 'Third', id: 3 }
     ]
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

             <div className="NavigationBar">
               <button className = "Buttons" onClick={this.toggleBox}>
               <img src= "18khlogo800x800.png"/>
               </button>

               <CSSTransition
              in={this.state.showBox}
              timeout={300}
              classNames="box"
              unmountOnExit
              >
              <div className="box">Hello!</div>
              </CSSTransition>

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
