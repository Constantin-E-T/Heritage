import React, { useEffect, useState, useCallback } from 'react';
import './WeatherWidget.css'

const WeatherWidget = () => {
  // State to store weather data
  const [weather, setWeather] = useState(null);
  // API key for OpenWeatherMap
  const API_KEY = '82e7338c537636e9709a4b365e548645';
  // Default city name to fetch weather data
  const DEFAULT_CITY_NAME = 'london';

  // Function to fetch weather data using the OpenWeatherMap API
  const fetchWeather = useCallback(
    (query) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    },
    [API_KEY]
  );

  // Function to handle location errors
  const handleLocationError = useCallback(() => {
    fetchWeather(`q=${DEFAULT_CITY_NAME}`);
  }, [fetchWeather]);

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
        },
        handleLocationError,
        { timeout: 10000 }
      );
    } else {
      fetchWeather(`q=${DEFAULT_CITY_NAME}`);
    }
  }, [handleLocationError, fetchWeather]);

  // Show loading text if weather data is not fetched yet
  if (!weather) {
    return <div className="loading-text">Loading...</div>;
  }

  // Render the weather data
  return (
    <div>
      {weather && weather.main ? (
        <div>
          {`${weather.name}: `}
          {` ${weather.main.temp.toFixed(1)} °C`}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            style={{ width: '50px', height: '50px' }}
          />
        </div>
      ) : (
        'Weather data is not available'
      )}
    </div>
  );
};

export default WeatherWidget;
