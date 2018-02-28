import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Row,Col} from 'reactstrap';
export default class Leftexchange extends Component{
  componentDidMount(){

  }
  render(){
    const {
           tick,
           symbol,
           hight,
           icon,
           price,
           vol,
           change,
           changePre,
           low} = this.props;
           if(this.props === null){
             return(<div>LOADING</div>)
           }
           var changePres = changePre.toFixed(2).toString();
           var changes = change.toFixed(2).toString();
           let color=null
           let caret =null
           if(changePres.indexOf("-") === 0){
             color ="text-change-neg";
             caret = <i className='fas fa-caret-up'></i>
           }else{
             color ="text-change-pos";
             caret = <i className='fas fa-caret-down'></i>
           }
    return(
      <div>
          <Row className="header-left-control text-center mt-3 ml-1 wrapper-section">
            <Col xs="2">
              <i className={icon + " crypto-size text-white"}></i>
            </Col>
            <Col xs="5">
              <span className="text-white">{tick}</span><br></br>
              <span className="text-secondary">VOL <span className="text-white">{vol.toFixed(2)}</span> {symbol}</span><br></br>
              <span className="text-secondary">LOW <span className="text-white">{low}</span></span>
            </Col>
            <Col xs="5">
              <span className="text-white">{price}</span><br></br>
              <span className={color}>{changes.replace("-","")} {caret} ({changePres.replace("-","")}%)</span><br></br>
              <span className="text-secondary">HIGHT <span className="text-white">{hight}</span></span><br></br>
            </Col>
          </Row>
          <Row className="header-left-control mt-3 ml-1 wrapper-section">
            <span className="text-white">Tickers</span><br></br>
          </Row>
        </div>
    )
  }
}
Leftexchange.propTypes={
  tickers:PropTypes.array.isRequired
}
Leftexchange.defaultProps={
  tick: "ETH/BTC",
  icon: "cc ETH",
  symbol:"ETH",
  price:15.35654,
  vol:15.35654,
  change:15.35654,
  changePre:15.35654
}
