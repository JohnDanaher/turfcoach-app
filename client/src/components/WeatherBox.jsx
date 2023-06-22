import axios from "axios";
import { useState, useEffect } from "react";

export default function WeatherBox() {
  const [weather, setWeather] = useState();

  const weatherKey = "eeba6e25a39a6f771c2c3d1f5b396049";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${weatherKey}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div className="flex justify-center">
      {weather ? (
        <div className="bg-gray-500 text-white rounded w-1/4 p-4 m-4 shadow-md">
          <h2 className="text-lg font-bold">Berlin weather</h2>
          <p>Temperature: {Math.floor(weather.main.temp) / 10}</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <h1>Loading weather</h1>
      )}
    </div>
  );
}
