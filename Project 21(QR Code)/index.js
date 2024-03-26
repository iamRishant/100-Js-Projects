const URL=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const btn=document.querySelector(".button");
const input=document.querySelector(".input");
const image=document.querySelector(".image");
const imgbox=document.querySelector(".image-box");


btn.addEventListener("click",()=>{
    let data=input.value;
    if(data===""){
        alert("Input Box cannot be empty");
    }
    else{  
        image.classList.remove("qr");
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        imgbox.classList.add("qr");


    }
   
})


