import React, {Component} from 'react';
import {Button, ButtonGroup,Row, Col} from 'reactstrap';
import Chart from './Chart';
import {getData} from "../func";
export default class CandleChart extends Component {
  constructor(props) {
    super(props);
    this.State = {
      mri: [1, 2, 3, 4]
    }
  }
  tickers() {
    getData().then(data => {
      this.setState({data})
    })
  }
  componentDidMount() {
    this.tickers()
    setInterval(() => {
      this.tickers()
    }, 100000000000000000000)
  }
  render() {
    if (this.state == null) {
      return <div className="mt-2 wrapper-section load text-center">
        <span className="text-white"><i className="fas fa-spinner fa-pulse fa-5x"></i><br></br>
        <span>Connecting</span></span>
      </div>
    }
    return (<div>
      <div className="mt-2 wrapper-section">
      <Row>
        <Col>
          <ButtonGroup>
            <Button className="btn-secondary text-secondary-white">1MN</Button>
            <Button className="btn-secondary text-secondary-white">5MN</Button>
            <Button className="btn-secondary text-secondary-white">15MN</Button>
            <Button className="btn-secondary text-secondary-white">30MN</Button>
            <Button className="btn-secondary text-secondary-white">1H</Button>
            <Button className="btn-secondary text-secondary-white">3H</Button>
            <Button className="btn-secondary text-secondary-white">6H</Button>
            <Button className="btn-secondary text-secondary-white">1D</Button>
            <Button className="btn-secondary text-secondary-white">1W</Button>
          </ButtonGroup>
        </Col>
      <Col>
        <ButtonGroup className="chart-setting" >
          <Button className="btn-secondary text-secondary-white ml-2">
            <i className="fas fa-cogs"></i>
          </Button>
          <Button className="btn-secondary text-secondary-white">
            <i className="fas fa-sync-alt"></i>
          </Button>
        </ButtonGroup>
      </Col>
      </Row>
      <Chart {...this.state}/>
    </div>


</div>)
  }
}
