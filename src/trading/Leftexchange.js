import React, { Component } from 'react';
import {Row,
        Col} from 'reactstrap';
export default class Leftexchange extends Component{
  render(){
    return(
          <Row className="header-left-control text-center mt-3 ml-1 wrapper-section">
            <Col xs="3">
              <i className="cc ETH crypto-size text-white" title="ETH"></i>
            </Col>
            <Col xs="4">
              <span className="text-white">ETH/BTC</span><br></br>
              <span className="text-secondary">VOL xxxx ETH</span><br></br>
              <span className="text-secondary">LOW xxxxx</span>
            </Col>
            <Col xs="5">
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-secondary">HIGHT xxxxx</span><br></br>
            </Col>
          </Row>
    )
  }
}
