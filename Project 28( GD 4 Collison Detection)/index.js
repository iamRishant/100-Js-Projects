const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d');

canvas.width=500;
canvas.height=700;

let canvasPosition=canvas.getBoundingClientRect();//this will give all the properties of a element in html its height,width,margin padding


ctx.fillStyle='white';//it will change the by default black color to white

// ctx.fillRect(50,50,100,100);
let explosion=[];

class Explosion{
    constructor(x,y){
        // this.x=x;
        // this.y=y;
        // we need to offset the height and width so that click is on the center to object ke height width by 2 se minus krna hoga x and y ko
        
        this.spriteWidth=200;
        this.spriteHeight=179;
        // to maintain the aspect ration divide it with same number
        // ye jiss location par mera image bnega uska coodinate rhega to image ka size bda chota krne ke liye divide krte and same se krte hai taki aspect ration maintained rhe
        this.width=this.spriteWidth/0.9;
        this.height=this.spriteHeight/0.9;//we can also multiply it by 0.5 coz multiplication is faster

        // yha offset x and y hai
        this.x=x-this.width/2;
        this.y=y-this.height/2;

        this.image=new Image();
        this.image.src='boom.png';
        this.frame=0;

        // to slow down
        this.timer=0;

        // time to add sound
        this.sound=new Audio();
        this.sound.src='boom.wav';
    }
    update(){
        if(this.frame===0){
            // ek baar hi play krna hai n
            this.sound.play();
        }
        this.timer++;
        if(this.timer%15===0){

            this.frame++;
        }

    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}

window.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(canvasPosition);


    // ctx.fillStyle='white';
    // ctx.fillRect(e.x-canvasPosition.left-25,e.y-canvasPosition.top-25,50,50);
    // -ve to offset so that jab click kre to box ke middle me aae

    let positionX=e.x-canvasPosition.left;
    let positionY=e.y-canvasPosition.top;

    explosion.push( new Explosion(positionX,positionY));

    console.log(explosion);
})
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<explosion.length;i++){
        explosion[i].update();
        explosion[i].draw();
        // console.log(explosion[i].frame);//ye fram badhte jata hai har baar call krne par aur har object out of frame ho jata hai isiliye gyb ho ja rha
        // so to remove 
        if(explosion[i].frame>5){
            explosion.splice(i,1);//it will remove 1 object from that index i
            // i--;
        }
    }

    requestAnimationFrame(animate);
    // console.log("hello");
}
animate();