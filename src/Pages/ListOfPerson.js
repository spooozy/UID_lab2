import React from "react";

import Data from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard";
import '../App.css';
import {useLanguage} from "../Components/Language";

import './ListOfPerson.css';


function ListOfPerson() {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const dataArray = Object.values(peopleData); // Преобразование объекта в массив

    return (
    <div className = "main">
        <main>
         <h1>ПОИСК ДЕЯТЕЛЯ</h1>
                <div className = "search">
                  <input type="text" placeholder="Искать здесь..."></input>
                  <search-button type="submit"></search-button>
                </div>
            <div className="card-container">
            {dataArray.map(person => (
                console.log(person.id),
                <PersonCard key={person.id} person={person} />
            ))}
            </div>
        </main>
         </div>
    )
}
export default ListOfPerson