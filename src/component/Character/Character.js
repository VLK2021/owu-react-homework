import React from 'react';

const Character = ({character: {image, name, status, gender}}) => {
    return (
        <div className="character">

            <div className="character-img">
                <img src={image} alt="img"/>
            </div>

            <div className="character-block">
                <div>{name}</div>
                <div>{status}</div>
                <div>{gender}</div>
            </div>
            
        </div>
    );
};

export default Character;