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
      ticker:[]
    }
  }
  componentDidMount(){
    _getTicker().then(data => this.setState({ticker:data}))
  }
  render(){
    return(<Container fluid={true}>
      <Row>
        <Col xs="2">
            <Leftexchange {...this.state}/>
        </Col>
        <Col xs="8">
            <CandleChart/>
            <TraddingForm price={this.state.ticker[0]}/>
        </Col>
        <Col xs="2">
          <Rightexchange/>
        </Col>
      </Row>
    </Container>)
  }
}
