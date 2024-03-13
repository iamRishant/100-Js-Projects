// lets create food for snake and snake head
let gameBoard=document.querySelector(".game-board");
const controls=document.querySelectorAll(".controls i");
let foodX;
let foodY;
let snakeX=10;
let snakeY=5;
let score=0;
let highScore=localStorage.getItem("high-score") || 0;//if there is a score in local storage then return other wise 0
let highScoreEle=document.querySelector("#High").innerHTML=`High Score: ${highScore}`;


let snakeBody =[];//we will be using this array to store snake body
// snake head will be fixed

let setIntervalId;
let gameOver=false;
const handleGameover=()=>{
    alert("Game Over...Click Ok to reload");
    clearInterval(setIntervalId);
    location.reload();  
}

// lets change food location randomly
const changeFoodPosition=()=>{
    foodX=Math.floor(Math.random()*30)+1;
    foodY=Math.floor(Math.random()*30)+1;
}

// the init game will change after every 125 miliseconds as we are calling it after every 125 sec
const initGame=()=>{

    if(gameOver){
        return handleGameover();
    }

    // initial position of food
    let htmlMarkup=`<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;
    // lets change food position when its eaten
    if(snakeX===foodX && snakeY===foodY){
        changeFoodPosition();
        // when ever snake eats food we will add its value to array
        snakeBody.push([snakeX,snakeY]);
        // console.log(snakeBody);
        // and lets increase score
        score++;
        highScore=score>=highScore?score:highScore;//updating high score
        // storing it in local storage
        localStorage.setItem("high-score",highScore);
        let scoreEle=document.querySelector("#score").innerHTML=`Score: ${score}`;  
    }

    // lets add body
    for(let i=snakeBody.length-1;i>0;i--){
        // last wala jo element hoga uska jgh uske piche wala lega and uske piche wale ka jgh uske piche wala and so on
        snakeBody[i]=snakeBody[i-1];//last element ko last second overwrite krr dega then usko uske pichewala
        // console.log(snakeBody[i-1]);
        // console.log(snakeBody[i]);
    }

    //at starting snakebody must have some value
    snakeBody[0]=[snakeX,snakeY]
    // grid area is specifying the location of the div in terms of row and col
    snakeX+=velocityX;
    snakeY+=velocityY;

    if(snakeX<=0 || snakeX>30 || snakeY<=0 || snakeY>30){
        gameOver=true;
    }
    // lets use loop to store snake body and add a div whenever it eats food

    for(let i=0;i<snakeBody.length;i++){

        htmlMarkup+=`<div class="snake" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        // let check if snake body at any point hit the body then game over
        if(i!=0 && snakeBody[0][1]===snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver=true;
        }

    }
    gameBoard.innerHTML=htmlMarkup;
}
changeFoodPosition();
// initGame();
setIntervalId=setInterval(initGame,125);//it will automatically call init fxn and it will change position of snake with respect to key pressed

// lets add  event listeners when key pressed
let velocityX=0;
let velocityY=0;
const changeDirection=(e)=>{
    // console.log(e);
    // we will only change the direction if is not moving in its oppsite direction
    if(e.key==="ArrowUp" && velocityY!=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.key==="ArrowDown" && velocityY!=-1){
        velocityX=0;
        velocityY=+1;
    }
    else if(e.key==="ArrowLeft" &&velocityX!=1){
        velocityX=-1;
        velocityY=0;

    }
    else if(e.key==="ArrowRight" && velocityX!=-1){
        velocityX=1;
        velocityY=0;
    }
    // updating snake velocity and then calling fxn again
    // we needed it to move continuously so we set interval
    // snakeX+=velocityX;
    // snakeY+=velocityY;
    // initGame();
}
document.addEventListener("keydown",changeDirection);

controls.forEach(key=>{
    key.addEventListener("click",()=>changeDirection({key:key.dataset.key}))
})