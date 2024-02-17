let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let h2=document.querySelector("#h2");
// console.log(btns[7].innerHTML);

let turnX=true;
// storing winning patterns
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];

// adding event listeners to each btn

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("Box was ckd clicked");
        // btn.innerHTML="X";
        if(turnX){
            btn.innerHTML="X";
            turnX=false;
        }
        else{
            btn.innerHTML="O";
            turnX=true;
        }
        // after clicking the btn we dont want it to change to we will disable it
        btn.disabled=true;
        checkWinner();
    })
})
// it will disable all the btns
const disableAllBtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
// it will enable all the btns
const enableAllBtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerHTML="";
        // btn ko enable krke empty krr diye
    }
}


// check winner after every click
const checkWinner=()=>{
    for(let pattern of winningPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        if(btns[pattern[0]].innerHTML===btns[pattern[1]].innerHTML && btns[pattern[2]].innerHTML===btns[pattern[0]].innerHTML && btns[pattern[0]].innerHTML!==""){
            // console.log(btns[pattern[0]].innerHTML," Wins");
            if(btns[pattern[1]].innerHTML==="X"){
                // console.log("plater 1 wins");
                h2.innerHTML="Player 1 Wins";
                // ab jaise hi koi winner milega we need to disable the buttons
                disableAllBtns();
            }
            else {
                // console.log("plater 2 wins");
                h2.innerHTML="Player 2 Wins";
                disableAllBtns();
        
            }
        }
    }
}


// for resetting the game
const resetGame=()=>{
    turnX=true;
    h2.innerHTML="";
    enableAllBtns();
}
// it will reset the game
reset.addEventListener("click",resetGame);

