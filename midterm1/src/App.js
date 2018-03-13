import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      contacts:
      [
        {
          first: 'Kilian',
          last: 'Hauser',
          email: 'kh1916@nyu.edu',
          nickname: 'k',
          city: 'Nowhere',
          id: 1
        },

        {
          first: 'Paloma',
          last: 'Hauser',
          email: 'Noneofyourbusiness@no.com',
          nickname: 'Loma',
          city: 'Nowhere',
          id: 2
        },

        {
          first: 'Harald',
          last: 'Hauser',
          email: 'Nacholibre@ja.com',
          nickname: 'Dipstick',
          city: 'Nowhere',
          id: 3
        },

        {
          first: 'Anna',
          last: 'Hauser',
          email: 'computernocomprende@no.no',
          nickname: 'Ogre',
          city: 'Nowhere',
          id: 4
        },

        {
          first: 'Cameron',
          last: 'Shetler',
          email: 'noclue1337@nyu.edu',
          nickname: 'Ron',
          city: 'Nowhere',
          id: 5
        },

        {
           first: 'Rune',
           last: 'Madsen',
           email: 'BoCofounder@mew.co',
           nickname: 'Fake',
           city: 'Nowhere',
           id: 6
         },

        {
          first: 'Ivana',
          last: 'Shakemahbooty',
          email: 'smilie@you.yes',
          nickname: 'Joker',
          city: 'Nowhere',
          id: 7
        },

        {
          first: 'Rune',
          last: 'Madsen',
          email: 'silenceis@virus.tehe',
          nickname: 'Prof',
          city: 'Nowhere',
          id: 8
        },

        {
          first: 'Alpha',
          last: 'Kenny',
          email: 'childishhumor@me.us',
          nickname: 'Badjoke',
          city: 'Nowhere',
          id: 9
        },

        {
          first: 'Normal',
          last: 'Persons',
          email: 'Normal',
          nickname: 'nick',
          city: 'Nowhere',
          id: 10
        }]
    };
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" render={props => {
            return <HomePage contacts={this.state.contacts} />;
            }}
          />

          <Route path="/contacts/:id" render={props => {
            const contact = this.state.contacts.find(
              contactid => contactid.id === parseInt(props.match.params.id)
              );
              return <ContactPage contact={contact} />;
            }}
          />
        </div>
        </Router>
    );
  }
}

export default App;
