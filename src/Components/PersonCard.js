// src/components/PersonCard.js
import React from 'react';
import './PersonCard.css';

const PersonCard = ({ person }) => {
    const { id,name, years, img, link } = person;

    return (
        <div className="person-card">
            <div className="class-text">
                <h2>{name}</h2>
                <p>Years: {years}</p>{/*Заменить на https://reactjsexample.com/a-vertical-timeline-component-for-react/ ...*/}
            </div>

            <img src={img} className={"images"}/>
            <a href = {link} target="_blank" rel="noopener noreferrer">
                Learn more
            </a>
        </div>
    );
};

export default PersonCard;
