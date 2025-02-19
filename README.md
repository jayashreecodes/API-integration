# API-integration

*company*: CODTECH IT SOLUTIONS

*NAME*: JAYASHREE MANIVANNAN

*INTERN ID*: CT6WSAY

*DOMAIN*: FULL STACK DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH

This weather application is a simple yet effective tool that allows users to fetch real-time weather information by entering the name of a city. It utilizes the OpenWeatherMap API to retrieve current weather data and dynamically displays the details on the webpage. The app is built using HTML, CSS, and JavaScript, making it lightweight and easy to use.

Features of the Weather App
User Input Field – The app provides an input field where users can enter the name of a city to fetch weather data.
Fetch Weather Data – Uses the fetch() API to retrieve data from OpenWeatherMap.
Dynamic Display of Weather Information – Updates the page dynamically with details such as temperature, weather condition, humidity, and wind speed.
Weather Icon – Displays an appropriate weather icon based on current conditions.
Simple and Responsive UI – The design is clean, user-friendly, and works well on different screen sizes.
Breakdown of the Code
1. HTML Structure
The HTML file consists of a structured webpage with a title, an input field, a button, and a div container to display weather data.

The input element allows the user to enter a city name.
The button triggers the getWeather() function when clicked.
The div with id="weatherInfo" is where the fetched weather details are dynamically displayed.
2. CSS Styling
The CSS section enhances the visual appeal of the application by:

Centering content on the page.
Using a modern, clean design with shadows and rounded edges.
Applying hover effects to the button and weather card.
Styling the input field for better user interaction.
3. JavaScript Functionality
The JavaScript function getWeather() handles API calls and data display. It follows these steps:

Retrieves the user-entered city name from the input field.
Constructs the API URL using the city name and a unique API key.
Fetches weather data using fetch() and converts the response to JSON format.
Checks if the API returns a valid response (data.cod === 200).
Extracts key weather details such as temperature, humidity, wind speed, and weather condition.
Updates the weatherInfo div with the fetched data, including a weather icon.
Handles errors such as invalid city names or API failures.
4. Weather Icon Integration
To enhance the visual representation of weather conditions, an image of the current weather is displayed dynamically.

The img tag retrieves the weather icon from OpenWeatherMap using the icon code from the API response:
html
Copy
Edit
<img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
This ensures that the correct weather condition is visually represented on the webpage.
How to Use the Weather App
Open the application in a web browser.
Enter a city name in the input field.
Click the "Get Weather" button.
View the current weather details, including temperature, humidity, and wind speed.
Conclusion
This weather app is a great beginner-friendly project for learning how to interact with APIs using JavaScript. It demonstrates how to fetch and display real-time data dynamically while ensuring a smooth user experience. Further enhancements could include additional features such as a 5-day weather forecast, geolocation-based weather fetching, or more advanced styling for improved user experience.










