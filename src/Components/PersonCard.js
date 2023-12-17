// src/components/PersonCard.js
import React from 'react';
import './PersonCard.css';

const PersonCard = ({ person }) => {
    const { name, years, img, link } = person;

    return (
        <div className="person-card">
            <div className="class-text">
                <h2>{name}</h2>
                <p>Years: {years}</p>
            </div>

            <img src={process.env.PUBLIC_URL + img} className={"images"}/>
            <a href = {link} target="_blank" rel="noopener noreferrer">
                Learn more
            </a>
        </div>
    );
};

export default PersonCard;
