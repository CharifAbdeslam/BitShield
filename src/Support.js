import React, {Component} from 'react';
import {_chekNav} from "./func.js";
export default class Support extends Component {
  componentDidMount() {
  _chekNav();
  }
  render() {
    return (<div className="container">
      <h1 className="text-white">Support</h1>
    </div>)
  }

}
