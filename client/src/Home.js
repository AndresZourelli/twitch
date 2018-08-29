import React, { Component } from 'react';
import './App.css';

import CardNav from './Main/CardNav/CardNav';
import TabNav from './Main/TabNav/TabNav';
import NavButton from './Main/NavButton/NavButton';

import {
  Redirect
} from 'react-router-dom';

var i = 0;
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
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  this.setState({route: nextProps.location.pathname});
  }
  RouteSwitch(param) {
    if(param === '/Alerts' || param === '/OBS' || param ==='/Equip' || param==='/Designs' || param==='/Tips' || param==='/Streamer' ){
        return( <div className="newwidth"> 
                <TabNav className ="TabNav_State" route={this.state.route} OnRouteChange={this.OnRouteChange} />
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
