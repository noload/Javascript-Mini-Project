// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=74c113b0e4292f210006e3194b92094f&units=metric


let apiKey = "74c113b0e4292f210006e3194b92094f";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let city= document.querySelector(".search input")
let btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatheIcon");
const weather = document.querySelector(".weather");

async function checkWeather(city){
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();
    

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+ "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./weather-app-img/images/clouds.png";
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "./weather-app-img/images/clear.png"
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "./weather-app-img/images/rain.png"
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./weather-app-img/images/drizzle.png"
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "./weather-app-img/images/mist.png"
    }

}


btn.addEventListener("click",()=>{
    checkWeather(city.value);
    weather.style.display="block";

})

