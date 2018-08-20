import React, { Component } from 'react';
import './App.css';
import Header from './Main/Header/Header';
import CardNav from './Main/CardNav/CardNav';
import TabNav from './Main/TabNav/TabNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'OBS',
    }
  }


  OnRouteChange = (route) => {
    this.setState({route: route});

  }

  RouteSwitch(param) {
    if(param === 'Alerts' || param === 'OBS' || param ==='Equip' || param==='Design'){
        return <TabNav route={this.state.route} OnRouteChange={this.OnRouteChange}></TabNav>
      }
    else 
        return <CardNav  route={this.state.route} OnRouteChange={this.OnRouteChange} ></CardNav>
  }

  render() {
    return (
      <div className='MainStyle'>
        <Header></Header>
        {this.RouteSwitch(this.state.route)}
      </div>
    );
  }
}

export default App;
