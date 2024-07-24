import { useEffect, useState } from "react";
import { getCurrentDateAsString } from "../../../utils/funcs/date";
import { IWeatherForecast } from "../../../utils/types/weather";

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState<IWeatherForecast[] | null>(
    null
  );
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
    // TODO: check if data 7 days from now is cached, if yes pull from localstorage, if not getForecastData
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
    <div
      style={{
        display: "flex",
        gap: "2em",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
