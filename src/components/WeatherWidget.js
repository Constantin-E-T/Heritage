import React, { useEffect, useState, useCallback } from "react";
import "./WeatherWidget.css";
// import Skycons from "react-skycons";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "82e7338c537636e9709a4b365e548645";
  const DEFAULT_CITY_NAME = "london";

  const fetchWeather = useCallback(
    (query) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}&units=metric`
      )
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
          fetchWeather(
            `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
        },
        handleLocationError,
        { timeout: 10000 }
      );
    } else {
      fetchWeather(`q=${DEFAULT_CITY_NAME}`);
    }
  }, [handleLocationError, fetchWeather]);

  if (!weather) {
    return <div className="loading-text">Loading...</div>;
  }

  const getIconType = (icon) => {
    const iconMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "03n": "CLOUDY",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "SLEET",
      "11n": "SLEET",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };

    return iconMapping[icon] || "CLEAR_DAY";
  };

  if (!weather) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <div>
      {weather && weather.main ? (
        <div>
          {`${weather.name}: `}
          {` ${weather.main.temp.toFixed(1)} °C`}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      ) : (
        "Weather data is not available"
      )}
    </div>
  );
};

export default WeatherWidget;
