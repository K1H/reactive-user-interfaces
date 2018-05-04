import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Design.css';

class Design extends Component {
  render() {

    return <div className="Design">
        <div className="DesignProject1">
          <h1>Personal Logo</h1>
          <p>The desire and arguably need for an identity is an age old question. How do we identify oneself and ones doing but more importaintly why do we need to? Building onto recognition, is it the word that has meaning, or is it the meaning we add to the word? There are so many philosophical questions that go behind brands and naming so I wanted to create a brand name myself to explore the difficulties associated with them. </p>
          <img className="logo2" src= "/images/khlogo.png"/>
          <h3>Read More</h3>
        </div>


        <div className="DesignProject2">
        <h1>Portfolio</h1>
        <p>"'Do or do not, there is no try' -Yoda. Simply put, you can either do things or you cannot, the follow up question is how proficient you are at it. As much as people can talk about things, words are cheap but there is no better proof than displaying what you can currently do. This website is designed to act as my current online portfolio, display my current web development and design skillset, as well as shed some light about me!   "</p>
        <h3>Read More</h3>
        </div>

        <div className="DesignProject3">
        <h1>More Stuff</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <h3>Read More</h3>
        </div>

    </div>;
  }
}

export default Design;
