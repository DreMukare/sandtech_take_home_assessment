import { Model } from "mongoose";
import MongoRepository from "./mongo.repo";
import { IWeatherModel } from "../utils/types";

class WeatherRepository extends MongoRepository<IWeatherModel> {
  constructor(model: Model<IWeatherModel>) {
    super(model);
  }
}

export default WeatherRepository;
