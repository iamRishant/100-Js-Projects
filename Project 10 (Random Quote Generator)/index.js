const quote=document.querySelector("#quote");
const author = document.querySelector("#author");
const button=document.querySelector("button");
const URL="https://api.quotable.io/quotes/random"
button.addEventListener("click",async ()=>{
    let response= await fetch(URL);
    let data=await response.json();
    // console.log(data[0].content);
    quote.innerHTML=data[0].content;
    author.innerHTML=data[0].author;
});