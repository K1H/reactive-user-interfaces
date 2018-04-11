import React, { Component } from 'react';
import {Link} from "react-router-dom"

class homepage extends Component {

  constructor(props){
  super(props);
  this.state= {
    isLoading:true,
    people: []
  };
}

componentDidMount(){
  fetch("https://swapi.co/api/people/")
  .then(response =>{
    return response.json();
  })
  .then(json => {
    console.log(json)
    this.setState({
      isLoading:false,
      people: json.results
    });
  });
}

render() {
  if (this.state.isLoading){
      return <p>Loading... </p>
      }

  const list = this.state.people.map( p => {
  const splitUrl = p.url.split("/");
  const id = splitUrl[splitUrl.length-2];
        return (
            <div key = {p.url}>
              <h3>{p.name}</h3>
              <Link to={"/people/" + id}>Visit me</Link>
            </div>
            );
        });
        return <div>{list}</div>
  }
}

export default homepage;
