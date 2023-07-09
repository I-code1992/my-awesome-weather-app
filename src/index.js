let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "friday",
  "Saturday"
];
let day = days[now.getDay()];
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let searchInput = document.querySelector("#search-text-input");
h2.innerHTML = `${day} ${date} ${month} ${year} ${hour}:${minute}`;
function search(event) {
  event.preventDefault();
  h2.innerHTML = `${day} ${date} ${month} ${year} ${hour}:${minute} <br/>${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
   temperatureElement.innerHTML = `${temperature}`;

  console.log(response);
}
function getLocation(response)
let city = "london";
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);

axios.get(apiUrl).then(getLocation);