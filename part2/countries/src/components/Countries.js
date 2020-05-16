import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ filterCountries, setSearchCountry }) => {

  if (filterCountries.length === 1) {
    return <Country country={filterCountries[0]} />;
  } else if (filterCountries.length > 1 && filterCountries.length <= 10) {
    return filterCountries.map((country) => {
      return (
        <div key={country.alpha2Code}>
          {country.name}
          <button onClick={() => setSearchCountry(country.name)}>show</button>
        </div>
      );
    });
  } else if (filterCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return <div></div>;
  }
};

export default Countries;
