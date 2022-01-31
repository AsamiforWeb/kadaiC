function start(){
  window,setInterval(clock, 1000);
}


function clock(){
  
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  if(h<10){
    h = " 0" + h;
  }else{
    h = h;
  }
  
  if(m<10){
    m = " 0" + m;
  }else{
    m = m;
  }
  
  if(s<10){
    s = " 0" + s;
  }else{
    s = s;
  }
  
  let result = document.getElementById("result");
  
  result.textContent = h + " : " + m + " : " + s;
  
}
