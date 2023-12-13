// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PersonCard from './Components/PersonCard';
import peopleData from './Data/peopleData.json';// Хочу, чтобы все данные хранились в json'ах. Почему? Потому что так принято в мире. +Говорят, что так потом проще данные обрабатывать
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <div className="person-cards">
                    {peopleData.map(person => (
                        <PersonCard key={person.id} person={person} />
                    ))}
                </div>

                {/*если что это просто демонстрация че есть код в этом файле будет другой пример по ссылке в грппе*/}
            </main>
            <Footer />
        </div>
    );
};

export default App;
