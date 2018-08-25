import React, { Component } from 'react';
import './App.css';

import CardNav from './Main/CardNav/CardNav';
import TabNav from './Main/TabNav/TabNav';

import {
  Redirect
} from 'react-router-dom';


class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.location.pathname,
    }
    console.log(this.state.route)

  }

  OnRouteChange = (route) => {
    this.setState({route: route});

  }

  RouteSwitch(param) {
    if(param === '/Alerts' || param === '/OBS' || param ==='/Equip' || param==='/Designs' ){
        return( <div className="newwidth"> 
                <TabNav route={this.state.route} OnRouteChange={this.OnRouteChange} />
      
              <Redirect push to={this.state.route}/>
                </div>
              );}
    else
        return (<div><CardNav route={this.state.route} OnRouteChange={this.OnRouteChange}  />

               <Redirect push to="/Home"/>
                </div>
                ); 
  }
  render() {
    return (
      <div className='MainStyle'>
        <div className='center'>
        {this.RouteSwitch(this.state.route)}
        </div>
      </div>
    );
  }
}

export default Home;
