const searchInput=document.querySelector("#searchInput");

searchInput.addEventListener("keypress",findWeatherInfo);

const weatherApi=new WeatherAPI();

function findWeatherInfo(e){
    if(e.keyCode=='13'){
        const citName=searchInput.value.trim();
        weatherApi.getWeatherInfo(citName);
    }

}