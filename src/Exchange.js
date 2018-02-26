import React, { Component } from 'react';
import {Navbar,
        Nav,
        Button,
        NavItem,
        NavbarBrand,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
       DropdownItem} from 'reactstrap';
import logo from './img/logodemo.png';
import {Link} from "react-router-dom";
import {_chekNav} from "./func.js";
export default class Exchange extends Component{
componentDidMount() {
  _chekNav();
}
  render(){
    return(
     <div className="container-fluid exchange-container pl-0 pr-0">
        <Navbar  light expand="md" className="navbar-demo">

          <NavbarBrand><img src={logo} height="32"></img></NavbarBrand>
    
        <UncontrolledDropdown className="trading-menu ml-5" nav inNavbar>
              <DropdownToggle nav caret>
               <i className="fas fa-align-left"></i>Trading
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem onClick={(e)=>{console.log("clicked")}}>
                 <span>BCH/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>LTC/BTC</span>
                </DropdownItem>
                <DropdownItem>
                <span>ETH/BTC</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           <Nav className="ml-auto" navbar>
             <NavItem>
              <span className="text-secondary spinner_demo  mr-5">Demo version <i className="fas fa-exclamation text-primary"></i></span>
             </NavItem>
             <NavItem>
         <Link to="/login">  <Button className="lgBtn mr-3" outline={true} color="secondary"  size="sm">LOG IN</Button></Link>
             </NavItem>
             <NavItem>
         <Link to="/signup">  <Button className="lgBtn mr-3" outline={true} color="secondary" size="sm">SIGN UP</Button></Link>
             </NavItem>
           </Nav>
        </Navbar>
     </div>
   );
  }
}
