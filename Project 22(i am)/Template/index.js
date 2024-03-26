const text=document.querySelector(".text_2");
const text_load=()=>{
    setTimeout(() => {

        text.style.color="#E95824"
        text.textContent="Hey,"
    }, 0);
    setTimeout(() => {
        text.style.color="white";
        text.textContent="My Name is"
    }, 4000);
    setTimeout(() => {
        text.style.color="#006632";
        text.textContent="Rishant"
    }, 8000);
}
text_load();
setInterval(text_load,12000);
