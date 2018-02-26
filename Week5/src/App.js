import React, { Component } from 'react';
import './App.css';
import input from './input'

class App extends Component {

constructor(props){
  super(props);
  this.onChange = this.onChange.bind(this);
   this.state = {
     message: ''
      };
 }

 onChange(e) {
   let txt = e.target.value;
   txt = txt.replace('fuck', 'Your Mom');
   this.setState({
     message: txt
   });
 }

  render() {
    return (
      <input type= 'text' onChange = {this.onChange} value = {this.state.message}/>
  );
}}

export default App;
