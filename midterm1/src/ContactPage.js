import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <h1>
          {this.props.contact.first} {this.props.contact.last}
        </h1>
        <p>Email Address: {this.props.contact.email}</p>
        <p>Nickname: {this.props.contact.nickname}</p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default ContactPage;
