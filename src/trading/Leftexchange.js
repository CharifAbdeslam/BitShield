import React, { Component } from 'react';
import Market from "./Market";
import OrderHistory from "./OrderHistory";
import PropTypes from "prop-types";
import {Row,Col} from 'reactstrap';
export default class Leftexchange extends Component{
  render(){
    const {ticker} = this.props;
           if(ticker.length <= 0){
             return(<div>LOADING</div>)
           }
           var changePres = (ticker[5]*100).toFixed(2).toString();
           var changes = (ticker[4]*100).toFixed(2).toString();
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
          <Row className="header-left-control text-center mt-2 ml-1 wrapper-section">
            <Col xs="2">
              <i className="cc ETH crypto-size text-white"></i>
            </Col>
            <Col xs="5">
              <span className="text-white">ETH/BTC</span><br></br>
              <span className="text-secondary">VOL <span className="text-white">{ticker[7].toFixed(2)}</span> ETH</span><br></br>
              <span className="text-secondary">LOW <span className="text-white">{ticker[9].toFixed(6)}</span></span>
            </Col>
            <Col xs="5">
              <span className="text-white">{ticker[0].toFixed(7)}</span><br></br>
              <span className={color}>{changes.replace("-","")}
               {caretdown ? '\u25BC' :  '\u25B2'}
              ({changePres.replace("-","")}%)</span><br></br>
              <span className="text-secondary">HIGHT <span className="text-white">{ticker[8].toFixed(6)}</span></span><br></br>
            </Col>
          </Row>
          <Row className="header-left-control mt-2 ml-1 wrapper-section market">
            <Market/>
          </Row>
          <Row className="header-left-control mt-2 ml-1 wrapper-section">
          <OrderHistory/>
        </Row>
        </div>
    )
  }
}
