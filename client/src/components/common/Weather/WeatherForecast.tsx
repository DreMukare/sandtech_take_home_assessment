import { useEffect, useState } from "react";

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState<any>(null);
  const dateString = useEffect(() => {
    const getForecastData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/weather?date=${dateString}`
      );
    };
  }, [forecastData]);

  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
