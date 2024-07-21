import { Schema, model } from "mongoose";
import { IWeatherModel } from "../utils/types";

const WeatherSchema: Schema = new Schema(
  {
    date: { type: String, unique: true }, // date: "2024-07-20"
    maxTempC: Number, // maxTempC: 20.6
    minTempC: Number, // minTempC: 14.0
    willItRain: Boolean, // willItRain: true
    sunrise: String, // sunrise: "06:37 AM"
    sunset: String, // sunset: "06:41 PM"
    condition: String, // condition: Patchy rain nearby
    conditionIcon: String,
  },
  { collection: "WeatherData" }
);

const WeatherModel = model<IWeatherModel>("WeatherData", WeatherSchema);

export default WeatherModel;
