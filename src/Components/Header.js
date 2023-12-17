import React, { useState } from 'react';
import './Header.css';
import logo from '../Images/logo.png';
import lang from '../Images/lang.png';
import bars from '../Images/bars.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                        <li><a href="#list">List</a></li>
                    </ul>
                    <div className="lang_ch">
                        <img
                            src={lang}
                            height="30"
                            width="auto"
                            alt="lang"
                        />
                    </div>
                    <div className="toggle_btn" onClick={handleToggle}>
                        <img className = "toggle_img" src = {bars} alt = "bars">
                        </img>
                    </div>
                </div>

                {isOpen && (
                    <div className="dropdown_menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                            <li><a href="#list">List</a></li>
                            <li>
                                <div className="lang_ch">
                                    <img
                                        src={lang}
                                        height="30"
                                        width="auto"
                                        alt="lang"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;