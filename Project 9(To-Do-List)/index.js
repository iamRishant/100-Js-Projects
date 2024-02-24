const text=document.querySelector("input");
const listContainer=document.querySelector("#list");
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let newEle=document.createElement("li");
    newEle.textContent=text.value;
    if(text.value===""){
        alert("Task cannot be empty");
    }
    else{
        listContainer.appendChild(newEle);
        text.value="";

        // to create a cross after element
        let cross = document.createElement("span");
        cross.innerHTML="\u00d7";
        newEle.appendChild(cross);

    }
    saveData();
})
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

// now lets save data to local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// now we want to display stored data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();