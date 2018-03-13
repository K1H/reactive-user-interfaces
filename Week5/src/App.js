import React, { Component } from 'react';
import './App.css';

class App extends Component
{

constructor (props){
  super(props);
  this.sortdown=this.sortdown.bind(this);
  this.sortup=this.sortup.bind(this);
  this.filter=this.filter.bind(this);
  this.onSearch = this.onSearch.bind(this);

  this.state = {
    Contactinfo: [
      {username: 'Kilian', body: 'This is the first tweet'},
      {username: 'Kilian', body: 'This is the second tweet'},
      {username: 'Kilian', body: 'This is the third tweet'},
      {username: 'Kilian', body: 'This is the fourth tweet'}
    ]
  };
  }

sortdown(){
  this.setState({
     sort: 'asc'
   });
}

sortup(){
  this.setState({
       sort: 'desc'
     });
}

filter(){
  this.setState({
       sort: 'filter'
     });
}

onSearch(e){
  this.setState({
      search: e.target.value
    });
}

  render() {

    let arrCopy = this.state.Contactinfo.slice();

       if(this.state.sort === 'desc'){
         arrCopy.reverse();
       }
       if(this.state.sort === 'filter'){
         arrCopy= arrCopy.filter(tweet =>{
           return tweet.body.match('first');
         });
       }
       if (this.state.search !== '') {
          arrCopy = arrCopy.filter(tweet =>
          tweet.body.match(this.state.search)
          );
         }

    const tags = arrCopy.map((tweet,i) => {
      return(
        <div key = {i}>
        @{tweet.username} said: {tweet.body}
        </div>
      );
    });

    return (
      <div className="App">
      <div className = "Controls">

      <button onClick = {this.sortdown}>Ascending</button>
      <button onClick = {this.sortup}>Descending</button>
      <button onClick = {this.filter}>Filter</button>
      <input type="text" placeholder="Search" onChange={this.onSearch} />
      </div>
      {tags}</div>
    );
  }
}
export default App;
