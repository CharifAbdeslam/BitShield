import React, { Component } from 'react';
import Rightexchange from './Rightexchange';
import Leftexchange from './Leftexchange';
import CandleChart from './CandleChart';
import TraddingForm from "./TraddingForm";
import {Container,Row,Col }from 'reactstrap';
import {_getTicker} from "../func";
export default class Template extends Component {
  constructor(props){
    super(props);
    this.state={
      ticker:[],
      intervalClear:0
    }
  }
  getTicker(){
    const {market} = this.props
    _getTicker(market).then(data => this.setState({ticker:data}));
  }
  livePrice(){
    this.getTicker();
    setInterval(()=>this.getTicker(),60000);
  }
  componentDidMount(){
    this.livePrice();
  }

  render(){
    return(<Container fluid={true}>
      <Row>
        <Col xs="2">
            <Leftexchange {...this.state} {...this.props}/>
        </Col>
        <Col xs="8">
            <CandleChart {...this.props} {...this.state}/>
            <TraddingForm price={this.state.ticker[0]} {...this.props}/>
        </Col>
        <Col xs="2">
          <Rightexchange {...this.props}/>
        </Col>
      </Row>
    </Container>)
  }
}
