import React from 'react';

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'DELL_CAT', payload: {id}})}>dellete</button>
        </div>
    );
};

export default Cat;