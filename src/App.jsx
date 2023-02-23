import { useState } from 'react'
import countries from './countries.json'
import './App.css'
import Navbar from './components/Navbar.jsx'
import CountriesList from './components/CountriesList'
import CountryDetails from "./components/CountryDetails";
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function App() {
const [countriesState, setcountriesState] = useState(countries)

  return (
     <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/countriesList' element={<CountriesList countries={countriesState}/>} />
        <Route path='/countryDetail/:alpha3Code' element={<CountryDetails countries={countriesState}/>}/> 

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
     </div>
  )
}

export default App
