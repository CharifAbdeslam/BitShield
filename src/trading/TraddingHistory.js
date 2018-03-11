import React, {Component} from 'react';
import {Table} from 'reactstrap';
import {timeFormat} from "d3-time-format";

export default class TraddingHistory extends Component{
  render(){
    const {trade} = this.props;
    const time = timeFormat("%H:%M:%S");
    var color,ico;
    if (trade === "null") {
      console.log("il est null maintenant")
    return(<div className="text-white">Loading</div>)
    }
    return(  <Table className="text-secondary text-white mb-0 text-center" size="sm" responsive="responsive">
        <tbody className="text-center">
          {trade.map(trade => {
            if (trade[2] > 0) {
              color = "bgBuy";
              ico = "fas fa-arrow-circle-up";
            } else {
              color = "bgSell";
              ico = "fas fa-arrow-circle-down";
            }
            return (<tr className={color} key={trade[0]}>
              <th>{time(trade[1])}</th>
              <td>{trade[2].toFixed(7).toString().replace("-", "")} <i className={ico}></i></td>
              <td>{trade[3].toFixed(7)}</td>
            </tr>)
          })}
        </tbody>
      </Table>)
  }
}
TraddingHistory.defaultProps={
  trade:null
}
