import React, { Component } from 'react';
import { Table ,Button} from 'reactstrap';
export default class Market extends Component{
constructor(props){
  super(props);
  this.state={
    acFilter:""
  }
}
  retPrice(ico,price,color,changes,caretdown,changePres,vol){
    return(<tr key={ico}>
           <th><i className="far fa-star"></i></th>
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
    let listTick = tickers.filter((tick)=>{
      return tick[0].toLowerCase().indexOf(this.state.acFilter)>=0
    }).map((tick)=>{
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
        return(this.retPrice("cc ETH",price,color,changes,caretdown,changePres,vol));
        case "tLTCBTC":
        return(this.retPrice("cc LTC",price,color,changes,caretdown,changePres,vol));
        case "tBCHBTC":
        return(this.retPrice("cc BTC",price,color,changes,caretdown,changePres,vol));
        case "tXMRBTC":
        return(this.retPrice("cc XMR",price,color,changes,caretdown,changePres,vol));
        case "tETCBTC":
        return(this.retPrice("cc ETC",price,color,changes,caretdown,changePres,vol));
        case "tXRPBTC":
        return(this.retPrice("cc XRP",price,color,changes,caretdown,changePres,vol));
        case "tNEOBTC":
        return(this.retPrice("cc NEM",price,color,changes,caretdown,changePres,vol));
        case "tZECBTC":
        return(this.retPrice("cc ZEC",price,color,changes,caretdown,changePres,vol));
        case "tBTSBTC":
        return(this.retPrice("cc BTS",price,color,changes,caretdown,changePres,vol));
        default:
          return(<div>Loading</div>)
      }
      return(<div>Loading</div>)
    })
  return listTick;
  }
  filterData(e){
    this.setState({acFilter:this.refs.filt.value.toLowerCase()})
  }
  render(){
    return(
      <div>
        <div className="filter-container">
          <span className="text-secondary-white">MARKETS</span>
          <input type="text" ref="filt" onChange={(e)=>this.filterData(e)}></input>
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
           {
              this.listTick()
           }
         </tbody>
       </Table>
     </div>)

  }
}
