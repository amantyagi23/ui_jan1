window.addEventListener("DOMContentLoaded", myEvents);

function myEvents() {
  getWeatherReport();
}

// dom load -> myEvents -> getWeatherReport

async function getWeatherReport() {
  var URL =
    "https://api.openweathermap.org/data/2.5/weather?q=goa&appid=8ff3b783b61261fc8bade7e97d3205fe";
  var response = await fetch(URL);
  var data = await response.json();
  console.log(data);
  printDetails(data.name, data.main.temp, data.weather[0].main);
}

function printDetails(cityName, temp, detail, humidity, wind, pressure) {
  document.getElementById("cityName").innerText = cityName;
  document.getElementById("temp").innerHTML =
    parseInt(temp - 273.15) + " &deg; C";
  document.getElementById("detail").innerText = detail;
}
