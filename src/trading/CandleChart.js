import React, { Component } from 'react';
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import Chart from './Chart';
import { getData} from "../func"
export default class CandleChart extends Component{

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
  <div className="mt-3 wrapper-section pl-3">
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret className="mr-2">
        MORE
      </DropdownToggle>
      <DropdownMenu >
          <DropdownItem>
            HOME
          </DropdownItem>
          <DropdownItem>
            SUPPORT
          </DropdownItem>
      </DropdownMenu>
      <span className="text-white">Hello test</span>
    </UncontrolledDropdown>
    <Chart  data={this.state.data} />
  </div>
  		)
  	}

}
