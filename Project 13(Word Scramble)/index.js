
let wordToShow=document.querySelector(".guess");
let hint=document.querySelector("#hint");
let refresh=document.querySelector("#refresh");
let verify=document.querySelector("#verify");
let time=document.querySelector("#time");


let timer;

// implementing timer
const initTimer=(maxTime)=>{
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;
            time.textContent=maxTime;
        }
        else{
            clearInterval(timer);
            time.textContent=30;
            initGame();
        }

    },1000)
}

var randomIndex=Math.floor(Math.random()*words.length);
const initGame=()=>{
    initTimer(30);
    randomIndex=Math.floor(Math.random()*words.length);
    let randomObj=words[randomIndex];
    var scramble=words[randomIndex].word.split("");

    let n=scramble.length;
    for(let i=n-1;i>0;i--){
        // it will create a random j so that we can swap
        let j=Math.floor(Math.random()*(n));//getting random index between 0 to n

        [scramble[i],scramble[j]]=[scramble[j],scramble[i]];
    }

    let newWord=scramble.join("");
    wordToShow.textContent=newWord;
    hint.textContent=randomObj.hint;


    // input value ko empty krke uska length restrict krenge
    document.querySelector("input").value="";
    document.querySelector("input").setAttribute("maxlength",newWord.length);
}

initGame();
// refresh button
refresh.addEventListener('click',()=>{
    time.textContent=30;
    // timer clear nhi krenge to purana wala chalte rhega
    clearInterval(timer);
    initGame();
})
// verify the given input
verify.addEventListener('click',()=>{
    let enteredWord=document.querySelector("input").value;
    let givenWord=words[randomIndex].word;

    if(enteredWord.length==0){
            alert("Please enter a word");
    }

    else if(givenWord.toLowerCase()===enteredWord.toLowerCase()){
        alert(`Congrats ${enteredWord} is a correct Word`);
    }
    
    else{
        alert( `Oops ${enteredWord} is not the correct Word. The correct Word is ${givenWord}`);
    }
    time.textContent=30;
    clearInterval(timer);
    initGame();// recall the fxn
})


