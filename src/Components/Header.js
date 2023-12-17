// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../Images/logo.png'
import lang from '../Images/lang.png'
const Header = () => {
    return (
        <header class="app-header">
            <nav>
               {
               <>
               <div class = "menu_back"> </div>
               <menu>
               <img
                    src = {logo}
                    height = "45"
                    width = "auto"
                    alt = "logo"
               />
                   <ul class = "links">
                     <li><a href="#home">Home</a></li>
                     <li> <a href="#about">About</a></li>
                    <li><a href="#search">Search</a></li>
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
