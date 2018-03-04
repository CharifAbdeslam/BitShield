import React, { Component } from 'react';
import Market from "./Market";
import TradingForm from "./TradingForm";
import PropTypes from "prop-types";
import {Row,Col} from 'reactstrap';
export default class Leftexchange extends Component{
  render(){
    const {
           tick,
           symbol,
           hight,
           icon,
           price,
           vol,
           change,
           changePre,
           low} = this.props;
           if(this.props === null){
             return(<div>LOADING</div>)
           }
           var changePres = changePre.toFixed(2).toString();
           var changes = change.toFixed(2).toString();
           let color=null
           let caretdown=null
           if(changePres.indexOf("-") === 0){
             caretdown = true
             color ="text-change-neg";
           }else{
             caretdown = false
             color ="text-change-pos";
           }
    return(
      <div>
          <Row className="header-left-control text-center mt-3 ml-1 wrapper-section">
            <Col xs="2">
              <i className={icon + " crypto-size text-white"}></i>
            </Col>
            <Col xs="5">
              <span className="text-white">{tick}</span><br></br>
              <span className="text-secondary">VOL <span className="text-white">{vol.toFixed(2)}</span> {symbol}</span><br></br>
              <span className="text-secondary">LOW <span className="text-white">{low.toFixed(6)}</span></span>
            </Col>
            <Col xs="5">
              <span className="text-white">{price.toFixed(7)}</span><br></br>
              <span className={color}>{changes.replace("-","")}
               {caretdown ? '\u25BC' :  '\u25B2'}
              ({changePres.replace("-","")}%)</span><br></br>
              <span className="text-secondary">HIGHT <span className="text-white">{hight.toFixed(6)}</span></span><br></br>
            </Col>
          </Row>
          <Row className="header-left-control mt-3 ml-1 wrapper-section">
            <Market {...this.props}/>
          </Row>
          <Row className="header-left-control mt-3 ml-1 wrapper-section">
          <TradingForm/>
        </Row>
        </div>
    )
  }
}
Leftexchange.propTypes={
  tickers:PropTypes.array.isRequired
}
Leftexchange.defaultProps={
  tick: "ETH/BTC",
  icon: "cc ETH",
  symbol:"ETH",
  price:0,
  vol:0,
  change:0,
  changePre:0,
  low:0,
  hight:0,
}
