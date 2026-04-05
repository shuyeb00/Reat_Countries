import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [VisitedCountries, setVisitedCountries] = useState([])
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    const handleVisitedCountries = (country) => {
        console.log("Visited Countries Clicked", country)
        // setVisitedCountries.push(country)
        const newVisitedCountries = [...VisitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Visited Countries: {VisitedCountries.length}</h2>
            <ol>
                {
                    VisitedCountries.map(newCountry => <li key={newCountry.cca3.cca3}>
                        {newCountry.name.common}
                    </li>)
                }
            </ol>
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