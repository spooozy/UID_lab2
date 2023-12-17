// src/components/Footer.js
import React from 'react';
import './Footer.css';
import ProgDetails from '../Data/progDetails.json';
import ProgCard from "./ProgCard";
const Footer = () => {

    return (
    <>
        <footer className="app-footer">
        <h1>САЙТ РАЗРАБАТЫВАЛИ</h1>
            <div className={"prog-card-container"}>
                {ProgDetails.map(person=>(<ProgCard key={person.id} person={person}/>))}
            </div>
            <p>&copy; 2023 Famous People Website</p>
        </footer>
    </>
    );
};

export default Footer;