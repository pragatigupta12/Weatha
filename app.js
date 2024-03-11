const searchBtn=document.querySelector("#searchBtn");
const input_box=document.querySelector(".input-box")
const weather_img=document.querySelector(".weather-img")
const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const location_not_found=document.querySelector(".location-not-found")
const weather_body=document.querySelector(".weather-body")


async function checkWeather(city){
const api_Key="33ea943cd6c0ef740c1587b65da6679a"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;
const weather_data=await fetch(`${url}`).then(response => response.json());
if(weather_data.cod==='404'){
    location_not_found.style.display="flex";
    weather_body.style.display="none";
    return;
}
weather_body.style.display="flex";
location_not_found.style.display="none";
temperature.innerHTML=`${ Math.round(weather_data.main.temp -273.15)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind.innerHTML=`${weather_data.wind.speed}Km/H`;
switch(weather_data.weather[0].main){
    case "Clouds":
        weather_img.src="/assets/cloud.jpg";
        break;
    case "Clear":
        weather_img.src="/assets/sunny-weather.jpg";
        break;
    case "Sunny":
        weather_img.src="/assets/sun-in-clouds.jpg";
        break;
    case "Rain":
        weather_img.src="/assets/rainy-weather.jpg";
        break;
    case "Mist":
        weather_img.src="/assets/mist.webp";
        break;
     case "Snow":
        weather_img.src="/assets/snow.jpg";
        break;

}

}
searchBtn.addEventListener("click",()=>{
    checkWeather(input_box.value);
    input_box.value=""
})