import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "../constants/weather";
import getWeather from '../services/transformWeather';

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const getWeatherIcon = (text) => {
  const icon = icons[text];
  const sizeIcon = "4x";

  console.log('****** RECIBOOOOO', icon);
  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  } else {
    return <WeatherIcons className="wicon" name={"sun"} size={sizeIcon} />;
  }
};

const Weather = ({ result }) => {
  const { name, main } = result;
  
  if (!name) {
    return null;
  }

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>{name}'s Weather</h2>
        <p>{getWeatherIcon(getWeather(main.temp))}</p>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(1)}&#176;
        </p>
        <p className="temp-max red accent-1">
          {parseFloat(main.temp_max - kelvin, 10).toFixed(1)}&#176;
        </p>
        <p className="temp-min blue lighten-2">
          {parseFloat(main.temp_min - kelvin, 10).toFixed(1)}&#176;
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
