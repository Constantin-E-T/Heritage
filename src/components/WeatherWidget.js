import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = '533db0fe660967a689d19e1ed590c056';
  const CITY_NAME = 'london';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
    </div>
  );
};

export default WeatherWidget;
