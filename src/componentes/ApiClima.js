import React, { useState, useEffect } from 'react';
import './ApiClima.css'

const ApiClima = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const apiKey = '20c22ef6650cb4f6045118d003085664';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = location.coords;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=sp`);
        const weather = await response.json();

        if (weather.main && weather.weather && weather.weather.length > 0) {
          setCity(weather.name);
          setTemperature(weather.main.temp.toFixed(1));
          setWeatherDescription(weather.weather[0].description);
          setWeatherIcon(weather.weather[0].icon);
        } else {
          console.error('Datos de clima inválidos:', weather);
        }
      } catch (error) {
        console.error('Error al obtener datos de clima:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!city || !temperature || !weatherDescription || !weatherIcon) {
    return <div>Cargando...</div>;
  }

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className='weather'>
      <p>Nos estás visitando desde {city}.</p>
      <p>Ahora la temperatura es de {temperature}°C y el clima es: {weatherDescription}<img className="icono-clima" src={weatherIconUrl} alt='Weather Icon'/></p>
      
    </div>
  );
};

export default ApiClima;
