import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button}  from 'reactstrap';
import ExchangeAnimation from "./img/btc.png";
import {_chekNav} from "./func.js";
export default class Home extends Component{
  componentDidMount(){
  _chekNav();
  }
  render(){
    return(
      <div>
      <div className="container homeContainer">
        <div className="row">
          <div className="col-md-4">
          <h1 className="text-white">
          <i className="fas fa-globe fa-2x text-primary"></i> A World Class<br></br> Exchange Platform
          </h1>
          <p className="text-white txHome">BitShield offer a world class exchange platform<br></br> with a real time chart ,order book and trading<br></br> history.</p>
          <Link to="/signup"> <Button  className="text-white mr-4" outline color="primary">SIGN UP</Button></Link>
           <Link to="/exchange"><Button className="text-white" color="primary">VIEW EXCHANGE</Button></Link>
        </div>
        <div className="col-md-8">
          <img src={ExchangeAnimation} className="img-fluid" alt="Unable to load the exchange..."/>
        </div>
        </div>
      </div>

    </div>
    )
  }
}
