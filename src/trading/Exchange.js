import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExchangeMenu from './ExchangeMenu';
import Template from './Template';
export default class Exchange extends Component{
componentDidMount() {
var nv = document.getElementById("nvL");
    nv.style.display = "none";
}
componentDidUmount(){
  var nv = document.getElementById("nvL");
      nv.style.display = "block";
}
  render(){
    return(
      <Router>
     <div className="container-fluid exchange-container pl-0 pr-0">
      <ExchangeMenu/>
        <Switch>
            <Route exact={true} path="/exchange" component={(props)=><Template symbol="ETH" market="tETHBTC" icon="cc ETH"/>}/>
            <Route exact={true} path="/exchange/ETH:BTC" component={(props)=><Template symbol="ETH" market="tETHBTC" icon="cc ETH"/>}/>
            <Route exact={true} path="/exchange/BCH:BTC" component={(props)=><Template symbol="BCH" market="tBCHBTC" icon="cc BTC"/>}/>
            <Route exact={true} path="/exchange/LTC:BTC" component={(props)=><Template symbol="LTC" market="tLTCBTC" icon="cc LTC"/>}/>
            <Route exact={true} path="/exchange/XMR:BTC" component={(props)=><Template symbol="XMR" market="tXMRBTC" icon="cc XMR"/>}/>
            <Route exact={true} path="/exchange/XRP:BTC" component={(props)=><Template symbol="XRP" market="tXRPBTC" icon="cc XRP"/>}/>
            <Route exact={true} path="/exchange/ETC:BTC" component={(props)=><Template symbol="ETC" market="tETCBTC" icon="cc ETC"/>}/>
            <Route exact={true} path="/exchange/ZEC:BTC" component={(props)=><Template symbol="ZEC" market="tZECBTC" icon="cc ZEC"/>}/>
            <Route exact={true} path="/exchange/IOTA:BTC" component={(props)=><Template symbol="IOT" market="tIOTBTC" icon="cc IOTA"/>}/>
            <Route exact={true} path="/exchange/DASH:BTC" component={(props)=><Template symbol="DSH" market="tDSHBTC" icon="cc DASH"/>}/>
            <Route exact={true} path="/exchange/NEO:BTC" component={(props)=><Template symbol="NEO" market="tNEOBTC" icon="cc NEO"/>}/>
            <Route exact={true} path="/exchange/GNT:BTC" component={(props)=><Template symbol="GNT" market="tGNTBTC" icon="cc GNT"/>}/>
            <Route exact={true} path="/exchange/REP:BTC" component={(props)=><Template symbol="REP" market="tREPBTC" icon="cc REP"/>}/>
            <Route exact={true} path="/exchange/EOS:BTC" component={(props)=><Template symbol="EOS" market="tEOSBTC" icon="cc EOS"/>}/>
        </Switch>
     </div>
   </Router>
   );
  }
}
