import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country name: {props.name}</h3>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;