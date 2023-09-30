const box2=document.getElementsByClassName("box2")
const hour=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');



// ===================== 2 box============
const thh=document.getElementById('thh');
const tmm=document.getElementById('tmm');
const tss=document.getElementById('tss');


var total=0;
totalvalue=()=>{
total=Number(hour.value)*3600+Number(min.value)*60+Number(sec.value);
}

// ===============timers================
Timer=()=>{
totalvalue();
total--;

if(total>=0){
    var hh=Math.floor(total/3600);
    var mm=Math.floor(total/60-hh*60);
    var ss=Math.floor(total-(hh*3660)+(mm*60));
    thh.innerHTML=hh;
    tmm.innerHTML=mm;
    tss.innerHTML=ss;
    
}else{
    box2.innerText="Time is Up!"
}
}


settimer=()=>{
    
 setInterval(Timer,1000);
 console.log(Timer);
}

deleteTimer=()=>{
    box2.style.display="hidden";
}