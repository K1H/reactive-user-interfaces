import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      animating: false
    };
  }

  clicked() {
    this.setState({
      animating: true
    });
  }

  reset() {
    this.setState({
      animating: false
    });
  }

  render() {
    const class1 = this.state.animating ? "Button animate" : "Button";
    return (
      <button
        className={class1}
        onClick={this.clicked}
        onAnimationEnd={this.reset}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Buttons;
