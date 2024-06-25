const btn=document.querySelector('button');

let texts=["You Can't Do it","Nice Try","Keep Chasing","In your Dreams","Almost Got Me","😂","Even snails are faster than you"];


window.addEventListener('mousemove',(e)=>{
    let details=btn.getBoundingClientRect();
    if(e.x>=details.left && e.x<=details.right && e.y>details.top && e.y<=details.bottom){
        console.log("hello");
        let x=Math.random()*80+10;
        let y=Math.random()*80+10;
        btn.style.top=`${x}%`;
        btn.style.left=`${y}%`;
        let index=Math.floor(Math.random()*texts.length);
        btn.textContent=texts[index];
    }
}) 