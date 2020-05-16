import React from 'react'

const Country = ({country}) => {
    // console.log("inside Country", country)
    return(
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
    )
}

export default Country;