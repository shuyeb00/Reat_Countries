import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [VisitedCountries, setVisitedCountries] = useState([])
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    const handleVisitedCountries = (country) => {
        console.log("Visited Countries Clicked", country)
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Visited Countries: {VisitedCountries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country handleVisitedCountries={handleVisitedCountries}
                        key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;