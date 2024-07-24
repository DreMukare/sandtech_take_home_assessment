import useWeatherForecastData from "../../../hooks/useWeatherForecastData";

const WeatherForecast = () => {
  const { forecastData } = useWeatherForecastData();

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2em",
        }}
      >
        7 Day Weather Forecast
      </h2>
      <div
        style={{
          display: "flex",
          gap: "2em",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {forecastData.map((forecast: any) => (
          <div key={forecast._id}>
            <h3>{forecast.date}</h3>
            <p>{forecast.condition}</p>
            <img src={forecast.conditionIcon} alt={forecast.condition} />
            <p>Max Temp: {forecast.maxTempC}°C</p>
            <p>Min Temp: {forecast.minTempC}°C</p>
            <p>Sunrise: {forecast.sunrise}</p>
            <p>Sunset: {forecast.sunset}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
