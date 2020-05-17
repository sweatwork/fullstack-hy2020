import React from "react";

const Weather = ({ weather }) => {
  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Weather in {weather.location.name}</h2>
      <div>
        <b>temperature:</b> {weather.current.temperature} &deg;C
      </div>
      <div>
        <img src={weather.current.weather_icons}></img>
      </div>
      <div>
        <b>wind:</b> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </div>
    </>
  );
};

export default Weather;
