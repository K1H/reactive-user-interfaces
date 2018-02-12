import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            clicked: ""
        }
    }

    buttonClicked(buttonText) {
        this.setState({
            clicked: buttonText
        })
    }

    render() {
        return (
            <div id="container">
                <div id="buttons">
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>First Button</Button>
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>Second Button</Button>
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>Third Button</Button>
                </div>
                <div id="textbox">
                    {this.state.clicked ? 'You have selected: ' + this.state.clicked : 'The choice is yours'}
                </div>
            </div>

        );
    }
}

export default App;
