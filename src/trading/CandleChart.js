import React, { Component } from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import Chart from './Chart';
import { getData} from "../func"
export default class CandleChart extends Component{
  constructor(){
    super();
    this.State={
      mri:[]
    }
  }
  tickers(){
    getData().then(data => {
        this.setState({data},()=>{
        console.log(this.state.data)
      })
    })
  }
  componentDidMount() {
      this.tickers()
     setInterval(()=>{
       this.tickers()
     },100000000000000000000)
  	}
  	render() {
  		if (this.state == null) {
  			return <div>Loading...</div>
  		}
  		return (
  <div className="mt-3 wrapper-section">
    <ButtonGroup>
         <Button className="btn-primary text-secondary-white">1MN</Button>{' '}
         <Button className="btn-primary text-secondary-white">5MN</Button>{' '}
         <Button className="btn-primary text-secondary-white">15MN</Button>
         <Button className="btn-primary text-secondary-white">30MN</Button>
         <Button className="btn-primary text-secondary-white">1H</Button>
         <Button className="btn-primary text-secondary-white">3H</Button>
         <Button className="btn-primary text-secondary-white">6H</Button>
         <Button className="btn-primary text-secondary-white">1D</Button>
         <Button className="btn-primary text-secondary-white">1W</Button>
       </ButtonGroup>
       <Button  className="btn-secondary text-secondary-white ml-2">
          <i class="fas fa-sync-alt"></i> REFRESH
       </Button>
    <Chart  data={this.state.data} />
  </div>
  		)
  	}

}
