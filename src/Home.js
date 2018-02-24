import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button}  from 'reactstrap';
import ExchangeAnimation from "./img/home.png";
export default class Home extends Component{
  render(){
    return(
      <div>
      <div className="container homeContainer">
        <div className="row">
          <div className="col-md-6">
          <h1 className="text-white">
          <i className="fas fa-globe fa-2x text-warning "></i> A World class<br></br> exchange platform
          </h1>
          <p className="text-white txHome">BitShield offer a world class exchange platform<br></br> with a real time chart ,order book and trading<br></br> history.</p>
          <Link to="/signup"> <Button  className="text-white mr-4" outline color="warning">SIGN UP</Button></Link>
           <Link to="/exchange"><Button className="text-white" color="warning">VIEW EXCHANGE</Button></Link>
        </div>
        <div className="col-md-6">
          <img src={ExchangeAnimation} alt="Unable to load the exchange..."/>
        </div>
        </div>
      </div>

    </div>
    )
  }
}
