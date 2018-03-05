import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
export default class TraddingForm extends Component{
  render(){
    return(<Row>
      <Col className="tradinform_wrapper">
        <h3 className="titlebuy ml-2 mt-3">BUY</h3>
        <hr></hr>
        <div>
          <input type="text"/>
          <label className="text-white">Price</label>
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
