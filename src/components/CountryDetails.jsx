import React from 'react'
import { useEffect } from 'react'
import { createSearchParams, useParams, useSearchParams } from 'react-router-dom'

function CountryDetails(countries) {
     const { alpha3Code } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({alpha3Code}) 

    useEffect(() => {
        searchParams.get('alpha3Code')
       
      }, [searchParams])   
    console.log(`${alpha3Code}`);
    return (
    <div>
       
    </div>
  )
}



export default CountryDetails