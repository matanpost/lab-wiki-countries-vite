import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
function CountriesList({countries}) {
  
   console.log(countries)
   return ( 
   <div>
        <ul>
        {countries.map(country => {
            return (
            <Link key={country.alpha3Code} to = {`/countryDetail/${country.alpha3Code}`}>
                <li>
                  <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official}></img>{country.name.official}
                </li>
            </Link>
            )
        })}
        </ul>
    </div>
  )
}

export default CountriesList