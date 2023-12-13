// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PersonCard from './Components/PersonCard';
import peopleData from './Data/peopleData';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                {peopleData.map(person => (
                    <PersonCard key={person.id} person={person} />
                ))}
                {/*если что это просто демонстрация че есть код в этом файле будет другой пример по ссылке в грппе*/}
            </main>
            <Footer />
        </div>
    );
};

export default App;
