import React, { Component } from 'react';
export default class Leftexchange extends Component{
  render(){
    return(<div>
          <div className="row header-left-control text-center mt-3 ml-1 wrapper-section">
            <div className="col-md-3">
              <i class="cc ETH crypto-size text-white" title="ETH"></i>
            </div>
            <div className="col-md-4">
              <span className="text-white">ETH/BTC</span><br></br>
              <span className="text-secondary">VOL xxxx ETH</span><br></br>
              <span className="text-secondary">LOW xxxxx</span>

            </div>
            <div className="col-md-5">
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-white">xxxxxx</span><br></br>
              <span className="text-secondary">HIGHT xxxxx</span><br></br>
            </div>

          </div>
    </div>

    )
  }
}
