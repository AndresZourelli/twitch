import React from 'react';
import './TabNav.css'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


const TabNav = ({route, OnRouteChange}) => {

  return(
  	<div>
    <Nav tabs className = 'TabContainer'>
    		<NavItem>
              <NavLink  className = 'NavTabs ' onClick={() => { OnRouteChange('/Home') }}>Back</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className = {classnames({ active: route === '/Alerts' }, 'NavTabs')} onClick={() => { OnRouteChange('/Alerts') }}>Alerts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === '/OBS' }, 'NavTabs')} onClick={() => { OnRouteChange('/OBS') }}>OBS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === '/Equip' }, 'NavTabs')} onClick={() => { OnRouteChange('/Equip') }}>Equip</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = {classnames({ active: route === '/Designs' }, 'NavTabs')} onClick={() => { OnRouteChange('/Designs') }}>Design</NavLink>
            </NavItem>
          </Nav>
          <TabContent className="pageContent" activeTab={route} >
              <TabPane tabId="Alerts">
              </TabPane>
              <TabPane tabId="OBS">
              </TabPane>
              <TabPane tabId="Designs">
              </TabPane>
              <TabPane tabId="Equip">
              </TabPane>
          </TabContent>
        </div>
    );
};

export default TabNav;