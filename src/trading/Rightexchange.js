import React, { Component } from 'react';
import {Row,Table} from 'reactstrap';
import {_getTrade} from '../func';
import { timeFormat } from "d3-time-format";
import { Scrollbars } from 'react-custom-scrollbars';
export default class Rightexchange extends Component{
  constructor(props){
    super(props);
    this.state={
      trade:[]
    }
  }
    componentDidMount(){
         _getTrade().then(data =>this.setState({trade:data}))
  }
  render(){
    const {trade} = this.state;
    const time = timeFormat("%H:%M:%S");
    const buyColor="bgBuy";
    const sellColor="bgSell";
    const sellIco = "fas fa-arrow-circle-down";
    const buyIco= "fas fa-arrow-circle-up";
    var color,ico;
    return(
      <Row className="wrapper-section mt-3 mr-2">
        <div className="trade-history">
          <span className="text-secondary-white ml-2">Trade History</span>
          <Scrollbars renderThumbVertical={({ style, ...props }) =>
   <div {...props} style={{ ...style, backgroundColor: '#4ac9c6', width: '4px', opacity: '0.4'}}/>
}>
          <Table className="text-secondary text-white mb-0 text-center" size="sm" responsive>
           <thead>
             <tr>
               <th>Time</th>
               <th>Amount</th>
               <th>Price</th>
             </tr>
           </thead>

           <tbody className="text-center">
             {
               trade.map(trade=>{
                 if(trade[2] > 0 ){
                   color=buyColor;
                   ico=buyIco
                 }else{
                   color=sellColor;
                   ico=sellIco;
                 }
                 return(<tr className={color} key={trade[0]}>
                        <th>{time(trade[1])}</th>
                        <td>{trade[2].toFixed(7).toString().replace("-","")} <i className={ico}></i> </td>
                        <td>{trade[3].toFixed(7)}</td>
                 </tr>)
               })
             }
           </tbody>

         </Table>
          </Scrollbars>
        </div>
      </Row>
    )
  }
}
