const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_W=canvas.width=800;
const CANVAS_H=canvas.height=700;
let gameSpeed=3;

const slider=document.getElementById('slider');
slider.value=gameSpeed;
const showgamespeed=document.getElementById('gameSpeed');
showgamespeed.innerHTML=slider.value

slider.addEventListener('change',()=>{
    showgamespeed.innerHTML=slider.value;
    gameSpeed=slider.value;
})

const backgroundLayer1=new Image();
backgroundLayer1.src='layer-1.png';
const backgroundLayer2=new Image();
backgroundLayer2.src='layer-2.png';
const backgroundLayer3=new Image();
backgroundLayer3.src='layer-3.png';
const backgroundLayer4=new Image();
backgroundLayer4.src='layer-4.png';
const backgroundLayer5=new Image();
backgroundLayer5.src='layer-5.png';


class Layer{
    constructor(image,speedModifier){
        this.x=0;
        this.y=0;
        // this.x2=2400;
        this.width=2400;//width of image
        this.height=700;
        this.speedModifier=speedModifier;
        this.speed=speedModifier*gameSpeed;
        this.image=image
    }

    update(){
        this.speed=this.speedModifier*gameSpeed;
        // if(this.x<=-this.width){
        //     this.x=this.width+this.x2-this.speed;
        // }
        // if(this.x2<=-this.width){
        //     this.x2=this.width+this.x-this.speed;
        // }
        // this.x=Math.floor(this.x-this.speed);
        // this.x2=Math.floor(this.x2-this.speed);
        
        // we can also use single variable
        if(this.x<=-this.width){
            this.x=0;
        }
        this.x=Math.floor(this.x-this.speed);
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        // ctx.drawImage(this.image,this.x2,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
    }
}



const layer1= new Layer(backgroundLayer1,0.2);
const layer2= new Layer(backgroundLayer2,0.4);
const layer3= new Layer(backgroundLayer3,0.6);
const layer4= new Layer(backgroundLayer4,0.8);
const layer5= new Layer(backgroundLayer5,1);

const arr=[layer1,layer2,layer3,layer4,layer5];
function animate(){
    ctx.clearRect(0,0,CANVAS_W,CANVAS_H);

    arr.forEach(object=>{
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
}
animate();