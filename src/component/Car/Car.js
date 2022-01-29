import React from 'react';

import './CarStyle.css';
import {useDispatch} from "react-redux";
import {dellCar} from "../../store";

const Car = ({car:{id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div className="car">
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(dellCar({id}))}>delete</button>
        </div>
    );
};

export default Car;