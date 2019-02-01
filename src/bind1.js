import React, { Component } from 'react';

class Bind1 extends Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello from Bind 1!'}
  }

  // arrow function
  getMessage = () => {
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h2>Button 1</h2>
        <input type="button" value="click" onClick={this.getMessage} />
      </div>
    );
  }
}

export default Bind1;