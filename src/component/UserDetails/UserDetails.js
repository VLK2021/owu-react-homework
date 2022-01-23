import React from 'react';

import './UserDetailsStyle.css'


const UserDetails = ({user}) => {

    const {
        id, name, username, email,
        company: {catchPhrase, bs},
        phone, website,
        address: {
            street, suite, city, zipcode,
            geo: {lat, lng}
        }
    } = user;

    return (
        <div>
            <div className='userDetails'>
                <h1>User details:</h1>
                <div>id - {id}</div>
                <div>name - {name}</div>
                <div>username - {username}</div>
                <div>email - {email}</div>
                <div>catchPhrase - {catchPhrase}</div>
                <div>bs - {bs}</div>
                <div>phone - {phone}</div>
                <div>website - {website}</div>
                <div>street - {street}</div>
                <div>suite - {suite}</div>
                <div>city - {city}</div>
                <div>zipcode - {zipcode}</div>
                <div>lat - {lat}</div>
                <div>lng - {lng}</div>
            </div>
        </div>
    );
};

export default UserDetails;