const body=document.querySelector("body");
const toggle=document.querySelector(".toggle");

let mode=localStorage.getItem("mode");

if(mode==="dark"){
    body.classList.add("dark");
    toggle.classList.add("active");

}
else{
    body.classList.remove("dark");
    toggle.classList.remove("active");
}

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
})
toggle.addEventListener("click",()=>{
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        return localStorage.setItem("mode","light");
    }
    localStorage.setItem("mode","dark");
})