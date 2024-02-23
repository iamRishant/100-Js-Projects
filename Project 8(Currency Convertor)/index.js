const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown=document.querySelectorAll(".drop-down select");

let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let toUpdate=document.querySelector("#res");

// for(let code in countryList){
//     console.log(code, countryList[code]);
// }

let btn=document.querySelector("form button");

for(let select of dropdown){
    for(code in countryList){
        let newEle=document.createElement("option");
        newEle.innerText=code;
        newEle.value=code;
        // now initially left me us dollar hona chahiye and right me inr
        if(select.name==="from" && code=="USD"){
            newEle.selected=true;
        }
        else if(select.name==="to" && code=="INR"){
            newEle.selected=true;
        }
        select.appendChild(newEle);

        
    }
    select.addEventListener("change",(event)=>{
        // .target wo btata hai kiss element par event occur hua hai 
        upadteFlag(event.target);
    })
}

function upadteFlag(element){
    // .value btata hai uss element ka value
    let flagCode=element.value;
    let flag=countryList[flagCode];
    // console.log(flag);
    let newSrcLink=`https://flagsapi.com/${flag}/shiny/64.png`;
    // ab image ko update krna hai here element is our select element and img and select ka parent same hai
    // element.parentNode.querySelector("img").src=newSrcLink;
    let img=element.parentNode.querySelector("img");
    img.src=newSrcLink;
}

btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    let amount=document.querySelector("form input").value;
    // console.log(amount);
    if(amount==="" || amount<1){
        amount=1;
        document.querySelector("form input").value=1;
    }

    // console.log(fromCurr.value.toLowerCase(),toCurr.value.toLowerCase());
    // api works on lowercase isiliye convert krr rhe
    let URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // note to use await we have to make fxn async;
    let response=await fetch(URL);
    // we got the data lets convert it into reaadable data
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    
    // console.log(rate);
    let newValue=(rate*amount).toFixed(2);
    // to fixed round of krta hai value ko

    // console.log(newValue);
    toUpdate.innerText=newValue;


})