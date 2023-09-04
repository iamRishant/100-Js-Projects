const btn=document.getElementById("b");
const chngDate=document.getElementById("date");

btn.addEventListener("click",calculate);

function calculate(){
    document.getElementById("year").innerHTML=chngDate.value;
}
