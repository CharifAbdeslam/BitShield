import React, { Component } from 'react';
import {Table} from 'reactstrap';
export default class Market extends Component{
constructor(props){
  super(props);
  this.state={
    acFilter:""
  }
  this.filterData = this.filterData.bind(this);
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
    const {acFilter}= this.state;
    let listTick = tickers.filter((tick)=>{
      return tick[0].toLowerCase().indexOf(acFilter)>=0
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
        const arrTick = [price,color,changes,caretdown,changePres,vol];
      switch(tick[0]){
        case "tETHBTC":
        return(this.retPrice("cc ETH",...arrTick));
        case "tLTCBTC":
        return(this.retPrice("cc LTC",...arrTick));
        case "tBCHBTC":
        return(this.retPrice("cc BTC",...arrTick));
        case "tREPBTC":
        return(this.retPrice("cc REP",...arrTick));
        case "tEOSBTC":
        return(this.retPrice("cc EOS",...arrTick));
        case "tXMRBTC":
        return(this.retPrice("cc XMR",...arrTick));
        case "tDSHBTC":
        return(this.retPrice("cc DASH",...arrTick));
        case "tNEOBTC":
        return(this.retPrice("cc NEO",...arrTick));
        case "tETCBTC":
        return(this.retPrice("cc ETC",...arrTick));
        case "tGNTBTC":
        return(this.retPrice("cc GNT",...arrTick));
        case "tXRPBTC":
        return(this.retPrice("cc XRP",...arrTick));
        case "tZECBTC":
        return(this.retPrice("cc ZEC",...arrTick));
        case "tIOTBTC":
        return(this.retPrice("cc IOTA",...arrTick));
        default:
          return(<div>Loading</div>)
      }
      return (<div>Loading</div>);
    })
  return listTick;
  }
  filterData(e){
    this.setState({acFilter:this.refs.filt.value.toLowerCase()})
  }
  render(){
    if(this.props === null){
      return(<div>Loading .....</div>)
    }
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
           {
              this.listTick()
           }
         </tbody>
       </Table>
     </div>)

  }
}
