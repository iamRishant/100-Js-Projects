let playerState="idle"

let select=document.querySelector("#select");
select.addEventListener("change",(e)=>{
    playerState=e.target.value
})




const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext("2d");

const canvasW=canvas.width=600;
const canvasH=canvas.height=600;

let playerImage=new Image();
playerImage.src='shadow_dog.png';
const spriteW=575;
const spriteH=523;
const staggerFrame=6;
let gameFrame=0;

let frameX=0;
let frameY=1;

let spriteAnimation=[];
const animationStates=[
    {
        name:"idle",
        frame:7
    },
    {
        name:"jump",
        frame:7
    },
    {
        name:"fall",
        frame:7
    },
    {
        name:"run",
        frame:9
    },
    {
        name:"dizzy",
        frame:11
    },
    {
        name:"sit",
        frame:5
    },
    {
        name:"roll",
        frame:7
    },
    {
        name:"bite",
        frame:7
    },
    {
        name:"ko",
        frame:12
    },
    {
        name:"getHit",
        frame:4
    },
];

animationStates.forEach((state,index)=>{
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frame;j++){
        let positionX=j*spriteW;
        let positionY=index*spriteH;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimation[state.name]=frames;
})




function animate(){
    ctx.clearRect(0,0,canvasW,canvasH);

    let position=Math.floor(gameFrame/staggerFrame)%spriteAnimation[playerState].loc.length;
    let frameX=position*spriteW;
    let frameY=spriteAnimation[playerState].loc[position].y;

    ctx.drawImage(playerImage,frameX,frameY,spriteW,spriteH,0,0,spriteW,spriteH);
    gameFrame++;
    requestAnimationFrame(animate);
}



animate()








































// LEARNING--------------------------------------------------------------

// const canvas=document.getElementById('canvas1');
// const ctx=canvas.getContext('2d');
// const CANVAS_W=canvas.width=600;
// const CANVAS_H=canvas.height=600;

// const playerImage=new Image();//this is just like creating a image element
// playerImage.src='shadow_dog.png';

// // let x=0.1;
// // let y=599.9;

// // since the height of image is =5230 and there are 10 col there for height of each col
// const spriteH=523;
// // similarly width=6876/12
// const spriteW=575;//573 hoga 2 px adjustment ke liye


// let frameX=0;
// let frameY=0;
// let gameFrame=0;
// const staggerFrame=5;//it will determine speed of frame higher == slower
// function animate(){
//     ctx.clearRect(0,0,CANVAS_W,CANVAS_H);//it will create the area between this coordinates
//     // ctx.fillRect(x,0,10,600);//it will fill this area by default with black color
//     // x+=0.1;
//     // y-=0.1;   
//     // ctx.fillRect(y,0,10,600);
//     // ctx.fillRect(0,x,600,10);
//     // ctx.fillRect(0,y,600,10);

//     // draw image 9 argument leta hai source (iska top left coordinate and bottom right coordinate)
//     // and last 4 argument  hoga canvas ko kha move krna hai destination (iska bhi top left coordinate and bottom right coordinate)
//     // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

//     // basically first 4 argument will cut a piece of image from image and next 4 will tell where to put that canvas

//     ctx.drawImage(playerImage,frameX * spriteW,frameY * spriteH,spriteW,spriteH,0,0,spriteW,spriteH);
//     if(gameFrame%staggerFrame==0){
//         if(frameX<6) frameX++;
//         else frameX=0;
//     }
//     gameFrame++;



//     requestAnimationFrame(animate);//it will call the animate fxn once but if you notice yha recursion hoga
//     // and it is a built in function
// }

// animate();

