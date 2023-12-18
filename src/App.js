// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import peopleData from './Data/peopleData.json';
import Info from "./Components/Info";
import './App.css';
import Main from './Components/Main';
import PersonInfo from "./Pages/PersonInfo";
import ListOfPerson from "./Pages/ListOfPerson";
import {
    Route,
    Routes,
    HashRouter,
} from "react-router-dom";

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
        <HashRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main person={selectedPerson} />} />
                    <Route path="/ListOfPerson" element={<ListOfPerson/>} />
                    <Route path="/PersonInfo/:id" element={<PersonInfo person={selectedPerson}/>} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
