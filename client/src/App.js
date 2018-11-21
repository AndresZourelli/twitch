import React, { Component } from 'react';
import './App.css';
import Header from './Main/Header/Header';
import Footer from './Main/Footer/Footer';
import Alerts from './Main/Alerts/Alerts';
import Designs from './Main/Design/Design';
import Equip from './Main/Equip/Equip';
import OBS from './Main/OBS/OBS';
import Tips from './Main/Tips/Tips';
import Streamer from './Main/Streamer/Streamer';
import Home from './Home';
import Sidedrawer_OBS from './Main/OBS/Sidedrawer_OBS';
import Register from './Main/Register_Form/Register_form';
import Reset from './Main/Reset/Reset';
import PassReset from './Main/PasswordReset/PassReset';
import Verify from './Main/Verify/Verify';
import ErrorNotFound from './Main/ErrorNotFound/ErrorNotFound';
import "./Home.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from 'react-router-dom';


class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
      <div className='MainStyle'>
        <Header></Header>
        <Route path ="/" component={Home}/>
        <Switch>
          <Route   path="/Alerts" component={Alerts}/>
          <Route   path="/OBS" component={OBS}/>
          <Route   path="/Designs" component={Designs}/>
          <Route   path="/Equip" component={Equip}/>
          <Route   path="/Streamer" component={Streamer}/>
          <Route   path="/Tips" component={Tips}/>
          <Route   path="/register" component={Register} />
          <Route   exact path="/reset" component={Reset} />
          <Route   path="/reset/:token" component={PassReset} />
          <Route   path="/verify/:emailtoken" component={Verify} />
          <Route   path ="/Home"/>
          <Route path="*" component={ErrorNotFound}/>
        </Switch>
     
        <Footer></Footer>
      </div>
      
      </Router>
    );
  }
}

export default App;
