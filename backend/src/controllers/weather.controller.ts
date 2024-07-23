import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import weatherService from "../services/weather.service";
import { validateDate } from "../utils/helperFuncs/date";

class WeatherController {
  static async getWeatherForecast(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const date = String(req.query.date);

      // if date is not valid throw error and give user response that they gave invalid date
      const dateValid = validateDate(date);

      if (!dateValid || !date) {
        res.status(400).json({
          message:
            "Invalid date value. Please provide a date in the form yyyy-dd-mm",
        });
        return;
      }

      const weatherForecastData = await weatherService.getForecast(date);

      if (!weatherForecastData) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      res.status(200).json(weatherForecastData);
    } catch (err: unknown) {
      if (err instanceof mongoose.Error) {
        console.log("Db Error: ", err);
        throw err;
      }
      console.log("Unexpected error creating weather record", err);
      throw err;
    }
    next();
  }
}

export default WeatherController;
