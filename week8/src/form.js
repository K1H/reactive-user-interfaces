import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      info: ''
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.infoChanged = this.infoChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

nameChanged(e) {
    this.setState({
      name: e.target.value
    });
}
infoChanged(e) {
    this.setState({
      info: e.target.value
    });
}
buttonClicked() {
    this.props.onSubmit(this.state.name, this.state.info);
    this.setState({
      name: '',
      info: ''
    });
}

render() {
return (
    <div className="Form">
      <h4>Spy here</h4>
        <input value={this.state.name} type="text" placeholder="Name" onChange={this.nameChanged}
        />
        <input
          value={this.state.info} type="text" placeholder="Info" onChange={this.infoChanged}
        />
        <button onClick={this.buttonClicked}>Save</button>
      </div>
    );
  }
}

export default Form;
