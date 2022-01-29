import React from 'react';

import './CarStyle.css';

const Car = ({car:{id, model, price, year}, getCarId}) => {


    return (
        <div className="car">
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>getCarId(id)}>delete</button>
        </div>
    );
};

export default Car;