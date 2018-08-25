import React, { Component } from 'react';
import './App.css';
import Header from './Main/Header/Header';
import Footer from './Main/Footer/Footer';
import CardNav from './Main/CardNav/CardNav';
import TabNav from './Main/TabNav/TabNav';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: '',
    };
  }

  OnRouteChange = (route) => {
    this.setState({route: route});

  }




  RouteSwitch(param) {
    if(param === 'Alerts' || param === 'OBS' || param ==='Equip' || param==='Designs' ){
        return( <div>
                <TabNav route={this.state.route} OnRouteChange={this.OnRouteChange} />
                
                </div>
          );}
    else  
        return (<div>
                <CardNav route={this.state.route} OnRouteChange={this.OnRouteChange} />
                
                </div>

          ); 
  }

  

  render() {
    return (
      <Router>
      <div className='MainStyle'>
        <Header></Header>
        {this.RouteSwitch(this.state.route)}
        <Redirect to={"/"+this.state.route} />
        <Footer></Footer>
         {console.log(this.state.route)}
        <Switch>
          <Route exact path ="/"/>

        </Switch>
      </div>
      
      </Router>
    );
  }
}

export default App;
