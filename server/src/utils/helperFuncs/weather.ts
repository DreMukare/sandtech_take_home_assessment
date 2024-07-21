import { WEATHER_API_KEY } from "../../config/config";
import { IforecastDay } from "../types";

export function parseApiResponse(apiResponse: { forecastday: IforecastDay[] }) {
  return apiResponse.forecastday.map((day) => {
    return {
      date: day.date,
      maxTempC: day.day.maxtemp_c,
      minTempC: day.day.mintemp_c,
      willItRain: day.day.daily_will_it_rain > 0 ? true : false,
      sunrise: day.astro.sunrise,
      sunset: day.astro.sunset,
      condition: day.day.condition.text,
      conditionIcon: "https" + day.day.condition.icon,
    };
  });
}

export async function getForecastDataFromAPI() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=Nairobi&days=7&aqi=no&alerts=no`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data["forecast"];
  } catch (err) {
    console.error("Unable to fetch weather data from API", err);
    throw err;
  }
}
