import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
export default class Leftexchange extends Component{

  render(){
    return(
      <div>
          <Row className="header-left-control text-center mt-3 ml-1 wrapper-section">
            <Col xs="3">
              <i className="cc ETH crypto-size text-white" title="ETH"></i>
            </Col>
            <Col xs="4">
              <span className="text-white">BTC/ETH</span><br></br>
              <span className="text-secondary">VOL xxxx ETH</span><br></br>
              <span className="text-secondary">LOW xxxxx</span>
            </Col>
            <Col xs="5">
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-secondary">HIGHT xxxxx</span><br></br>
            </Col>
          </Row>
          <Row className="header-left-control mt-3 ml-1 wrapper-section">
            <span className="text-white">Tickers</span><br></br>
          </Row>
        </div>
    )
  }
}