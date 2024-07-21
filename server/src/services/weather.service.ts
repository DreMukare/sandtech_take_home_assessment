import WeatherModel from "../models/weather.model";
import WeatherRepository from "../repositories/weather.repo";
import {
  constructDateString,
  getDayMonthAndYearFromDate,
  getSevenDaysFromDay,
  numberOfDaysInMonth,
} from "../utils/helperFuncs/date";
import {
  getForecastDataFromAPI,
  parseApiResponse,
} from "../utils/helperFuncs/weather";
import { IWeatherModel } from "../utils/types";
import { BaseService } from "./base.service";

class WeatherService extends BaseService<IWeatherModel, WeatherRepository> {
  constructor() {
    const weatherRepo = new WeatherRepository(WeatherModel);
    super(weatherRepo);
  }

  async getForecast(date: string) {
    const {
      day: currentDay,
      month: currentMonth,
      year,
    } = getDayMonthAndYearFromDate(date);

    const sevenDaysFromCurrentDay: string[] = getSevenDaysFromDay(
      currentDay,
      currentMonth,
      year
    );

    const daysInMonth = numberOfDaysInMonth(year, currentMonth);

    const weatherData = await WeatherModel.findOne({
      date: sevenDaysFromCurrentDay[sevenDaysFromCurrentDay.length - 1],
    });
    if (weatherData) {
      const response = [];
      let day = currentDay;
      let month = currentMonth;
      let currentYear = year;
      for (let i = 0; i < 7; i++) {
        if (day > daysInMonth) {
          day = 1;
          month++;
          if (month > 12) {
            month = 1;
            currentYear++;
          }
        }
        const dayString = constructDateString(day, month, currentYear);
        const weatherData = await WeatherModel.findOne({ date: dayString });
        console.log("SUCCESSFULLY FOUND THE DATA IN DB");
        response.push(weatherData);
        day++;
      }

      return response;
    } else {
      const forecastData = await getForecastDataFromAPI();
      console.log("!!!!!!!HAD TO QUERY API!!!!!!!");

      const parsedForecastData = parseApiResponse(forecastData);

      try {
        for (const data of parsedForecastData) {
          const document = new WeatherModel(data);
          await document.save();
        }
        return parsedForecastData;
      } catch (err: unknown) {
        console.error("Unable to store records in db", err);
        throw err;
      }
    }
  }
}

export default new WeatherService();
