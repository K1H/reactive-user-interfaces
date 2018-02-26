import React, { Component } from 'react';

class input extends Component {

  render() {
    return (
      <div className="input">
      <input
               type="text"
               onChange={this.onChange}
               placeholder="Write something"
               value={this.state.message}
             />
             <p>{this.state.message}</p>
      </div>
    );
  }
}
export default input;
