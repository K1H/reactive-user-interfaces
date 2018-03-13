
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      search: "",
      };

  this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
          this.setState({
            search: e.target.value
          });
    }

  render() {
    let ArrayCopy = this.props.contacts.slice();

    if (this.state.search !== '') {
        ArrayCopy = ArrayCopy.filter(contact =>
        contact.first.match(this.state.search) ||
        contact.last.match(this.state.search) ||
        contact.email.match(this.state.search) ||
        contact.nickname.match(this.state.search) ||
        contact.city.match(this.state.search) ||
        contact.id.match(this.state.search)
        );
    }

    let tags = ArrayCopy.map((contact, i) => {
    return <div key={i}>
      <p>{contact.first} {contact.last}</p>
    </div>;
  });

  return (
      <div className="Search">
        <div className="controls">
          <input type="text" placeholder="Search" onChange={this.onSearch} />
        </div>
        {tags}
      </div>
    );

    const contactList = this.props.contacts.map(contactid => (
      <div className="contact" key={'contact' + contactid.id}>
        <h2>
          {contactid.first} {contactid.last}
        </h2>
        <Link to={'/contacts/' + contactid.id}>More</Link>
      </div>
    ));
    return <div className="HomePage">{contactList}</div>;
  }
}

export default HomePage;
