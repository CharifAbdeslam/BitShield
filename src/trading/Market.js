import React, { Component } from 'react';
import { Table } from 'reactstrap';
export default class Market extends Component{
  retPrice(ico,price,color,changes,caretdown,changePres,vol){
    return(<tr>
           <th><i class="far fa-star"></i></th>
           <td><span className={ico + "  market-ico"}></span></td>
           <td>{price}</td>
          <td><span className={color}>{changes}
              {caretdown ? '\u25BC' :  '\u25B2'}
             ({changePres})%</span></td>
          <td>{vol}</td>
        </tr>)
  }
  listTick(){
    const {tickers} = this.props;
    let listTick = tickers.map((tick)=>{
        const vol = tick[8].toFixed(2);
        const price = tick[1].toFixed(7);
        var change = (tick[5]*100).toFixed(2).toString();
        var changePre = (tick[6]*100).toFixed(2).toString();
        var changes = change.replace("-","");
        var changePres = changePre.replace("-","");
        let color=null
        let caretdown=null
        if(changePre.indexOf("-") === 0){
          caretdown = true
          color ="text-change-neg";
        }else{
          caretdown = false
          color ="text-change-pos";
        }
      switch(tick[0]){
        case "tETHBTC":
        return(this.retPrice("cc ETH",price,color,changes,caretdown,changePres,vol))
              break;
        case "tLTCBTC":
        return(this.retPrice("cc LTC",price,color,changes,caretdown,changePres,vol))
              break;
        case "tBCHBTC":
        return(this.retPrice("cc BTC",price,color,changes,caretdown,changePres,vol))
      }
    })
  return listTick;
  }
  render(){
    const {tickers} = this.props;
    return( <Table className="tb-market text-secondary text-white mb-0 text-center" size="sm" responsive hover>
        <thead>
          <tr>
            <th><i class="far fa-star"></i></th>
            <th>Symbol</th>
            <th>Last</th>
            <th>24h</th>
            <th>Vol</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
             this.listTick()
          }
        </tbody>
      </Table>)
  }
}
