import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavButton.css";
import { Link } from 'react-router-dom';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="Nav_bar_color">
              <NavItem>
                <Link to="/Home">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/Alerts">Alerts</Link>
              </NavItem>
              <NavItem>
                <Link to="/OBS">OBS</Link>
              </NavItem>
              <NavItem>
                <Link  to="/Equip">Equip</Link>
              </NavItem>
              <NavItem>
                <Link to="/Designs">Design</Link>
              </NavItem>
              <NavItem>
                <Link to="/Streamer">Streamer</Link>
              </NavItem>
              <NavItem>
                <Link to="/Tips">Tips</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}