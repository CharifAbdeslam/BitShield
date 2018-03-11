import React, { Component } from 'react';
import {Table} from 'reactstrap';
export default class Market extends Component{
constructor(props){
  super(props);
  this.filterData = this.filterData.bind(this);
}
filterData(){
  console.log("data filtred")
}
  render(){
    return(
      <div>
        <div className="filter-container">
          <span className="text-secondary-white ml-2 mr-2">MARKETS</span>
          <input type="text" ref="filt" onChange={this.filterData}></input>
        </div>
        <Table className="tb-market text-secondary text-white mb-0 text-center" size="sm" responsive hover>
         <thead>
           <tr>
             <th><i className="far fa-star"></i></th>
             <th>Symbol</th>
             <th>Last</th>
             <th>24h</th>
             <th>Vol</th>
           </tr>
         </thead>
         <tbody className="text-center">
         </tbody>
       </Table>
     </div>)

  }
}
