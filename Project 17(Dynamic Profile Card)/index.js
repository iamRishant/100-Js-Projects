const buttons=document.querySelectorAll("button");
const upperBlock=document.querySelector(".upper");
const name=document.querySelector(".change");
const follower=document.querySelector("#followers");
const following=document.querySelector("#following");
const fbutton=document.querySelector(".follow");
const mbutton=document.querySelector(".message");

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let Color=btn.getAttribute("id");
        upperBlock.style.backgroundColor=Color;
        name.style.color=Color;
        follower.style.color=Color;
        following.style.color=Color;
        fbutton.style.backgroundColor=Color;
        mbutton.style.color=Color;
        mbutton.style.border=`3px solid ${Color}`;

    })
})