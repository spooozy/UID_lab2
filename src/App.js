// src/App.js
import React from 'react';
import Header from './Components/Header';
import Info from './Components/Info';
import Footer from './Components/Footer';
import PersonCard from './Components/PersonCard';
import Main from './Components/Main';
import peopleData from './Data/peopleData.json';// Хочу, чтобы все данные хранились в json'ах. Почему? Потому что так принято в мире. +Говорят, что так потом проще данные обрабатывать
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Info />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
