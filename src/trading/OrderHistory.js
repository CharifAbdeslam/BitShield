import React, { Component } from 'react';
import {Collapse,Table} from 'reactstrap';
export default class OrderHistory extends Component{
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
   this.state = { collapse: true };
 }

 toggle() {
   this.setState({ collapse: !this.state.collapse });
 }

  render(){
    return(<div className="tr-form mt-2">
      <span className="text-secondary-white mt-2 ml-2" onClick={this.toggle}>
      <i className="fas fa-angle-double-down"></i> YOUR ORDER</span>
      <Collapse isOpen={this.state.collapse}>
        <Table className="tb-market text-secondary text-white mb-0 text-center" size="sm" responsive hover>
          <thead>
            <tr>
              <th>Market</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Amount Btc</th>
              <th>Filled</th>
            </tr>
          </thead>
        </Table>
        <div className="text-center p-5 text-white">
          <i className="fas fa-spinner fa-pulse fa-3x"></i><br></br>
          <span>Connecting</span>
        </div>
        </Collapse>
    </div>)
  }
}
