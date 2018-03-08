import React, { Component } from 'react';
import Rightexchange from './Rightexchange';
import Leftexchange from './Leftexchange';
import CandleChart from './CandleChart';
import TraddingForm from "./TraddingForm";
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
setCoin(id){
  const {tickers} = this.state;
  var tick = [tickers[id][1],tickers[id][8],tickers[id][10],tickers[id][9],tickers[id][5],tickers[id][6]];
  return tick
}
  setCurrent(e){
      const tickETH = this.setCoin(0);
      const tickBCH = this.setCoin(1);
      const tickLTC = this.setCoin(2);
      const tickXMR = this.setCoin(3);
      const tickXRP = this.setCoin(4);
      const tickETC = this.setCoin(5);
      const tickZEC = this.setCoin(6);
      const tickIOT = this.setCoin(7);
      const tickDSH = this.setCoin(8);
      const tickNEO = this.setCoin(9);
      const tickGNT = this.setCoin(10);
      const tickREP = this.setCoin(11);
      const tickEOS = this.setCoin(12);
      switch (e.target.innerText) {
        case "ETH/BTC":
        this.setPrice("ETH/BTC","cc ETH","ETH",...tickETH)
        break;
        case "BCH/BTC":
        this.setPrice("BCH/BTC","cc BTC","BCH",...tickBCH)
        break;
        case "LTC/BTC":
        this.setPrice("LTC/BTC","cc LTC","LTC",...tickLTC)
        break;
        case "XMR/BTC":
        this.setPrice("XMR/BTC","cc XMR","XMR",...tickXMR)
        break;
        case "XRP/BTC":
        this.setPrice("XRP/BTC","cc XRP","XRP",...tickXRP)
        break;
        case "ETC/BTC":
        this.setPrice("ETC/BTC","cc ETC","ETC",...tickETC)
        break;
        case "ZEC/BTC":
        this.setPrice("ZEC/BTC","cc ZEC","ZEC",...tickZEC)
        break;
        case "IOTA/BTC":
        this.setPrice("IOTA/BTC","cc IOTA","IOTA",...tickIOT)
        break;
        case "DASH/BTC":
        this.setPrice("DASH/BTC","cc DASH","DASH",...tickDSH)
        break;
        case "NEO/BTC":
        this.setPrice("NEO/BTC","cc NEO","DASH",...tickNEO)
        break;
        case "GNT/BTC":
        this.setPrice("GNT/BTC","cc GNT","GNT",...tickGNT)
        break;
        case "REP/BTC":
        this.setPrice("REP/BTC","cc REP","REP",...tickREP)
        break;
        case "EOS/BTC":
        this.setPrice("EOS/BTC","cc EOS","REP",...tickEOS)
        break;
        default:
        this.setPrice("ETH/BTC","cc ETH","ETH",...tickETH)
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
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>XMR/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>XRP/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>ETC/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>ZEC/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>IOTA/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>DASH/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>NEO/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>GNT/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
                <span>REP/BTC</span>
                </DropdownItem>
                <DropdownItem onClick={(e)=>this.setCurrent(e)}>
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
<Container fluid={true}>
  <Row>
    <Col xs="2">
        <Leftexchange {...this.state} />
    </Col>
    <Col xs="8">
        <CandleChart/>
        <TraddingForm {...this.state} />
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
