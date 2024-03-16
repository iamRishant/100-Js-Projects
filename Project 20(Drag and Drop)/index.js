const boxes=document.querySelectorAll(".box");
const image=document.querySelector(".image")

boxes.forEach(box=>{
    box.addEventListener("dragover",(e)=>{
        e.preventDefault();
        // console.log("dra");
        box.classList.add("hovered")
    })
    box.addEventListener("dragleave",()=>{
        box.classList.remove("hovered");
    })
    box.addEventListener("drop",()=>{
        box.appendChild(image);
        box.classList.remove("hovered");
        
    })
})