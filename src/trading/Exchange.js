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
    tickers:[],
    price:"",
    vol:"",
    low:"",
    hight:"",
    change:"",
    changePre:""
  }
}
setPrice(tick,icon,symbol,price,vol,low,hight,change,changePre){
  this.setState({
    tick:tick,
    icon:icon,
    symbol:symbol,
    price:price,
    vol:vol,
    low:low,
    hight:hight,
    change:change*100,
    changePre:changePre*100
  })
}
  setCurrent(e){
      const {tickers} = this.state;
      switch (e.target.innerText) {
        case "ETH/BTC":
        this.setPrice("ETH/BTC",
                      "cc ETH",
                      "ETH",
                      tickers[0][1],
                      tickers[0][8],
                      tickers[0][10],
                      tickers[0][9],
                      tickers[0][5],
                      tickers[0][6])
          break;
       case "BCH/BTC":
       this.setPrice("BCH/BTC",
                     "cc BTC",
                     "BCH",
                     tickers[1][1],
                     tickers[1][8],
                     tickers[1][10],
                     tickers[1][9],
                     tickers[1][5],
                     tickers[1][6])
         break;
         case "LTC/BTC":
         this.setPrice("LTC/BTC",
                       "cc LTC",
                       "LTC",
                       tickers[2][1],
                       tickers[2][8],
                       tickers[2][10],
                       tickers[2][9],
                       tickers[2][5],
                       tickers[2][6])
           break;
           default:
           this.setPrice("ETH/BTC",
                         "cc ETH",
                         "ETH",
                         tickers[0][1],
                         tickers[0][8],
                         tickers[0][10],
                         tickers[0][9],
                         tickers[0][5],
                         tickers[0][6])
      }
  }
  getPrice(){

    const url = "https://api.bitfinex.com/v2/tickers?symbols=";
    fetch(url+"tETHBTC,tBCHBTC,tLTCBTC,tXMRBTC,tXRPBTC,tETCBTC,tZECBTC,tIOTBTC,tDSHBTC,tNEOBTC,tGNTBTC,tREPBTC,tEOSBTC")
       .then(response => response.json())
       .then(data =>{
          this.setState({tickers:data})
       }).then(()=>{
         const {tickers} = this.state;
         this.setState({
           price:tickers[0][1],
           vol:tickers[0][8],
           low:tickers[0][10],
           hight:tickers[0][9],
           change:tickers[0][5]*100,
           changePre:tickers[0][6]*100
         })
       })
  }
componentDidMount() {
    this.getPrice()
  _chekNav();
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
