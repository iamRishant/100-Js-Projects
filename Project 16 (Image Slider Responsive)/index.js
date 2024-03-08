const caraousel=document.querySelector(".caraousel");
const arrowBtns=document.querySelectorAll(".wrapper i");
const firstCardWidth=caraousel.querySelector(".card").offsetWidth;
// console.log(firstCardWidth);

arrowBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        // console.log(btn.id);
        caraousel.scrollLeft+= btn.id==="left"? -firstCardWidth-10:firstCardWidth+10;//this extra 10 is of gap given between them
        // if(btn.id==="left"){
        //     caraousel.scrollLeft+=-firstCardWidth-10;
        // }
        // else caraousel.scrollLeft+=firstCardWidth+10


    })
});


let isDragging=false,startX,startScrollLeft,timeoutId;

const dragStart=(e)=>{
    isDragging=true;
    caraousel.classList.add("dragging");
    // recording the initial scroll and mouse position
    startX=e.pageX;
    startScrollLeft=caraousel.scrollLeft;
    // console.log(startX);
    // console.log(startScrollLeft);
}
const dragStop=()=>{
    isDragging=false;
    caraousel.classList.remove("dragging")
}
const dragging=(e)=>{
    // console.log(e.pageX);
    // console.log("helo");
    if(!isDragging) return;//if button is not clicked then return 
    // updating the scroll according the mouse movement
    caraousel.scrollLeft=startScrollLeft - (e.pageX-startX);
    // caraousel.scrollLeft=(e.pageX-startX);
    
}
caraousel.addEventListener("mousedown",dragStart);
caraousel.addEventListener("mousemove",dragging);
// caraousel.addEventListener("touchmove",dragging);
document.addEventListener("mouseup",dragStop);