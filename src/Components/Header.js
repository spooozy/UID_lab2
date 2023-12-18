// src/components/Header.js
import React, {useState} from 'react';
import './Header.css';
import logo from '../Images/logo.png'
import lang from '../Images/lang.png'
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
                                        src={lang}
                                        height="30"
                                        width="auto"
                                        alt="lang"
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
export default Header;
