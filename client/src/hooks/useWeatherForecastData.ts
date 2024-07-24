import { useEffect, useState } from "react";
import { IWeatherForecast } from "../utils/types/weather";
import { getCurrentDateAsString } from "../utils/funcs/date";

export default function useWeatherForecastData() {
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

  return { forecastData };
}
