const options =document.querySelectorAll(".circle");
const userScore=document.querySelector("#u");
const botScore=document.querySelector("#c");
let show=document.querySelector("#show");
let message=document.querySelector(".message");

// let score=userScore.textContent;

// console.log(score);
// let newval=Number(score)+1;
// userScore.textContent=newval;
// console.log(options[0]);


function checkWinner(u,c){
    if(u==c){
        show.textContent="Draw hogya....Try again";
        message.classList.remove("winner");
        message.classList.remove("looser");
        message.classList.add("draw");

    }
    else if((u==0 && c==2) || (u==1 && c==0) || (u==2 && c==1)){
             userScore.textContent=Number(userScore.textContent)+1;
            show.textContent="Are Wah....Kya baat hai...You won";
            message.classList.add("winner");
            message.classList.remove("looser");
            message.classList.remove("draw");
    }
    else{
        botScore.textContent=Number(botScore.textContent)+1;
        show.textContent="Kya Yaar....Bot se haar rhe ho...";
        message.classList.remove("winner");
        message.classList.add("looser");
        message.classList.remove("draw");
    }
}
options.forEach((option,index)=>{
    option.addEventListener("click",()=>{
        // console.log(option.getAttribute("id"));
        // console.log(index);
        var randomNumber = Math.random() * 3;
        var randomInteger = Math.floor(randomNumber);

        checkWinner(index, randomInteger);

    })
})