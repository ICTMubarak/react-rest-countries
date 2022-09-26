import React from 'react';
import './Country.css'
import './Country.css'

const Country = (props) => {
    console.log(props);

    const {name, region, area, flags} = props.country;
    
    return (
        <div className='country bg-secondary'>
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Country Region: {region}</p>
            <p>Country Area: {area}</p>
        </div>
    );
};

export default Country;