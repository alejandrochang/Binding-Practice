import React, { Component } from 'react';
import Bind1 from './bind1';
import Bind2 from './bind2';
import Bind3 from './bind3';
import Bind4 from './bind4';

class App extends Component {
  render() {
    return (
      <div className="App">
        4 Methods: Bind in Render, Use arrow function in render, Use arrow function on the function, bind on the constructor
        <Bind1 />
        <Bind2 />
        <Bind3 />
        <Bind4 />
      </div>
    );
  }
}

export default App;
