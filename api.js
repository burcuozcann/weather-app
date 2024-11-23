class WeatherAPI{
    constructor(){
       this.baseURL="https://api.openweathermap.org/data/2.5/weather";
       this.apikey="0c0a08a0c0a534a719e2f97d00c3b9de";
    }

    async getWeatherInfo(cityName){
        
        const response=await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apikey}&units=metric&lang=en`);
        const data=await response.json();
        return data;

     

    }
}


