// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Info from './Components/Info';
import Footer from './Components/Footer';
import PersonCard from './Components/PersonCard';
import Main from './Components/Main';
import peopleData from './Data/peopleData.json';

import './App.css';
import Main from './Components/Main';

const App = () => {

    const currentTimeMillis = Date.now();
    const initialIndex = Math.floor(currentTimeMillis / (1000 * 60*60*24)) % 5;
    const [selectedPerson, setSelectedPerson] = useState(peopleData[initialIndex]);//начальное значение

        useEffect(() => {
            const interval = setInterval(() => {
                const currentTimeMillis = Date.now();
                const minuteIndex = Math.floor(currentTimeMillis / (1000 * 60*60*24)) % 5;
                setSelectedPerson(peopleData[minuteIndex]);
            }, 1000); // Обновлять каждую секунду (в миллисекундах)

            return () => clearInterval(interval); // Остановить интервал при размонтировании компонента
        }, []);

        return (
        <div className="app">
            <Header />
            <Info />
            <Main person={selectedPerson} />
            <Footer />
        </div>
    );
};

export default App;
