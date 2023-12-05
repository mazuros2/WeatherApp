const openWeatherMap_apiKey = "your api key from site"; //Here you should add your API Key from your profile on -> https://openweathermap.org/api

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

    if (weather_Data.cod === "404") 
    {
        weatherInfoDiv.innerHTML = `<p>${weather_Data.message}</p>`;
        
    } else {
        const city_name = weather_Data.name; 
        const temperature_in_City = Math.round(weather_Data.main.temp - 273.15);
        const weather_description = weather_Data.weather[0].description;
        
        const icon_id = weather_Data.weather[0].icon;
        const icon_url = `https://openweathermap.org/img/wn/${icon_id}@4x.png`;

        const temperature_in_city_HTML = `<p>${temperature_in_City}°C</p>`;
        const weather_description_Html = `<p>${city_name}</p> <p>${weather_description}</p>`;

        weather_temperature_Div.innerHTML = temperature_in_city_HTML;
        weather_info_Div.innerHTML = weather_description_Html;
        
        weather_Icon.src = icon_url;
        weather_Icon.alt = weather_description;
        getWeatherIcon();
    }

}

function getWeatherByHours() 
{


}

function getWeather() 
{
  
}