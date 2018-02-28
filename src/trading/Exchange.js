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

  setCurrent(e){
      this.setState({currentTick:e.target.innerText})
      var {tickers} = this.state;
      switch (e.target.innerText) {
        case "ETH/BTC":
         this.setState({
           tick:"ETH/BTC",
           icon:"cc ETH",
           symbol:"ETH",
           price:tickers[0][1],
           vol:tickers[0][8],
           low:tickers[0][10],
           hight:tickers[0][9],
           change:tickers[0][5]*100,
           changePre:tickers[0][6]*100
         })
          break;
       case "BCH/BTC":
       this.setState({
         currentTick: "BCH/BTC",
         currentIcon:"cc BTC",
         currentPrice:tickers[1][1],
         currentVol:tickers[1][2]
       })
         break;
         case "LTC/BTC":
         this.setState({
           currentTick: "LTC/BTC",
           currentIcon:"cc LTC",
           currentPrice:tickers[2][1],
           currentVol:tickers[2][2]
         })
           break;
        default:
      }
  }
componentDidMount() {
  _chekNav();
  fetch("https://api.bitfinex.com/v2/tickers?symbols=tETHBTC,tBCHBTC,tLTCBTC")
     .then(response => response.json())
     .then(data =>{
        this.setState({
          tickers:data,
          icon:"cc ETH",
          price:data[0][1],
          vol:data[0][8],
          low:data[0][10],
          hight:data[0][9],
          change:data[0][5]*100,
          changePre:data[0][6]*100
        })
     })
}
  render(){

    if(this.state === null){
      return(<div>Loading</div>)
    }
    return(
     <div className="container-fluid exchange-container pl-0 pr-0">
        <Navbar  light expand="md" className="navbar-demo">
          <NavbarBrand><img src={logo} height="32" alt="unable to load the logo"></img></NavbarBrand>
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
        <Leftexchange {...this.state} />
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
