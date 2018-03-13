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
        <p>Email: {this.props.contact.email}</p>
        <p>Nickname: {this.props.contact.nickname}</p>
        <p>Country: {this.props.contact.country}</p>
        <Link to="/">Back to Contact List</Link>
      </div>
    );
  }
}

export default ContactPage;
