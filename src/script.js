function cityChange(form) {
  form.preventDefault();
  let searchInputElement = document.querySelector("#search-city-input");
  let city = searchInputElement.value;
  let title = document.getElementById("current-city-weather");
  title.innerHTML = document.getElementById("search-city-input").value;
  let apiKey = "ta02bo301b5c9f2330749b3160203dc0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#input-form-city");
form.addEventListener("submit", cityChange);

let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let changeDateNow = document.querySelector("#current-date-time");
changeDateNow.innerHTML = `${day} ${hour}:${minutes}`;

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  let temperatureElement = document.querySelector(
    "#current-temperature-number"
  );
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
