let city_name="Delhi";
let temperature=document.querySelector("#temp");
let city=document.querySelector("#city");
let humidity=document.querySelector("#humidity");
let wind=document.querySelector("#wind");
let img=document.querySelector("#image-icon");

async function initial(){
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=56e880892e3f8e48f9541adeff216831&units=metric`
        let response= await fetch(URL);
        let data=await response.json();
        // console.log(data);
        temperature.textContent=data.main.temp;
        city.textContent=data.name;
        humidity.textContent=data.main.humidity;
        wind.textContent=data.wind.speed;
        img.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    
    initial();
    
    
    
    document.querySelector("button").addEventListener('click',async ()=>{
        city_name=document.querySelector("input").value;
        if(city_name==""){
            alert("City Name is required");
        }
        else{
            let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=56e880892e3f8e48f9541adeff216831&units=metric`
            let response= await fetch(URL);
            let data=await response.json();
            // console.log(data);
            temperature.textContent=data.main.temp;
            city.textContent=data.name;
            humidity.textContent=data.main.humidity;
            wind.textContent=data.wind.speed;
            img.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    // console.log(city_name);
})



