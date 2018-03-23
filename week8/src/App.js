import React, { Component } from 'react';
import Form from './form'
import './App.css';


class App extends Component {

constructor(props) {
  super(props);
  this.state= {
    information:[
      {name:'Name', info:'more info'},
      {name:'Names', info:'more infos'},
      {name:'Namer', info:'more infer'}
    ]
  };
  this.spy = this.spy.bind(this);
}

spy(name, info){
    const copy = this.state.information.slice();
    copy.push({
      name: name,
      info: info
    });
    this.setState({
      information: copy
    });
}

  render() {
    const list = this.state.information.map(i => (
      <p key={i.name}>
        {i.name} - {i.info}
      </p>
    ));

    return (
      <div className="App">

        <h1> Power </h1>
        <Form onSubmit={this.spy} />
        {list}

      </div>
    );
  }
}

export default App;
