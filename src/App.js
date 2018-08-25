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

      route: 'Home',
    }


  }

  OnRouteChange = (route) => {
    this.setState({route: route});

  }




  RouteSwitch(param) {
    if(param === 'Alerts' || param === 'OBS' || param ==='Equip' || param==='Designs' ){
        return( <TabNav route={this.state.route} OnRouteChange={this.OnRouteChange} />
                
                
          );}
    else  
        return ( <CardNav route={this.state.route} OnRouteChange={this.OnRouteChange} />
                
                

          ); 
  }

  

  render() {
    return (
      <Router>
      <div className='MainStyle'>
        <Header></Header>
        <div className='center'>
        {this.RouteSwitch(this.state.route)}

        </div>

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
