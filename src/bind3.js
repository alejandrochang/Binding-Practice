import React, { Component } from 'react';

class Bind3 extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello from Bind 3!' }

    this.getMessage = this.getMessage.bind(this);
  }

  getMessage = () => {
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h2>Button 3</h2>
        <input type="button" value="click 3" onClick={this.getMessage} />
      </div>
    );
  }
}

export default Bind3;