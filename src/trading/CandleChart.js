import React, {Component} from 'react';
import {Button, ButtonGroup,Row, Col} from 'reactstrap';
import Chart from './Chart';
import {getData} from "../func"
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
      return <div>Loading...</div>
    }
    return (<div className="mt-3 wrapper-section">
      <Row>
        <Col>
          <ButtonGroup>
            <Button className="btn-primary text-secondary-white">1MN</Button>{' '}
            <Button className="btn-primary text-secondary-white">5MN</Button>{' '}
            <Button className="btn-primary text-secondary-white">15MN</Button>
            <Button className="btn-primary text-secondary-white">30MN</Button>
            <Button className="btn-primary text-secondary-white">1H</Button>
            <Button className="btn-primary text-secondary-white">3H</Button>
            <Button className="btn-primary text-secondary-white">6H</Button>
            <Button className="btn-primary text-secondary-white">1D</Button>
            <Button className="btn-primary text-secondary-white">1W</Button>
          </ButtonGroup>
        </Col>
      <Col>
        <ButtonGroup className="chart-setting" >
          <Button className="btn-primary text-secondary-white ml-2">
            <i className="fas fa-cogs"></i>
            SETTING
          </Button>
          <Button className="btn-primary text-secondary-white">
            <i className="fas fa-sync-alt"></i>
            REFRESH
          </Button>
        </ButtonGroup>
      </Col>

      </Row>

      <Chart data={this.state.data} height="600"/>
    </div>)
  }

}
