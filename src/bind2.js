import React, { Component } from 'react';

class Bind2 extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello from Bind 2!' }
  }

  getMessage(){
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h2>Button 2</h2>
        <input type="button" value="click 2" onClick={() => this.getMessage()} />
        {/* need to invoke the method or function */}
      </div>
    );
  }
}

export default Bind2;