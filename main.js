const searchInput=document.querySelector("#searchInput");
const cityNameEl=document.querySelector(".cityName");
const degreeEl=document.querySelector(".degree");
const descEl=document.querySelector(".desc");

searchInput.addEventListener("keypress",findWeatherInfo);

const weatherApi=new WeatherAPI();

function findWeatherInfo(e){
    if(e.keyCode=='13'){
        const citName=searchInput.value.trim();
        weatherApi.getWeatherInfo(citName)
        .then(data=>{
            display(data);
        })
        .catch(err=>console.log(err))

    }

    function display(data){
        cityNameEl.textContent=data.name;
        degreeEl.textContent=data.main.temp;
        descEl.textContent=data.weather[0].description;


    }

}