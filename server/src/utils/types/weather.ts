import { Document } from "mongoose";

interface Icondition {
  text: string; //"Patchy rain nearby"
  icon: string; // "//cdn.weatherapi.com/weather/64x64/day/176.png",
  code: number; // 1063
}

interface IdayAPI {
  maxtemp_c: number; // 20.6,
  maxtemp_f: number; // 69.1,
  mintemp_c: number; // 14.0,
  mintemp_f: number; // 57.2,
  avgtemp_c: number; // 17.3,
  avgtemp_f: number; // 63.1,
  maxwind_mph: number; // 7.2,
  maxwind_kph: number; // 11.5,
  totalprecip_mm: number; // 0.18,
  totalprecip_in: number; // 0.01,
  totalsnow_cm: number; // 0.0,
  avgvis_km: number; // 10.0,
  avgvis_miles: number; // 6.0,
  avghumidity: number; // 76,
  daily_will_it_rain: number; // 1,
  daily_chance_of_rain: number; // 89,
  daily_will_it_snow: number; // 0,
  daily_chance_of_snow: number; // 0,
  condition: Icondition;
  uv: number; // 6.0
}

interface IAstro {
  sunrise: string; // "06:37 AM"
  sunset: string; // "06:41 PM"
  moonrise: string; // "05:55 PM"
  moonset: string; // "05:29 AM"
  moon_phase: string; // "Waxing Gibbous"
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

interface IHour {
  time_epoch: number; // 1721422800,
  time: string; // "2024-07-20 00:00",
  temp_c: number; // 16.1,
  temp_f: number; // 61.1,
  is_day: number; // 0,
  condition: Icondition;
  wind_mph: number; // 4.5,
  wind_kph: number; // 7.2,
  wind_degree: number; // 46,
  wind_dir: string; // "NE",
  pressure_mb: number; // 1017.0,
  pressure_in: 30.04;
  precip_mm: number; // 0.0,
  precip_in: number; // 0.0,
  snow_cm: number; // 0.0,
  humidity: number; // 83,
  cloud: number; // 64,
  feelslike_c: number; // 16.1,
  feelslike_f: number; // 61.1,
  windchill_c: number; // 16.1,
  windchill_f: number; // 61.1,
  heatindex_c: number; // 16.1,
  heatindex_f: number; // 61.1,
  dewpoint_c: number; // 13.4,
  dewpoint_f: number; // 56.0,
  will_it_rain: number; // 0,
  chance_of_rain: number; // 0,
  will_it_snow: number; // 0,
  chance_of_snow: number; // 0,
  vis_km: number; // 10.0,
  vis_miles: number; // 6.0,
  gust_mph: number; // 6.5,
  gust_kph: number; // 10.5,
  uv: number; // 0
}

export interface IforecastDay {
  date: string; // "2024-07-20"
  date_epoch: number; // 1721433600
  day: IdayAPI;
  astro: IAstro;
  hour: IHour[];
}

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
