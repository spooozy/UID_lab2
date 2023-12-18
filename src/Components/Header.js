import React, { useState } from 'react';
import './Header.css';

import logo from '../Images/logo.png';
import lang from '../Images/lang.png';
import bars from '../Images/bars.png';
import {Link } from 'react-router-dom'

const Header = () => {

        const [menuVisible, setMenuVisible] = useState(false);

        const toggleMenu = () => {
            setMenuVisible(!menuVisible);
        };
        return (
            <header class="app-header">
                <nav>
                    {
                        <>
                            <div class="menu_back"></div>
                            <menu>
                                <img
                                    src={logo}
                                    height="45"
                                    width="auto"
                                    alt="logo"

                                />
                                <ul class="links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#search">Search</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><Link to="/ListOfPerson">List of person</Link></li>
                                </ul>
                                <div class="lang_ch">
                                    <img
                                        className="globe"
/*
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ListOfPerson">List of person</Link></li>
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
                                        alt="lang"*/
                                        onClick={toggleMenu}
                                    />
                                    {menuVisible && (
                                        <div className="lang-ch-menu">
                                            {/*ДОВЕСИТЬ ИЗМЕНЕНИЕ ЯЗЫКА ПО КЛИКУ*/}
                                            <button onClick={() => console.log('Кнопка 1 нажата')}>ru</button>
                                            <button onClick={() => console.log('Кнопка 2 нажата')}>en</button>
                                        </div>
                                    )}
                                </div>
                            </menu>
                            <task_name>
                                <p>СОЗДАТЕЛИ МЕЖДУНАРОДНЫХ КОРПОРАЦИЙ</p>
                            </task_name>
                        </>
                    }

                </nav>
            </header>
        );
    };
export default Header
/*
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
*/
