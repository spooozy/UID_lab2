// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import peopleData from './Data/peopleData.json';// Хочу, чтобы все данные хранились в json'ах. Почему? Потому что так принято в мире. +Говорят, что так потом проще данные обрабатывать
import './App.css';
import Main from './Components/Main';

const App = () => {

    const currentTimeMillis = Date.now();

// Преобразуем миллисекунды в дни и берем остаток от деления на 5
    const dayIndex = Math.floor(currentTimeMillis / (1000 * 60 * 60 * 24)) % 5;
// Получение данных выбранной персоны
    const selectedPerson = peopleData[dayIndex];
    return (
        <div className="app">
            <Header />

            <div>
                <Main person={selectedPerson} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
