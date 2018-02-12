import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.Clickme = this.Clickme.bind(this);
    }

    Clickme() {
        this.props.onClick(this.props.children);
    }

    render() {
        return (
            <button type="button" className={'button' + (this.props.children === this.props.selected ? ' button-active' : '')} onClick={this.Clickme}>{this.props.children}</button>
        );
    }
}

export default Button;
