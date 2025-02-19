async function getWeather() {
	const city = document.getElementById('city-input').value;
	const apiKey ='90fa12969e411f590587692da099465d'; // Replace with your OpenWeatherMap API Key
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (data.cod === 200) {
			document.getElementById('weatherInfo').innerHTML = `
				<h3>${data.name}, ${data.sys.country}</h3>
				<p>Temperature: ${data.main.temp}°C</p>
				<p>Weather: ${data.weather[0].description}</p>
				<p>Humidity: ${data.main.humidity}%</p>
				 <img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
				<p>Wind Speed: ${data.wind.speed} m/s</p>
			`;
		} else {
			document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
		}
	} catch (error) {
		document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data.</p>`;
	}
}
	