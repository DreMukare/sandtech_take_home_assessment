import { useEffect, useState } from "react";
import { getCurrentDateAsString } from "../../../utils/funcs/date";

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState<any>(null);
  const dateString = getCurrentDateAsString();

  useEffect(() => {
    const getForecastData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/weather?date=${dateString}`
      );
      const data = await response.json();

      localStorage.setItem("forecastData", JSON.stringify(data));

      setForecastData(data);
    };

    const cachedForecastData = localStorage.getItem("forecastData");
    if (cachedForecastData) {
      setForecastData(JSON.parse(cachedForecastData));
    } else {
      getForecastData();
    }
  }, []);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {forecastData.map((forecast: any) => (
        <div key={forecast._id}>
          <h3>{forecast.date}</h3>
          <p>{forecast.condition}</p>
          <img src={forecast.conditionIcon} alt={forecast.condition} />
          <p>Max Temp: {forecast.maxTempC}°C</p>
          <p>Min Temp: {forecast.minTempC}°C</p>
          <p>Sunrise: {forecast.sunrise}</p>
          <p>Sunset: {forecast.sunset}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
