const apiKey = "6e094b70d668dbd0580bad56db746a0d";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}` +
      `&appid=${apiKey}`
  );
if(response.status ==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weatherr").style.display="none";
}else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";
    if(data.weather[0].main =="Clouds"){
     weatherIcon.src="images/clouds.png";
    } else if(data.weather[0].main =="Clear"){
      weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
      weatherIcon.src="images/rain.png";
    } else if(data.weather[0].main =="Drizzle"){
      weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main =="Mist"){
      weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weatherr").style.display = "block"
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// checkWeather("Lucknow");
