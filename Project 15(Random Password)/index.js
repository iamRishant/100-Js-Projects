const passwordBox=document.querySelector("#password");
const copyButton=document.querySelector("#copy");
const generatePassword=document.querySelector("#btn");


// passwordBox.value="hello";

copyButton.addEventListener("click",()=>{
    passwordBox.select();
    document.execCommand("copy");
});

generatePassword.addEventListener("click",()=>{
    // alert("hllo");
    let password="";
    let characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-[]}{';?/.>,<";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbol="!@#$%^&*()_+=-[]}{';?/.>,<";
    let length=12;

    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length> password.length){
        password+=characters[Math.floor(Math.random()*characters.length)];
    }
    console.log(password);
    passwordBox.value=password;
});
