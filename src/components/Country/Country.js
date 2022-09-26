import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);

    const {name, region, area} = props.country;
    
    return (
        <div className='country'>
            <h2>Country name: {name.common}</h2>
            <p>Country Region: {region}</p>
            <p>Country Area: {area}</p>
            
        </div>
    );
};

export default Country;