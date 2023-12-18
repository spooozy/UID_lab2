import React from "react";

import peopleData from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard";
import '../App.css';
import {useLanguage} from "../Components/Language";

import './ListOfPerson.css';
import lang from "../Data/translate.json";


function ListOfPerson() {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const dataArray = Object.values(peopleData); // Преобразование объекта в массив
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.search;
    } else    {
        translated = lang.en.search;
    }
    return (
    <div className = "main">
        <main>
         <h1>{translated.title}</h1>
                <div className = "search">
                  <input type="text" placeholder={translated.hint}></input>
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