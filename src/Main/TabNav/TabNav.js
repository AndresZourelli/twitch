import React from 'react';
import './TabNav.css'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Alerts from '../Alerts/Alerts';
import Designs from '../Design/Design';
import Equip from '../Equip/Equip';
import OBS from '../OBS/OBS';

const TabNav = ({route, OnRouteChange}) => {
  return(
  	<div>
    <Nav tabs>
    		<NavItem>
              <NavLink onClick={() => { OnRouteChange('Home') }}>Back</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => { OnRouteChange('Alerts') }}>Alerts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => { OnRouteChange('OBS') }}>OBS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => { OnRouteChange('Equip') }}>Equip</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => { OnRouteChange('Design') }}>Design</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={route}>
              <TabPane tabId="Alerts">
                <Alerts></Alerts>
              </TabPane>
              <TabPane tabId="OBS">
                <OBS></OBS>
              </TabPane>
              <TabPane tabId="Design">
                <Designs></Designs>
              </TabPane>
              <TabPane tabId="Equip">
                <Equip></Equip>
              </TabPane>
          </TabContent>
        </div>
    );
};

export default TabNav;