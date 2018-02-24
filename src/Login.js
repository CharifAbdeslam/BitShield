import React, { Component } from 'react';
export default class Singup extends Component{
  componentDidMount(){
    var nv = document.getElementById("nvL");
      nv.style.display = "block";
  }
  render(){
    return(
     <div className="container">
         <h1 className="text-white">LOG IN</h1>
     </div>
   );
  }
}
