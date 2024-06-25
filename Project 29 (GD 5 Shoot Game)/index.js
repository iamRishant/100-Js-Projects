const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let raven=[];

let timeToNextRaven=0;
let ravenInterval=500;
let lastTime=0;
let gameSpeed=0;

let score=0;
ctx.font='50px Impact';

class Raven{
    constructor(){
        this.spriteWidth=271;
        this.spriteHeight=194;
        // this.width=this.spriteWidth/2;//this width and height gives height of raven so we will make it random
        // this.height=this.spriteHeight/2;

        let sizeModifier=Math.random()*0.6+0.4;
        this.width=this.spriteWidth*sizeModifier;
        this.height=this.spriteHeight*sizeModifier;
        this.x=canvas.width;
        this.y=Math.floor(Math.random()*(canvas.height - this.height));

        this.directionX=Math.random()*5 +1;
        this.directionY=Math.random()*5 - 2.5;
        this.markedForDeletion=false;

        this.image=new Image();
        this.image.src='raven.png';
        this.flapSpeed=Math.floor(Math.random()*9+5);//we can also use concept of delta time for different speed in differnt computers
        
        this.frame=0;
    }
    update(){
        this.x-=this.directionX;
        this.y+=this.directionY;
        // we dont want our raven to go out 
        if(this.y<0 || this.y>canvas.height-this.height){
            this.directionY=-1*this.directionY;//it means change its direction
        }
        if(this.x<0-this.width){
            // if my element is passed from screen
            this.markedForDeletion=true;
        }
        if(gameSpeed%this.flapSpeed==0){
            this.frame++;
        }
        if(this.frame>5) this.frame=0;
    }
    draw(){
        // ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}
function drawScore(){
    ctx.fillStyle='white';
    ctx.fillText('Score: ' + score,50,75);//first is what then 2nd and 3rd x and y coordinate
}

window.addEventListener('click',(e)=>{
    let detectColor=ctx.getImageData(e.x,e.y,1,1);
    console.log(detectColor);
})

function animate(timestamp){// time stamp is the default value of request animation frame which calculate time in milisecond har bar jab animate ko call krega
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    let deltaTime=timestamp-lastTime;//current time - previous time//is is the time between two frames which is 6 to 7 milisec
    // updating last time
    lastTime=timestamp;
    timeToNextRaven+=deltaTime;

    // hmlog yha ek certain time period par object bnaege 
    if(timeToNextRaven>ravenInterval){
        raven.push(new Raven());//ab jab jab ek particular interval pass hoga tab tab new object create hoga
        // and after pushing the object we will wait again
        timeToNextRaven=0;
        // console.log(raven);
    }
    // order matters in which we are drawing

    // drawScore();
    
    [...raven].forEach(object=>object.update());
    [...raven].forEach(object=>object.draw());
    // we will filter it jo pass hogya hai usko delete
    raven=raven.filter(obj=>!obj.markedForDeletion)//filter method new array create krega and usko hi rakhega jiska value true hoga in this case it will only keep those element which are not marked for deletion
    // console.log(raven);
    gameSpeed++;
    requestAnimationFrame(animate);
}
animate(0);//we have to pass a initial value of timestamp other wise first time calculation in line 36 it will be undefined