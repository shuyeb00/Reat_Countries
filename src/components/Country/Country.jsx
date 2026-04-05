import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false)

    const visitHandler = () => {
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common} </h2>
            <p>Populations: {country.population.population}</p>
            <p>Area: {country.area.area + " --- "} {country.area.area > 300000 ? "Big Country" : 
                "Small Country"}</p>
            <button onClick={visitHandler}>{visited ? 'Visited' : 'Not Visited'}</button> 
        </div>
    );
};

export default Country;   

