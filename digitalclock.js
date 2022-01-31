function start(){
  window.setInterval(clock, 1000);//1000ミリ秒ごとにclock関数を繰り返す
}


function clock(){
  
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  //一桁の場合、数字の前に0をつける
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
  document.getElementById("result").innerHTML =  <div  style = "padding: 10px; margin-bottom: 10px;border: 7px bouble;">h + " : " + m + " : " + s</div>;//時刻を表示
  
}
