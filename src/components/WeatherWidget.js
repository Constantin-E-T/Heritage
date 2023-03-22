// Import necessary React hooks and components
import React, { useEffect, useState, useCallback } from 'react';

// Define WeatherWidget component
const WeatherWidget = () => {
  // Declare state variables for weather data
  const [weather, setWeather] = useState(null);
  // Set API key and default city name
  const API_KEY = '82e7338c537636e9709a4b365e548645';
  const DEFAULT_CITY_NAME = 'london';

  // Function to fetch weather data by city name
  const fetchWeatherByCity = useCallback(
    (cityName) => {
      // Set a delay between API requests
      setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((data) => setWeather(data));
      }, 1000); // 1000ms (1 second) delay between requests
    },
    [API_KEY]
  );
  

  // Function to fetch weather data by geographic coordinates
  const fetchWeatherByCoords = useCallback(
    (latitude, longitude) => {
      // Set a delay between API requests
      setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((data) => setWeather(data));
      }, 1000); // 1000ms (1 second) delay between requests
    },
    [API_KEY]
  );
  

  // Function to handle errors when fetching user location
  const handleLocationError = useCallback(() => {
    fetchWeatherByCity(DEFAULT_CITY_NAME);
  }, [fetchWeatherByCity]);


  // useEffect hook to fetch weather data when the component mounts
  useEffect(() => {
    // Check if geolocation API is available
    if (navigator.geolocation) {
      // Get user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Fetch weather data for the user's coordinates
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        // Handle location errors (e.g., user denies access)
        handleLocationError,
        { timeout: 10000 }
      );
    } else {
      // Fetch weather data for the default city if geolocation is not available
      fetchWeatherByCity(DEFAULT_CITY_NAME);
    }
  }, [handleLocationError, fetchWeatherByCity, fetchWeatherByCoords]);

  // Display "Loading..." message while weather data is being fetched
  if (!weather) {
    return <div>Loading...</div>;
  }

  // Display weather data once it's available
  return (
    <div>
    {weather && weather.main ? (
      `${weather.name}: ${weather.main.temp}°C, ${weather.weather[0].description}`
    ) : (
      'Weather data is not available'
    )}
  </div>    

  );
};

// Export WeatherWidget component for use in other components
export default WeatherWidget;
