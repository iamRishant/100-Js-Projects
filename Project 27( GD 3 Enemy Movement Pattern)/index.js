// this way i will tell vs code we are using html canvas element
/** @type {HTMLCanvasElement} */

const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_W=canvas.width=500;
CANVAS_H=canvas.height=1000;

let numberOfEnemies=100;
let enemiesArray=[];

// let enemyImage=new Image();
// enemyImage.src='enemy1.png'
let gameSpeed=0;




class Enemy{
    constructor(){
        // lets create a random x and y coordinates for the enemy 

        this.image=new Image();
        this.image.src='enemy1.png'
        // this.x=Math.random()*canvas.width;
        // this.y=Math.random()*canvas.height;
        this.spriteWidth=293;
        this.spriteHeight=155;
        // this height and widhth are relative to sprite height and width
        this.width=this.spriteWidth/2.5;
        this.height=this.spriteHeight/2.5;
        // lets create a speed variable
        // this.speed=(Math.random()*4)-2;//it will create a number between -2 and 2
        this.frame=0;
        // this will control the flapspeed for each element 
        this.flapSpeed=Math.floor(Math.random()*4 +1);

        // now if we want to keep our bats inside the box we need to fix its position
        // this will ensure that x and y coordinate will be inside the canvas
        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.height);

    }
    update(){
        // ab speed ko add and sub krr skte hai
        // this.x+=(this.speed - 2.5);
        // this.y+=(this.speed - 2.5);
        
        // it will change the starting points of bats and make them move up and down
        this.x+=Math.random()*5 -2.5;
        this.y+=Math.random()*5 - 2.5;

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