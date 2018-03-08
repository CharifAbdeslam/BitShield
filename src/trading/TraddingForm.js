import React, {Component} from 'react';
import {Row, Col, InputGroup, InputGroupAddon, Input,Button} from 'reactstrap';
export default class TraddingForm extends Component {
  constructor(props){
    super(props);
    this.setTotalB = this.setTotalB.bind(this);
    this.setTotalC = this.setTotalC.bind(this);
    this.state={
      totalB:0,
      totalC:0,
      amount:"",
    }
  }
  setTotalB(e){
    this.setState({totalB:e.target.value * this.props.price})
  }
  setTotalC(e){
    this.setState({totalC:e.target.value * this.props.price})
  }
  render() {
    const price = parseFloat(this.props.price).toFixed(7);
    const totalB = parseFloat(this.state.totalB).toFixed(7);
    const totalC = parseFloat(this.state.totalC).toFixed(7);
    const { symbol } = this.props;
    return (  <div className="mt-2 wrapper-section">
      <Row>
      <Col className="tradinform_wrapper">
        <div className="p-2">
          <h3 className="titlebuy">BUY: {symbol}</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readOnly="yes" value={price}/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input  onChange={this.setTotalB}/>
              <InputGroupAddon className="addOn" addonType="append">{symbol}</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readOnly="yes" value={totalB}/>
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
              <InputGroupAddon className="addOn" addonType="append">{symbol}</InputGroupAddon>
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
        <h3 className="titlesell">SELL: {symbol}</h3>
          <hr className="divider mb-3"></hr>
          <div>
            <InputGroup>
              <label className="text-white mr-2">Price:</label>
              <Input readOnly="yes" value={price}/>
              <InputGroupAddon className="addOn" addonType="append">BTC</InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Amount:</label>
              <Input onChange={this.setTotalC}/>
              <InputGroupAddon className="addOn" addonType="append">{symbol}</InputGroupAddon>
            </InputGroup>
          </div>
          <hr className="divider mb-2 mt-3"></hr>
          <div className="mt-3">
            <InputGroup>
              <label className="text-white mr-2">Total:</label>
              <Input readOnly="yes" value={totalC}/>
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
TraddingForm.defaultProps={
  symbol:"ETH"
}
