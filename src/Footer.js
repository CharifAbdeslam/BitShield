import React from 'react';
import {Link} from "react-router-dom";
const Footer =()=>{
  return(
    <div className="exchangeStatus fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span>Exchange Status:</span> <i className="fas fa-circle text-success fa-1x pt-1"></i>
          </div>
          <div className="col-md-4">
            <Link to="/support"><span className="spLink">Support: </span> <i className="fas fa-envelope text-warning fa-1x pt-1"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
