// import { useEffect, useState } from "react";
// import { IWeatherForecast } from "../utils/types/weather";
import { getCurrentDateAsString } from "../utils/funcs/date";
import { useQuery } from "@tanstack/react-query";

export default function useWeatherForecastData() {
  const dateString = getCurrentDateAsString();

  const query = useQuery({ queryKey: ["todos"], queryFn: getForecastData });

  async function getForecastData() {
    const response = await fetch(
      `http://localhost:3000/api/v1/weather?date=${dateString}`
    );
    const data = await response.json();

    return data;
  }

  return query.data;
}
