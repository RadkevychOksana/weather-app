// Current Date (Heading)
const currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let current = `${day} ${hour}:${minute}`;
let headingDate = document.querySelector("#heading-date");
headingDate.innerHTML = current;

// Variables
let heading = document.querySelector("#heading");
let description = document.getElementById("description");
let temp = document.getElementById("grad-value");
let windSped = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let inputSearch = document.querySelector("#input-search");

// City in Headung (from Input)
function changeCity(event) {
  event.preventDefault();

  //variables
  let inputSearchValue = inputSearch.value;
  let apiKey = "149e1223e69e53cd644a15607bc75a82";
  let apiUrlbyCity = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchValue}&units=metric&appid=${apiKey}`;
  function showForecast(response) {
    heading.innerHTML = response.data.name;
    temp.innerHTML = Math.round(response.data.main.temp);
    description.innerHTML = response.data.weather[0].description;
    windSped.innerHTML = Math.round(response.data.wind.speed);
    humidity.innerHTML = response.data.main.humidity;
  }
  axios.get(apiUrlbyCity).then(showForecast);
}
let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", changeCity);

// Convert temperature to Farengait
// document.getElementById("celsius-temp").addEventListener("click", convertTemp);
// document
//   .getElementById("fahrenheit-temp")
//   .addEventListener("click", convertTemp);
// function convertTemp(event) {
//   let celsiusTempValue = document.getElementById("grad-value");
//   let celsiusLink = document.getElementById("celsius-temp");
//   let fahrenheitLink = document.getElementById("fahrenheit-temp");
//   if (event.target.id == "fahrenheit-temp") {
//     celsiusTempValue.innerText = +celsiusTempValue.dataset.grad * 1.8;
//     celsiusLink.classList.remove("link-success");
//     celsiusLink.classList.add("link-secondary");
//     fahrenheitLink.classList.remove("link-secondary");
//     fahrenheitLink.classList.add("link-success");
//   } else {
//     celsiusTempValue.innerText = +celsiusTempValue.dataset.grad;
//     fahrenheitLink.classList.remove("link-success");
//     fahrenheitLink.classList.add("link-secondary");
//     celsiusLink.classList.remove("link-secondary");
//     celsiusLink.classList.add("link-success");
//   }
// }
// Curren city and temperature
function showCurrent(event) {
  event.preventDefault();
  function handlePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=677a5ab0828ab394a6cd0dcc6744a0f8`;
    axios.get(apiUrl).then(showForecast);
  }
  function showForecast(response) {
    heading.innerHTML = response.data.name;
    temp.innerHTML = Math.round(response.data.main.temp);
    description.innerHTML = response.data.weather[0].description;
    windSped.innerHTML = Math.round(response.data.wind.speed);
    humidity.innerHTML = response.data.main.humidity;
  }
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let currentButton = document.getElementById("current-button");
currentButton.addEventListener("click", showCurrent);
