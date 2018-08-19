import React, { Component } from 'react';
import Header from './Main/Header';
import Cards from './Main/NavigationCards';
import Alerts from './Main/Alerts/Alerts';
import Designs from './Main/Design/Design';
import Equip from './Main/Equip/Equip';
import OBS from './Main/OBS/OBS';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    }
  }


  OnRouteChange = (route) => {
    this.setState({route: route});

  }

  RouteSwitch(param) {
    switch(this.state.route) {

      case 'Alerts':
          return <Alerts></Alerts>
          
      case 'Design':
          return <Designs></Designs>
          
      case 'Equip':
          return <Equip></Equip>
          
      case 'OBS':
          return <OBS></OBS>
          

      default: 
          return <Cards  OnRouteChange={this.OnRouteChange} ></Cards>
        
  }
}

  render() {
    return (
      <div>
        <Header></Header>
        
        {this.RouteSwitch(this.state.route)}
      </div>
    );
  }
}

export default App;
