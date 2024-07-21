import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import weatherService from "../services/weather.service";

class WeatherController {
  static async getWeatherForecast(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // get weather data for next seven days from db
      const date = String(req.query.date);

      // if date is not valid throw error and give user response that they gave invalid date

      const weatherForecastData = await weatherService.getForecast(date);

      // if not weatherForecastData throw error and give user response that we have internal error

      // else respond with weatherForecastData
    } catch (err: unknown) {
      if (err instanceof mongoose.Error) {
        console.log("Db Error: ", err);
        throw err;
      }
      console.log("Unexpected error creating weather record", err);
      throw err;
    }
  }
}

export default WeatherController;
