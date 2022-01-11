import {useEffect, useState} from "react";

import Flite from "../flite/Flite";

import './FlitesStyle.css';


function Flites() {

    let [fliteList, setFlitList] = useState([]);


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(flites =>
                setFlitList(flites.filter(flite => flite.launch_year !== '2020'))
            )
    }, []);

    return (
        <div className="flitesClas">
            {
                fliteList.map(value => <Flite
                    key={value.flight_number}
                    item={value}
                />)
            }
        </div>
    );
}

export default Flites;