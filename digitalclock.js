function start(){
  window,setInterval(clock, 1000);
}


function clock(){
  
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  h = h<10? "0" +h:h;
  m = m<10? "0" +m:m;
  s = s<10? "0" +s:s;
  
  let result = document.getElementById("result");
  
  result.textContent = h + " : " + m + " : " + s;
  
}
