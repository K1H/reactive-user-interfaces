import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ContactInformation: [
        {
          first: 'Kilian',
          last: 'Hauser',
          email: 'k@nyu.edu',
          nickname: 'K',
          country: 'Nowhere',
          id: 1
        },
        {
          first: 'Paloma',
          last: 'Hauser',
          email: 'Noneofyourbusiness@no.com',
          nickname: 'Lama',
          country: 'Nowhere',
          id: 2
        },
        {
          first: 'Harald',
          last: 'Hauser',
          email: 'Nacholibre@ja.com',
          nickname: 'Dipstick',
          country: 'Nowhere',
          id: 3
        },
        {
          first: 'Anna',
          last: 'Hauser',
          email: 'computernocomprende@no.no',
          nickname: 'Ogre',
          country: 'Nowhere',
          id: 4
        },
        {
          first: 'Cameron',
          last: 'Shetler',
          email: 'noclue1337@nyu.edu',
          nickname: 'Ron',
          country: 'Nowhere',
          id: 5
        },
        {
          first: 'Rune',
          last: 'Madsen',
          email: 'BoCofounder@mew.co',
          nickname: 'Fake',
          country: 'Denmark',
          id: 6
        },
        {
          first: 'Rune',
          last: 'Madsen',
          email: 'silenceis@virus.tehe',
          nickname: 'Pro-f',
          country: 'Nowhere',
          id: 7
        },
        {
          first: 'Ivana',
          last: 'Shakemahbooty',
          email: 'smilie@you.yes',
          nickname: 'Joker',
          country: 'Russia',
          id: 8
        },
        {
          first: 'Alpha',
          last: 'Kenny',
          email: 'childishhumor@me.us',
          nickname: 'Badjoke',
          country: 'Turkey',
          id: 9
        },
        {
          first: 'Normal',
          last: 'Persons',
          email: 'Normal@person.com',
          nickname: 'nick',
          country: 'United States of America',
          id: 10 }
      ]
    };
  }

  render() {

    return (

      <Router>
        <div className="App">

        <style>
        @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
        </style>

          <Route exact path="/" component={props => {
            return <HomePage ContactInformation={this.state.ContactInformation} />;
            }}
          />
          <Route exact path="/Contact/:id"
            render={props => {
              const contact = this.state.ContactInformation.find(
                contact => contact.id === parseInt(props.match.params.id)
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
