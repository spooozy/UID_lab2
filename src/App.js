// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import peopleData from './Data/peopleData.json';
import person from './Components/PersonCard';
import './App.css';
import Main from './Components/Main';
import Info from "./Pages/PersonInfo";
import ListOfPerson from "./Pages/ListOfPerson";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import PersonCard from "./Components/PersonCard";

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
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/UID_lab2" element={<Main person={selectedPerson} />} />
                    <Route path="/ListOfPerson" element={<ListOfPerson/>} />
                    <Route path="/PersonInfo" element={<Info person={selectedPerson}/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
