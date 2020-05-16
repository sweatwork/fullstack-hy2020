import React from "react";

const Country = ({ filterCountries }) => {
  const numberOfCountries = filterCountries.length;

  if (numberOfCountries === 1) {
    const country = filterCountries[numberOfCountries - 1];
    return (
      <>
        <h1>{country.name}</h1>
        <div>captial {country.capital}</div>
        <div>population {country.population}</div>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.iso639_1}> {language.name} </li>
          ))}
        </ul>
        <img
          src={country.flag}
          alt={country.name + " flag"}
          width="100px"
        ></img>
      </>
    );
  } else if (numberOfCountries > 1 && numberOfCountries <= 10) {
    return filterCountries.map((country) => (
      <div key={country.alpha2Code}> {country.name} </div>
    ));
  } else if (numberOfCountries > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return <div></div>;
  }
};

export default Country;
