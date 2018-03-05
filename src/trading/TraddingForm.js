import React, { Component } from 'react';
import {Row, Col,InputGroup, InputGroupAddon,Input} from 'reactstrap';
export default class TraddingForm extends Component{
  render(){
    return(<Row>
      <Col className="tradinform_wrapper">
        <div className="p-4">
          <h3 className="titlebuy">BUY</h3>
          <hr className="divider mb-2"></hr>
          <div>
             <InputGroup>
            <Input/>
        <InputGroupAddon  className="addOn" addonType="append">ETH</InputGroupAddon>
      </InputGroup>
          </div>
        </div>


      </Col>
        <Col className="tradinform_wrapper">
        <h3 className="text-white ml-2 mt-3">LIMIT</h3>
        </Col>
        <Col>
<h3 className="titlesell ml-2 mt-3">SELL</h3>
        </Col>
    </Row>)
  }
}
