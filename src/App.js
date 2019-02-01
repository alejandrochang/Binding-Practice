import React, { Component } from 'react';
import Bind1 from './bind1';
import Bind2 from './bind2';
import Bind3 from './bind3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bind1 />
        <Bind2 />
        <Bind3 />
      </div>
    );
  }
}

export default App;
