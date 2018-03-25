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

   this.FirstChanged = this.FirstChanged.bind(this);
   this.LastChanged = this.LastChanged.bind(this);
   this.emailChanged = this.emailChanged.bind(this);
   this.nicknameChanged = this.nicknameChanged.bind(this);
   this.countryChanged = this.countryChanged.bind(this);
   this.phoneChanged = this.phoneChanged.bind(this);
   this.buttonClicked = this.buttonClicked.bind(this);

   this.state = {
     first: '',
     last: '',
     email: '',
     nickname: '',
     country: '',
     phone: '',
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

FirstChanged(e) {
    this.setState({
      first: e.target.value
    });
  }
LastChanged(e) {
      this.setState({
        last: e.target.value
      });
  }
emailChanged(e) {
    this.setState({
      email: e.target.value
    });
  }
nicknameChanged(e){
    this.setState({
      nickname: e.target.value
    });
  }
countryChanged(e){
    this.setState({
      country: e.target.value
    });
  }
phoneChanged(e){
      this.setState({
        phone: e.target.value
      });
    }

buttonClicked() {
    this.props.onSubmit(this.state.first, this.state.last, this.state.nickname, this.state.country, this.state.phone, this.state.email, );
    this.setState({
      first: '',
      last: '',
      email: '',
      nickname: '',
      country: '',
      phone: ''
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
                    <input type="text" placeholder="" onChange={this.filter} />
                  </div>
                </div>
      </div>

      <div className="contacts">
       {tags}
     </div>

     <div className="Adding">
       <button className="dropbtn">Add Contact</button>
          <div className="dropdown-content">
              <input type="text" placeholder="first name" onChange={this.FirstChanged} />
              <input type="text" placeholder="last name" onChange={this.LastChanged} />
              <input type="text" placeholder="Email Address" onChange={this.emailChanged} />
              <input type="text" placeholder="Nickname" onChange={this.nicknameChanged} />
              <input type="text" placeholder="Country" onChange={this.countryChanged} />
              <input type="number" placeholder="phone" onChange={this.phoneChanged} />
              <button onClick={this.buttonClicked}>Add</button>
           </div>
       </div>

    </div>;
  }
}

export default HomePage;
