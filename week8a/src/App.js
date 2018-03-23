import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.Submit=this.Submit.bind(this);

  let initialState = localStorage.getItem('appData');
     if (initialState) {
       this.state = JSON.parse(initialState);
     } else {
       this.state = {
        Todo:[]
       };
     }
   }

Submit(){
  let copy = this.state.Todo.slice();
   copy.push({
     Todo: 'Do something',
     id: this.state.Todo.length
   });

   this.setState({
     Todo: copy
   });
 }

componentDidUpdate() {
     localStorage.setItem('appData', JSON.stringify(this.state));
   }

render() {

const list = this.state.Todo.map(c => (
   <p key={c.id}>
     {c.Todo}
   </p>
 ));

  return (
    <div className="App">
    <h1>Todo List</h1>
    {list}
    <button onClick={this.Submit}> Submit </button>
    </div>
    );
  }
}

export default App;
