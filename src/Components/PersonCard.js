// src/components/PersonCard.js
import React from 'react';
import './PersonCard.css';
import {Link} from "react-router-dom";

const PersonCard = ({ person }) => {
    const {id, name, years, img, link } = person;

    return (
        <div className="person-card">
            <div className="class-text">
                <h2>{name}</h2>
                <p>Years: {years}</p>
            </div>

            <img src={process.env.PUBLIC_URL + img} className={"images"}/>
            <Link to = {`/PersonInfo/${id}`} target="_blank" rel="noopener noreferrer">
                Learn more
            </Link>
        </div>
    );
};

export default PersonCard;
