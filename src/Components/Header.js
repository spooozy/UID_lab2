// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1>Famous People Website</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
