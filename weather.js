
let url ="https://api.openweathermap.org/data/2.5/weather?appid=82d832c1b54d0d9f144865dea979be83&units=metric&q=";

let placeholder = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weathericon = document.querySelector(".weather-icon");
// let city = placeholder.getAttribute;



async function gettemp(city)
{
    try{
        const res = await fetch(url + city);
        var data = await res.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds")
            {
                weathericon.src ="images/clouds.png";
            }
        else if(data.weather[0].main == "Clear")
                {
                    weathericon.src ="images/clear.png";
                }
        else if(data.weather[0].main == "Rain")
                    {
                        weathericon.src ="images/rain.png";
                    }
        else if(data.weather[0].main == "Drizzle")
                        {
                            weathericon.src ="images/drizzle.png";
                        }
        else if(data.weather[0].main == "Mist")
                            {
                                weathericon.src ="images/mist.png";
                            }
    }
    catch(err){
        console.log(err);
    }
    
    
}
searchbtn.addEventListener("click",()=>
    {
        gettemp(placeholder.value);
    })