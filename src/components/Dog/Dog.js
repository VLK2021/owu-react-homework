import React from 'react';

import './DogStyle.css';


const Dog = ({dog: {id, name}, dispatch}) => {

    return (
        <div className="dog">
            {name}
            <button onClick={() => dispatch({type: 'DELL_DOG', payload: {id}})}>delete</button>
        </div>
    );
};

export default Dog;