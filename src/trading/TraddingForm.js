import React, {Component} from 'react';
import {Row, Col, InputGroup, InputGroupAddon, Input,Button} from 'reactstrap';
export default class TraddingForm extends Component {
  render() {
    return (  <div className="mt-3 wrapper-section">
      <Row>
      <Col className="tradinform_wrapper">
        <div className="p-2">
          <h3 className="titlebuy">BUY: ETH</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readOnly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readOnly="yes"/>
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
              <label className="text-white mr-2">Limit:</label>
              <Input/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readOnly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-2 mb-2">
            <Button color="success" >BUY</Button>
            <Button color="danger" className="mr-2">SELL</Button>
          </div>
        </div>
      </Col>
      <Col className="tradinform_wrapperS">
        <div className="p-2">
        <h3 className="titlesell">SELL: ETH</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readOnly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input/>
              <InputGroupAddon className="addOn" addonType="append">ETH</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readOnly="yes"/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-2 mb-2">
      <label className="text-white mr-2">Fee: 0.15/0.25% </label>
            <Button color="danger">SELL</Button>
          </div>
        </div>
      </Col>
    </Row>
  </div>)
  }
}
