// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../Images/logo.png'
import lang from '../Images/lang.png'
import {Link } from 'react-router-dom'
const Header = () => {
    return (
        <header class="app-header">
            <nav>
                {
                    <>
                        <div class = "menu_back" id="start"> </div>
                        <menu>
                            <img
                                src = {logo}
                                height = "45"
                                width = "auto"
                                alt = "logo"
                            />
                            <ul class = "links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/ListOfPerson">List of person</Link></li>
                            </ul>
                            <div class = "lang_ch">
                                <img
                                    src = {lang}
                                    height = "30"
                                    width = "auto"
                                    alt = "lang"
                                />
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
