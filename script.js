// // Connect to Open Weather API
// https://api.openweathermap.org/data/2.5/weather?appid=76eb0ef0ffe2435fd8bd90f66f670192

// // Get weather in Spokane
// https://api.openweathermap.org/data/2.5/weather?q=spokane&appid=76eb0ef0ffe2435fd8bd90f66f670192

// // Get weather in Spokane with Imperial (farenheit) unites
// https://api.openweathermap.org/data/2.5/weather?q=spokane&appid=76eb0ef0ffe2435fd8bd90f66f670192&units=imperial

// Setup Variables
const apiKey = "76eb0ef0ffe2435fd8bd90f66f670192";
const city = "Cheney";
const city2 = "Spokane";
const units = "imperial";

// Set Query String
const urlQueryString = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=${units}`;
const urlQueryString2 = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city2}&units=${units}`;

// Check Check
// console.log(urlQueryString);

// Go get the dang data
fetch(urlQueryString)
  .then(response => response.json())
  .then(data => {
  
  // Check check
  // console.log(data);
  
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');  
  const icon = document.querySelector('#img');
  const iconId = data.weather[0].icon;
  const humidity = document.querySelector('#humidity');
  const feelsLike = document.querySelector('#feelsLike');
  
  // See elements
  
  city.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp) + "°";
  icon.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
  humidity.textContent = humidity.textContent + Math.floor(data.main.humidity) +"%";
  feelsLike.textContent = feelsLike.textContent + Math.floor(data.main.feels_like) + "°";
  
});

fetch(urlQueryString2)
  .then(response => response.json())
  .then(data => {
  
  // Check check
  console.log(data);
  
  const city = document.querySelector('#city2');
  const temp = document.querySelector('#temp2');  
  const icon = document.querySelector('#img2');
  const iconId = data.weather[0].icon;
  const humidity = document.querySelector('#humidity2');
  const feelsLike = document.querySelector('#feelsLike2');
  

  city.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp) + "°";
  icon.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
  humidity.textContent = humidity.textContent + Math.floor(data.main.humidity) + "%";
  feelsLike.textContent = feelsLike.textContent + Math.floor(data.main.feels_like) + "°";
  
});





