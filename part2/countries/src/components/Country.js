import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${country.capital}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);
  // console.log(weather)
  return (
    <>
      <h1>{country.name}</h1>
      <div>captial {country.capital}</div>
      <div>population {country.population}</div>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}> {language.name} </li>
        ))}
      </ul>
      <img src={country.flag} alt={country.name + " flag"} width="200px"></img>
      <Weather weather={weather} />
    </>
  );
};

export default Country;
