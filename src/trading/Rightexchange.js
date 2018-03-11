import React, {Component} from 'react';
import {Row, Table} from 'reactstrap';
import {_getTrade} from '../func';
import {Scrollbars} from 'react-custom-scrollbars';
import TraddingHistory from './TraddingHistory';
export default class Rightexchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: []
    }
  }
  componentDidMount() {
    _getTrade().then(data => this.setState({trade:data}))
  }
  render() {
  
    return (<Row className="wrapper-section mt-2 mr-2">
      <div className="trade-history">
        <span className="text-secondary-white ml-2">Trade History</span>
        <Table className="text-secondary text-white mb-0 text-center" size="sm" responsive="responsive">
          <thead>
            <tr>
              <th>Time</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
        </Table>
        <Scrollbars renderThumbVertical={() => <div style={{
              backgroundColor: '#4ac9c6',
              width: '4px',
              opacity: '0.4',
              borderRadius: '5px'
            }}/>}>
        <TraddingHistory {...this.state}/>
        </Scrollbars>
      </div>
    </Row>)
  }
}
