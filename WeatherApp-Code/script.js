//https://openweathermap.org/api
const apiKey = "a8b3fe6c8983b2ed4650e647bfa2c257";

const weather_temperature_Div = document.getElementById("weather-temperature");
const weather_info_Div = document.getElementById("weather-info");
const weather_info_ByHour_Div = document.getElementById("weather-info-ByHour");

const weather_Icon = document.getElementById("weather-icon");


function getWeatherIcon() 
{
    weather_Icon.style.display = "block";  
}

function displayWeather(weather_Data)
{
    weather_temperature_Div.innerHTML = ""; 
    weather_info_Div.innerHTML = "";
    weather_info_ByHour_Div.innerHTML = "";


    getWeatherIcon();
}

function getWeatherByHours() 
{


}

function getWeather() 
{
  
}