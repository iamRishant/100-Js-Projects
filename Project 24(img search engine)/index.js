const input=document.getElementById("ipt");
const searchBtn=document.getElementById("Search");
const searchResult=document.querySelector(".search-result");
const showMore=document.querySelector(".show-more");

let keyword="";
let page=1;
async function searchImage(){
    // searchResult.clearChildren();
    keyword=input.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=HuPvmPIDcV2CK4s70Tgfs0dSFa7KqGELoHE_tivK4Sc&per_page=12`
    const result=await fetch(url);
    const data= await result.json();

    if(page===1){
        searchResult.innerHTML="";
    }

    let results=data.results;   

    results.map((result)=>{

        let imglink=document.createElement("a");
        imglink.href=result.links.html;
        let img=document.createElement("img");
        img.src=result.urls.small;
        imglink.target="_black"
        imglink.appendChild(img);
        searchResult.appendChild(imglink);
    
})
    showMore.style.display="block"
}

searchBtn.addEventListener("click",()=>{
    page=1;
    searchImage();

    // console.log("hello");
})

showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})