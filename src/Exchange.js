import React, { Component } from 'react';
export default class Exchange extends Component{
  componentDidMount(){
    var nv = document.getElementById("nvL");
      if(window.location.pathname === "/exchange"){
        nv.style.display = "none";
      }else{
        nv.style.display = "block";
      }
  }
  render(){
    return(
     <div className="container">
         <h1 className="text-white">Exchange</h1>
     </div>
   );
  }
}
