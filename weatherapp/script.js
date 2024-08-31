script.js
document.getElementById('getWeather').addEventListener('click', function() {
    const apiKey = 'f6c7360214bde5342c5aa12f9196b6d6'; // Replace with your API key from OpenWeatherMap
    const city = document.getElementById('cityInput').value; // Get the city name from the input field
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('description').textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});