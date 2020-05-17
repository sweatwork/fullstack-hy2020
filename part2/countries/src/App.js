import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  useEffect(() => {
    // console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      // console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const filterCountries = countries.filter((country) => {
    if (searchCountry) {
      return country.name.toLowerCase().includes(searchCountry.toLowerCase());
    }
    return false;
  });

  return (
    <>
      <div>
        find countries
        <input value={searchCountry} onChange={handleSearchCountry} />
      </div>
      <div>
        <Countries
          filterCountries={filterCountries}
          setSearchCountry={setSearchCountry}
        />
      </div>
    </>
  );
};

export default App;
