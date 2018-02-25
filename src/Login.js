import React, { Component } from 'react';
import {_chekNav} from "./func.js";
export default class Singup extends Component{
  componentDidMount(){
    _chekNav();
  }
  render(){
    return(
     <div className="container">
         <h1 className="text-white">LOG IN</h1>
     </div>
   );
  }
}
