import React, { Component } from 'react';
import Market from "./Market";
import OrderHistory from "./OrderHistory";
import Loader from '../img/loader-xs.svg'
import PropTypes from "prop-types";
import {Row,Col} from 'reactstrap';
export default class Leftexchange extends Component{
  render(){
    const {ticker} = this.props;
           let low,hight,price,vol,color,caretdown,changePres,changes;
           if(ticker.length <= 0){
            low= <img src={Loader}  className="ml-2 mr-2" alt="faild to load"/>;
            hight=<img src={Loader} className="ml-2 mr-2" alt="faild to load"/>;
            price=<img src={Loader} className="ml-2 mr-2" alt="faild to load"/>;
            vol = <img src={Loader} className="ml-2 mr-2" alt="faild to load"/>;
            changePres="....";
            changes="....";
          }else{
            low = ticker[9].toFixed(6);
            hight = ticker[8].toFixed(6);
            price = ticker[0].toFixed(7);
            vol = ticker[7].toFixed(2);
            changePres = (ticker[5]*100).toFixed(2).toString();
            changes = (ticker[4]*100).toFixed(2).toString();
          }
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
              <i className={this.props.icon +" crypto-size text-white"} ></i>
            </Col>
            <Col xs="5">
              <span className="text-white">{this.props.symbol}/BTC</span><br></br>
              <span className="text-secondary">VOL <span className="text-white">{vol}</span> {this.props.symbol}</span><br></br>
              <span className="text-secondary">LOW <span className="text-white">{low}</span></span>
            </Col>
            <Col xs="5">
              <span className="text-white">{price}</span><br></br>
              <span className={color}>{changes.replace("-","")}
               {caretdown ? '\u25BC' :  '\u25B2'}
              ({changePres.replace("-","")}%)</span><br></br>
              <span className="text-secondary">HIGHT <span className="text-white">{hight}</span></span><br></br>
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
