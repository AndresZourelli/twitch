import React from 'react';
import './TabNav.css'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Alerts from '../Alerts/Alerts';
import Designs from '../Design/Design';
import Equip from '../Equip/Equip';
import OBS from '../OBS/OBS';
import classnames from 'classnames';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';


const TabNav = ({route, OnRouteChange}) => {

  return(
  	<div>
    <Nav tabs className = 'TabContainer'>
    		<NavItem>
              <NavLink  className = 'NavTabs ' onClick={() => { OnRouteChange('Home') }}>Back</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className = {classnames({ active: route === 'Alerts' }, 'NavTabs')} onClick={() => { OnRouteChange('Alerts') }}>Alerts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === 'OBS' }, 'NavTabs')} onClick={() => { OnRouteChange('OBS') }}>OBS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === 'Equip' }, 'NavTabs')} onClick={() => { OnRouteChange('Equip') }}>Equip</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === 'Designs' }, 'NavTabs')} onClick={() => { OnRouteChange('Designs') }}>Design</NavLink>
            </NavItem>
          </Nav>
          <TabContent className="pageContent" activeTab={route} >
              <TabPane tabId="Alerts">
                
                <Route exact  path="/Alerts" component={Alerts}/>
              </TabPane>
              <TabPane tabId="OBS">
                <Route  exact  path="/OBS" component={OBS}/>
                
              </TabPane>
              <TabPane tabId="Designs">
                <Route  exact path="/Designs" component={Designs}/>
              </TabPane>
              <TabPane tabId="Equip">
                <Route  exact path="/Equip" component={Equip}/>
              </TabPane>
          </TabContent>
        </div>
    );
};

export default TabNav;