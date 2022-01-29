import {useState} from "react";

import './App.css';
import Form from "./component/Form/Form";
import Cars from "./component/Cars/Cars";

function App() {

    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}]);
    }

    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }

    return (
        <div>
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getCarId={getCarId}/>
        </div>
    );
}


export default App;
