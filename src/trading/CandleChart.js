import React, {Component} from 'react';
import {Button, ButtonGroup,Row, Col} from 'reactstrap';
import Chart from './Chart';
import Loader from '../img/loader-sm.svg';
import {getData} from "../func";
export default class CandleChart extends Component {
  tickers(time) {
    const {market} = this.props;
    getData(market,time).then(data => this.setState({data}))
  }
  getTickersUpdated(time){
    for(var i=0; i<100; i++){
  clearInterval(i);
  }
    this.tickers(time)
    return setInterval(() => {
        this.tickers(time)
      },60000)
  }
  defaultLoad(time){
    return setInterval(() => {
        this.tickers(time)
      },60000)
  }
  componentDidMount() {
    this.tickers("5m")
    this.defaultLoad("5m");
  }
  render() {
    if (this.state == null) {
      return <div className="mt-2 wrapper-section load text-center">
        <img src={Loader} alt="failed to load"/>
      </div>
    }
    return (
      <div className="mt-2 wrapper-section">
      <Row>
        <Col>
          <ButtonGroup>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("1m")}>1MN</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("5m")}>5MN</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("15m")}>15MN</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("30m")}>30MN</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("1h")}>1H</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("3h")}>3H</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("6h")}>6H</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("1D")}>1D</Button>
            <Button className="btn-secondary text-secondary-white" onClick={()=>this.getTickersUpdated("7D")}>1W</Button>
          </ButtonGroup>
        </Col>
      <Col>
        <ButtonGroup className="chart-setting" >
          <Button className="btn-secondary text-secondary-white ml-2">
            <i className="fas fa-chart-bar"></i>
          </Button>
          <Button className="btn-secondary text-secondary-white">
            <i className="fas fa-sync-alt"></i>
          </Button>
        </ButtonGroup>
      </Col>
      </Row>
      <Chart {...this.state}/>
    </div>)
  }
}
CandleChart.defaultProps={
  market:"tETHBTC",
}
