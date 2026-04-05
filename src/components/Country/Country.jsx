import React from 'react';
import './Country.css'

const Country = ({country}) => {

    const visitHandler = () => {
        console.log('Visited')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common} </h2>
            <p>Populations: {country.population.population}</p>
            <p>Area: {country.area.area + " --- "} {country.area.area > 300000 ? "Big Country" : 
                "Small Country"}</p>
            <button onClick={visitHandler}>Not Visited</button> 
        </div>
    );
};

export default Country;  

