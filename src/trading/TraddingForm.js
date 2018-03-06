import React, {Component} from 'react';
import {Row, Col, InputGroup, InputGroupAddon, Input,Button} from 'reactstrap';
export default class TraddingForm extends Component {
  render() {
    return (<Row>
      <Col className="tradinform_wrapper">
        <div className="p-2">
          <h3 className="titlebuy">BUY</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-2 mb-2">
            <label className="text-white mr-2">Fee: 0.15/0.25% </label>
            <Button color="success" >BUY</Button>
          </div>

        </div>
      </Col>
      <Col className="tradinform_wrapper">
        <div className="p-2">
        <h3 className="text-white">LIMIT</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-2 mb-2">
            <Button color="success" >BUY</Button>
            <Button color="danger" className="mr-2" >SELL</Button>
          </div>
        </div>
      </Col>
      <Col className="tradinform_wrapperS">
        <div className="p-2">
        <h3 className="titlesell">SELL</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readonly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-2 mb-2">
      <label className="text-white mr-2">Fee: 0.15/0.25% </label>
            <Button color="danger">SELL</Button>
          </div>
        </div>
      </Col>
    </Row>)
  }
}
