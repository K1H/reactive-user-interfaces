import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {

constructor(props) {
   super(props);

   this.onSearch = this.onSearch.bind(this);
   this.sortByNameUp = this.sortByNameUp.bind(this);
   this.sortByNameDown = this.sortByNameDown.bind(this);
   this.filterCountry = this.filterCountry.bind(this);

   this.state = {
     search: '',
     filter: ''
   };
}
onSearch(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    });
}
sortByNameUp() {
      this.setState({
        sort: 'nameUP'
      });
}
sortByNameDown() {
      this.setState({
        sort: 'nameDOWN'
      });
}
filterCountry(f) {
    this.setState({
      filter: f.target.value.toLowerCase()
    });
}
  render() {

    let changedContact = this.props.ContactInformation.slice();

    if (this.state.search !== '') {
         changedContact = changedContact.filter(contact =>
           contact.first.toLowerCase().match(this.state.search)  ||
           contact.last.toLowerCase().match(this.state.search) ||
           contact.email.toLowerCase().match(this.state.search) ||
           contact.nickname.toLowerCase().match(this.state.search) ||
           contact.phone.toLowerCase().match(this.state.search) 
         );
     }
    if (this.state.sort === 'nameUP') {
        changedContact = changedContact.sort(
          (contactA, contactB) => contactA.first > contactB.first
        );
    }
    else if (this.state.sort === 'nameDOWN') {
        changedContact = changedContact.sort(
          (contactB, contactA) => contactB.last > contactA.last
          );
    }

    if (this.state.filter !== '') {
      changedContact = changedContact.filter(contact =>
        contact.country.toLowerCase().match(this.state.filter)
      );
    }


    const tags = changedContact.map((contact, i) => {
        return (
          <div className="solo">
          <Link to = {/Contact/ + contact.id}><div key={i}>{contact.first} {contact.last} </div></Link>
          </div>
      );
      });

    return <div className="HomePage">
      <div className="controls">

        <input type="text" placeholder="Search" onChange={this.onSearch} />

            <div className="sorting">
              <button className="dropbtn">Sort</button>
               <div className="dropdown-content">
                   <button onClick={this.sortByNameUp}>Sort by First Name</button>
                   <button onClick={this.sortByNameDown}>Sort by Last Name</button>
                </div>
              </div>

              <div className="filtering">
                <button className="dropbtn">Filter</button>
                 <div className="dropdown-content">
                    <input type="text" placeholder="Country" onChange={this.filterCountry} />
                  </div>
                </div>
      </div>

      <div className="contacts">
       {tags}
     </div>

    </div>;
  }
}

export default HomePage;
