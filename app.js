window.onload = ()=> {
var seconds=00;
var tens = 00;

var secs = document.getElementById("seconds");
var ten = document.getElementById("tens");
var stu = document.getElementById("button-start");
var sp = document.getElementById("button-stops");
var rt = document.getElementById("button-reset");
console.log(secs,ten,stu,sp,rt);
var Interval;
stu.onclick = () =>{
  clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    console.log(Interval);
}
    startTimer = ()=> {
        tens++;
        console.log(tens);
        if(tens <=9){
            ten.innerHTML = "0" + tens;
        }
        if(tens>9){
            ten.innerHTML= tens;
        }
        if(tens>99){
            seconds++;
            secs.innerHTML = "0" + seconds;
            tens=00;
            ten.innerHTML = "0" + tens;
        }
        if(seconds>9){
            secs.innerHTML = seconds;
        }
    }
sp.onclick = ()=>{
    clearInterval(Interval);
}
rt.onclick = ()=>{
    tens= 00;
    seconds= 00;
    ten.innerHTML= "0" + tens;
    secs.innerHTML="0" + seconds;
    clearInterval(Interval);
}
}