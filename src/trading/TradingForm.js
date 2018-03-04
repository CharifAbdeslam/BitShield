import React, { Component } from 'react';
import {Collapse} from 'reactstrap';
export default class TradingForm extends Component{
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
   this.state = { collapse: true };
 }

 toggle() {
   this.setState({ collapse: !this.state.collapse });
 }

  render(){
    return(<div className="tr-form mt-2 ml-2">
      <span className="text-secondary-white mt-2" onClick={this.toggle}>
      <i className="fas fa-angle-double-down"></i> ORDER FORM</span>

      <Collapse isOpen={this.state.collapse}>
        <div>
        From goes here
        </div>
        </Collapse>
    </div>)
  }
}
