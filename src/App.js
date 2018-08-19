import React, { Component } from 'react';
import Header from './Main/Header';
import Cards from './Main/NavigationCards';
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Cards></Cards>
      </div>
    );
  }
}

export default App;
