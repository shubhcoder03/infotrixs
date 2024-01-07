const apikey = "ef6316aaae82212e696cc00ac5794312";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#searchbox");
const searchbtn = document.querySelector("#search");
const weatherIcon = document.querySelector(".temp-logo");
async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    if(response.status == 404 ){
        alert("ERROR 404 : Enter the valid city name"); 
         //weatherIcon.src = "images/error.png";
        document.querySelector(".city").innerHTML = "Invalid";
        document.querySelector(".temp").innerHTML =  "-°c";
        document.querySelector(".humid").innerHTML = "-%";
        document.querySelector(".wind").innerHTML = "-km/h";}
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humid").innerHTML = "Humidity : "+ data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed : "+data.wind.speed + "km/h";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/cloud.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/sun.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/storm.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
    }

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
