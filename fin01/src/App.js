import React, { Component } from 'react';
import './App.css';

import Buttons from "./Buttons";

import HomePage from './HomePage';
import WebDev from './WebDev';
import Design from './Design';
import modeling from './modeling';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactPage from './ContactPage';
import AboutMoi from './AboutMoi';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CSSTransition,TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {

    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.togglefunBox = this.togglefunBox.bind(this);
    this.toggleSocialMedia = this.toggleSocialMedia.bind(this);

    this.state = {
      animating: false,
    };
  }

  toggleBox() {
    this.setState({
      showBox: !this.state.showBox
    });
  }

  togglefunBox() {
    this.setState({
      showfunBox: !this.state.showfunBox
    });
  }

  toggleSocialMedia() {
    this.setState({
    socialMedia: !this.state.socialMedia
    });
  }

  render() {
    return (

  <Router>
      <div className="App">

          <Buttons className = "extension" onClick={this.toggleBox}>
                      <img className = "logo"
                      src= "/images/khlogo.png"/>
          </Buttons>

         <CSSTransition
                in={this.state.showBox}
                timeout={50}
                classNames="box"
                unmountOnExit>
             <div className="box">
              <Link to="/">Home</Link>
              <Link to="/WebDev">Web Development</Link>
              <Link to="/modeling">3D Modeling</Link>
              <Link to="/Design">Design</Link>
            </div>
          </CSSTransition>

          <div className="NavigationBar">
                <Link to="/Projects">Projects</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/ContactPage">Contact Info</Link>
          </div>

          <div className="Projects">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/WebDev" component={WebDev}/>
            <Route exact path="/modeling" component={modeling}/>
            <Route exact path="/Design" component={Design}/>

            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/AboutMe" component={AboutMe}/>
            <Route exact path="/ContactPage" component={ContactPage}/>

            <Route exact path="/AboutMoi" component={AboutMoi}/>
          </div>

          <div className="Footer">
              <button className = "button1">
              <img className = "icon" src= "/images/linkedin.svg"/>
              </button>
          </div>

          <div className="Games">
              <button class="funbutton" onClick={this.togglefunBox}></button>
              <button class="funbutton" onClick={this.toggleSocialMedia}></button>
              <button class="funbutton"></button>
          </div>
          <CSSTransition
                 in={this.state.showfunBox}
                 timeout={50}
                classNames="box"
                 unmountOnExit>
              <div className="funbox">
              <Link to="/AboutMoi">About Moi 2</Link>
             </div>
           </CSSTransition>

           <CSSTransition
                  in={this.state.socialMedia}
                  timeout={50}
                 classNames="box"
                  unmountOnExit>
               <div className="socialMedia">
                   <button className = "button1" >
                      <img className = "icon" src= "/images/twitter.svg"/>
                   </button>
                    <button className = "button1">
                      <img className = "icon" src= "/images/facebook.svg"/>
                   </button>
                   <button className = "button1">
                      <img className = "icon" src= "/images/instagram.svg"/>
                   </button>
                   <button className = "button1" onClick={this.toggleBox}>
                      <img className = "icon" src= "/images/others.svg"/>
                   </button>
              </div>
            </CSSTransition>

      </div>
  </Router>
    );
  }
}

export default App;
