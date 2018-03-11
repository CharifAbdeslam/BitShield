import React, { Component } from 'react';
import Template from './Template';
import {Navbar,
        Nav,
        Button,
        NavItem,
        NavbarBrand,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem} from 'reactstrap';
import logo from '../img/logodemo.png';
import {Link} from "react-router-dom";
import {_chekNav} from "../func.js";
export default class Exchange extends Component{
componentDidMount() {
  _chekNav();
}
  render(){
    return(
     <div className="container-fluid exchange-container pl-0 pr-0">
        <Navbar  light expand="md" className="navbar-demo">
          <NavbarBrand><img src={logo} height="32" alt="unable to load the logo"></img></NavbarBrand>
        <UncontrolledDropdown className="trading-menu ml-5" nav inNavbar>
              <DropdownToggle nav caret>
               <i className="fas fa-align-left"></i>Trading
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                 <span>BCH/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>LTC/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>ETH/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>XMR/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>XRP/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>ETC/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>ZEC/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>IOTA/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>DASH/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>NEO/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>GNT/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>REP/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>EOS/BTC</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           <Nav className="ml-auto" navbar>
             <NavItem>
              <span className="text-secondary spinner_demo  mr-5">Demo version <i className="fas fa-bell text-primary"></i></span>
             </NavItem>
             <NavItem>
         <Link to="/login">  <Button className="lgBtn mr-3" outline={true} color="secondary"  size="sm">LOG IN</Button></Link>
             </NavItem>
             <NavItem>
         <Link to="/signup">  <Button className="lgBtn mr-3" outline={true} color="secondary" size="sm">SIGN UP</Button></Link>
             </NavItem>
           </Nav>
        </Navbar>
      <Template/>
     </div>
   );
  }
}
