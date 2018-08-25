import React, { Component } from 'react';
import './App.css';
import Header from './Main/Header/Header';
import Footer from './Main/Footer/Footer';
import Alerts from './Main/Alerts/Alerts';
import Designs from './Main/Design/Design';
import Equip from './Main/Equip/Equip';
import OBS from './Main/OBS/OBS';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,

  Switch,
 
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
      <div className='MainStyle'>
        <Header></Header>
        <Route path ="/" component={Home}/>
        <Switch>
          <Route   path="/Alerts" component={Alerts}/>
          <Route    path="/OBS" component={OBS}/>
          <Route   path="/Designs" component={Designs}/>
          <Route   path="/Equip" component={Equip}/>
        </Switch>
        <Footer></Footer>
      </div>
      
      </Router>
    );
  }
}

export default App;
