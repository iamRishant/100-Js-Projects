const allh1=document.querySelectorAll("#page2 h1");
// console.log(allh1);
allh1.forEach((elem)=>{
    let clutter="";
    let oneh1=elem.textContent;
    let splitted=oneh1.split("");
    splitted.forEach((e)=>{
        // console.log(e);
        clutter+=`<span>${e}</span>`;
    })
    elem.innerHTML=clutter
    // console.log(elem);

})

gsap.registerPlugin(ScrollTrigger) 

gsap.to("#page2 h1 span",{
    color:"white",
    stagger:0.1,
    // duration:5,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:1
    }
})