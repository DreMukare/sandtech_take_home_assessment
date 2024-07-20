import { Document } from "mongoose";

export interface IDay {
  date: string; // date: "2024-07-20"
  maxTempC: number; // maxTempC: 20.6
  minTempC: number; // minTempC: 14.0
  willItRain: boolean; // willItRain: true
  sunrise: string; // sunrise: "06:37 AM"
  sunset: string; // sunset: "06:41 PM"
  condition: string; // condition: Patchy rain nearby
  conditionIcon: string; // conditionIcon: "https//cdn.weatherapi.com/weather/64x64/day/176.png"
}

export interface IWeather {
  forecast: IDay[];
}

export interface IWeatherModel extends IWeather, Document {}
