import React, { Component } from 'react';
import Rightexchange from './Rightexchange';
import Leftexchange from './Leftexchange';
import CandleChart from './CandleChart';
import {Navbar,
        Nav,
        Button,
        NavItem,
        NavbarBrand,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        Row,
        Col,
        Container} from 'reactstrap';
import logo from '../img/logodemo.png';
import {Link} from "react-router-dom";
import {_chekNav} from "../func.js";
export default class Exchange extends Component{
  constructor(props){
    super(props);
    this.State={
      tickers: [],
      currentTick:""
    }
  }
  setCurrent(e){
    console.log(e.target.innerText);
      this.setState({currentTick:e.target.innerText})
  }
componentDidMount() {
  _chekNav();
  fetch("https://api.bitfinex.com/v2/tickers?symbols=tETHBTC,tBCHBTC,tLTCBTC")
     .then(response => response.json())
     .then(data =>{
        this.setState({tickers:data})
     })
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
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                 <span>BCH/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>LTC/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>ETH/BTC</span>
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
<Container fluid={true}>
  <Row>
    <Col xs="2">
      <Leftexchange {...this.state}/>
    </Col>
    <Col xs="8">
      <CandleChart/>
    </Col>
    <Col xs="2">
      <Rightexchange />
    </Col>
  </Row>
</Container>
     </div>
   );
  }
}
