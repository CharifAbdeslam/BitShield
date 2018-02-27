import React, {Component} from 'react';
import logo from './img/logo.png';
import {
  Button,
  Navbar,
  NavItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import {Link} from "react-router-dom";
export default class Menu extends Component {

  render() {
    return (<div id="nvL">
      <Navbar className="nvBar pt-1 pb-1" expand="md">
        <div className="container">
          <Link to="/">
            <img src={logo} height="50" alt="Unable to load the logo"></img>
          </Link>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="mr-2">
                MORE
              </DropdownToggle>
              <DropdownMenu >
                <Link to="/">
                  <DropdownItem>
                    HOME
                  </DropdownItem>
                </Link>
                <Link to="/support">
                  <DropdownItem>
                    SUPPORT
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link to="/exchange">
              <NavItem className="nvLink">
                <p className="exChange mr-3 pr-3 mb-0">EXCHANGE</p>
              </NavItem>
            </Link>
            <NavItem>
              <Link to="/login">
                <Button className="lgBtn mr-3 p-2" outline={true} color="secondary" size="sm">LOG IN</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/signup">
                <Button className="lgBtn p-2" outline={true} color="secondary" size="sm">SIGN UP</Button>
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>);
  }
}
