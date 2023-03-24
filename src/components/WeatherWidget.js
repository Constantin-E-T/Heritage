import React, { useEffect, useState, useCallback } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = '82e7338c537636e9709a4b365e548645';
  const DEFAULT_CITY_NAME = 'london';

  const fetchWeather = useCallback(
    (query) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    },
    [API_KEY]
  );

  const handleLocationError = useCallback(() => {
    fetchWeather(`q=${DEFAULT_CITY_NAME}`);
  }, [fetchWeather]);

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

  if (!weather) {
    return <div>Loading...</div>;
  }

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

export default WeatherWidget;
