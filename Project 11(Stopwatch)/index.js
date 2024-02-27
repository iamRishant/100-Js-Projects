let [mi,seconds,minutes,hours]=[0,0,0,0];
let timer=document.querySelector(".stopwatch");
let interval;

document.querySelector("#start").addEventListener("click",()=>{
    interval=setInterval(updateTimer,10);//call updatetimer after every 10 miliseconds
})

function updateTimer(){
    mi+=10;
    if(mi==1000){
        mi=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h= hours<=9 ? "0" +hours : hours;
    let m=minutes<=9 ? "0" +minutes : minutes;
    let s= seconds<=9 ? "0" +seconds : seconds;
    let mil=mi<9 ? "00" +mi :mi<99 ? "0" + mi : mi;
    // document.getElementById("hour").textContent=h;
    // document.getElementById("min").textContent=m;
    // document.getElementById("sec").textContent=s;
    // document.getElementById("mili").textContent=mil;

    timer.innerHTML=`${h} : ${m} : ${s} : ${mil}`;

}
document.querySelector("#reset").addEventListener("click",()=>{
    clearInterval(interval);
    mi=0;
    seconds=0;
    minutes=0;
    hours=0;
    timer.innerHTML=`00 : 00 : 00 : 000`;
    
})

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(interval);
})