import {useReducer} from "react";

import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import './App.css';
import Form from "./components/Form/Form";


const reduser = (state, action) => {

    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case 'DELL_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'DELL_DOG':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }
}

const App = () => {

    const [{cats, dogs}, dispatch] = useReducer(reduser, {cats: [], dogs: []});

    return (

        <div>
            <Form dispatch={dispatch}/>
            <div className="app-block">
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;
