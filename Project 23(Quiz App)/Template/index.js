const URL="https://quizapi.io/api/v1/questions?apiKey=nI6CJaCeWpoT9jtkhJx3pnbYXeYwcUwW3iLFwXFH&limit=1"
let op1=document.querySelector("#o");
let op2=document.querySelector("#t");
let op3=document.querySelector("#th");
let op4=document.querySelector("#f");
const ques=document.querySelector("#ques");
const nxtBtn=document.getElementById("next");
const buttons=document.querySelectorAll(".btn-opt");
let data;

const getData= async ()=>{
    let response= await fetch(URL);
    data=await response.json();
    // data=response;
}

const initGame= async ()=>{
    await getData();
    ques.textContent=data[0].question;
    op1.textContent=data[0].answers.answer_a;
    op2.textContent=data[0].answers.answer_b;
    op3.textContent=data[0].answers.answer_c;
    op4.textContent=data[0].answers.answer_d;
    
    // console.log(data[0].correct_answers);
    // console.log(data[0].correct_answers.answer_a_correct);
    // console.log(data[0].correct_answers.answer_b_correct);
    // console.log(data[0].correct_answers.answer_c_correct);
    // console.log(data[0].correct_answers.answer_d_correct);
    op1.style.backgroundColor="white";
    op2.style.backgroundColor="white";
    op3.style.backgroundColor="white";
    op4.style.backgroundColor="white";


    
}



initGame();
nxtBtn.addEventListener("click",initGame);

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        // console.log(btn.getAttribute("id"));
        let id=btn.getAttribute("id");
        if(id==="o" &&  data[0].correct_answers.answer_a_correct==="true"){
            op1.style.backgroundColor="#9EE0BB";
        }

        else if(id==="t" &&  data[0].correct_answers.answer_b_correct==="true"){
            op2.style.backgroundColor="#9EE0BB";
        }
        else if(id==="th" &&  data[0].correct_answers.answer_c_correct==="true"){
            op3.style.backgroundColor="#9EE0BB";
        }
        else if(id==="f" &&  data[0].correct_answers.answer_d_correct==="true"){
            op4.style.backgroundColor="#9EE0BB";
        }
        else{
            if(id==="o"){
                op1.style.backgroundColor="#FF9B91";
            }
            else if(id==="t"){
                op2.style.backgroundColor="#FF9B91";
            }
            else if(id==="th"){
                op3.style.backgroundColor="#FF9B91";
            }
            else if(id==="f"){
                op4.style.backgroundColor="#FF9B91";
            }

            if(data[0].correct_answers.answer_a_correct==="true"){
                op1.style.backgroundColor="#9EE0BB";
            }
            else if(data[0].correct_answers.answer_b_correct==="true"){
                op2.style.backgroundColor="#9EE0BB";
            }
            else if(data[0].correct_answers.answer_c_correct==="true"){
                op3.style.backgroundColor="#9EE0BB";
            }
            else if(data[0].correct_answers.answer_d_correct==="true"){
                op4.style.backgroundColor="#9EE0BB";
            }

        }

    })
})

