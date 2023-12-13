// src/components/PersonCard.js
import React from 'react';
import './ProgCard.css';

const PersonCard = ({ person }) => {
    const { id, name, linkGH, img } = person;
    {/* Здесь я не понял, откуда базу читаем. Полагаю, что ниоткуда. Её надо будет сделать, используем json. */}
    return (
        <div className="prog-card">
            <h2>{name}</h2>
            <img src={img} className={"progimages"}/>
            <a href = {linkGH} target="_blank" rel="noopener noreferrer">
                Go on GIT
            </a>
        </div>
    );
};

export default PersonCard;
