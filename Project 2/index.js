const btn=document.getElementById("b");
const chngDate=document.getElementById("date");
const ageToChange=document.getElementById("year");



function calculate(){
    const birthValue=chngDate.value;
    if(birthValue==="") {

    alert("Please Enter Your Birthday");

    } else {
        const age = getAge(birthValue);
        ageToChange.innerHTML=age;
    }
}
function getAge(birthValue){
    const aajKaDin=new Date();
    const birthDate=new Date(birthValue);
    let age=aajKaDin.getFullYear()-birthDate.getFullYear();
    return age;
}


btn.addEventListener("click",calculate);