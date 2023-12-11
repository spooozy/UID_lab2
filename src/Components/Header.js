// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1>Famous People Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
