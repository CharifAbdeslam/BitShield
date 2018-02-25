export function _chekNav(){
  var nv = document.getElementById("nvL");  
  if(window.location.pathname === "/exchange"){

    nv.style.display = "none";
  }else{
    nv.style.display = "block";
  }


}
