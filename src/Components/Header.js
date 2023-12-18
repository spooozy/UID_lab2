import React, { useState } from 'react';
import './Header.css';

import logo from '../Images/logo.png';
import lang from '../Images/lang.png';
import bars from '../Images/bars.png';
import {Link } from 'react-router-dom'

const Header = () => {
       return (
        <>
            <div className="menu_back"></div>
            <header className="app-header">
                <div className="nav">
                    <img
                        src={logo}
                        height="45"
                        width="auto"
                        alt="logo"
                    />
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ListOfPerson">List</Link></li>
                    </ul>
                    <div className="lang_ch">
                        <img
                            src={lang}
                            height="30"
                            width="auto"
                            alt="lang"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
