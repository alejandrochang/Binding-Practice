import React, { Component } from 'react';

class Bind4 extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello from Bind 4!' }
  }

  getMessage() {
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h2>Button 4</h2>
        <input type="button" value="click 4" onClick={this.getMessage.bind(this)} />
        {/* Bind in render */}
      </div>
    );
  }
}

export default Bind4;