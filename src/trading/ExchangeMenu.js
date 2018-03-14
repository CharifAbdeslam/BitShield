import React, { Component } from 'react';
import {Navbar,
        Nav,
        NavItem,
        NavbarBrand,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem} from 'reactstrap';
import logo from '../img/logodemo.png';
import {Link} from "react-router-dom";

export default class Exchange extends Component{
  interClear(){
    for(var i=1;i<=1000;i++){
      clearInterval(i)
    }
  }
  render(){
    return(  <Navbar  light expand="md" className="navbar-demo">
        <NavbarBrand><img src={logo} height="32" alt="unable to load the logo"></img></NavbarBrand>
      <UncontrolledDropdown className="trading-menu ml-5" nav inNavbar>
            <DropdownToggle nav caret>
             <i className="fas fa-align-left"></i>Trading
            </DropdownToggle>
            <DropdownMenu >
              <Link to="/exchange/BCH:BTC" onClick={()=>this.interClear()}><DropdownItem>
               <span>BCH/BTC</span>
             </DropdownItem></Link>
                <Link to="/exchange/LTC:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>LTC/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/ETH:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>ETH/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/XMR:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>XMR/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/XRP:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>XRP/BTC</span>
              </DropdownItem></Link>
            <Link to="/exchange/ETC:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>ETC/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/ZEC:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>ZEC/BTC</span>
              </DropdownItem></Link>
            <Link to="/exchange/IOTA:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>IOTA/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/DASH:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>DASH/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/NEO:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>NEO/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/GNT:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>GNT/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/REP:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>REP/BTC</span>
              </DropdownItem></Link>
              <Link to="/exchange/EOS:BTC" onClick={()=>this.interClear()}><DropdownItem>
              <span>EOS/BTC</span>
              </DropdownItem></Link>
            </DropdownMenu>
          </UncontrolledDropdown>
         <Nav className="ml-auto" navbar>
           <NavItem>
            <span className="text-secondary spinner_demo  mr-5">Demo version <i className="fas fa-bell text-primary"></i></span>
           </NavItem>
         </Nav>
      </Navbar>)
  }
}
