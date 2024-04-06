// this way i will tell vs code we are using html canvas element
/** @type {HTMLCanvasElement} */

const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_W=canvas.width=500;
CANVAS_H=canvas.height=1000;

let numberOfEnemies=2000;
let enemiesArray=[];

// let enemyImage=new Image();
// enemyImage.src='enemy1.png'
let gameSpeed=0;




class Enemy{
    constructor(){
        // lets create a random x and y coordinates for the enemy 

        this.image=new Image();
        this.image.src='enemy3.png'
        // this.x=Math.random()*canvas.width;
        // this.y=Math.random()*canvas.height;
        this.spriteWidth=218;
        this.spriteHeight=177;
        // this height and widhth are relative to sprite height and width
        this.width=this.spriteWidth/2;
        this.height=this.spriteHeight/2;
        // lets create a speed variable
        this.speed=(Math.random()*4)+1;
        this.frame=0;
        // this will control the flapspeed for each element 
        this.flapSpeed=Math.floor(Math.random()*4 +1);

        // now if we want to keep our bats inside the box we need to fix its position
        // this will ensure that x and y coordinate will be inside the canvas
        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.height);

        this.angle=0;
        this.angleSpeed=Math.random()*2;
        // this.curve=Math.floor(Math.random()*200);//this is like radius but we want our radius to be canvas.width

    }
    update(){
        // ab speed ko add and sub krr skte hai
        // this.x+=(this.speed - 2.5);
        // this.y+=(this.speed - 2.5);
        
        // it will change the starting points of bats and make them move up and down
        // this.x-=this.speed;
        // this.y += this.curve*Math.sin(this.angle);//math.sin cycle through -1 and +1 but if we multiply it with x then it will cycle from -x to +x
        // this.angle+=this.angleSpeed;

        this.x=canvas.width/2*Math.sin(this.angle * Math.PI/90) + canvas.width/2-this.width/2;//to center them horizotally
        this.y=canvas.height/2*Math.cos(this.angle * Math.PI/360) + canvas.height/2-this.height/2;
        this.angle+=this.angleSpeed
        //here math.sin creating periodically horizal movment and cos does that for vertical movement together (since hypoteneus dont change ) the form circular movement 
        //math.pi ke niche ka value change krenge and sin cos change krenge to diffrent pattern milega
       

        if(this.x+this.width<0) this.x=canvas.width

        if(gameSpeed%this.flapSpeed===0){
            this.frame > 4? this.frame=0 : this.frame++
        }
    }
    draw(){
        // ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
        // this.frame++;
        
    }
}




// const enemy1=new Enemy();//rather than creating one we will create 100
for(let i=0;i<numberOfEnemies;i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_W,CANVAS_H);
    // enemy1.update();
    // enemy1.draw();

    enemiesArray.forEach(enemy=>{
        enemy.update();
        enemy.draw();
    })
    gameSpeed++;
    requestAnimationFrame(animate);

}
animate();