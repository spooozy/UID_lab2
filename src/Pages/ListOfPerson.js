import React from "react";

import Data from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard";
import '../App.css';
import {useLanguage} from "../Components/Language";



function ListOfPerson() {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const dataArray = Object.values(peopleData); // Преобразование объекта в массив

    return (
        <main>
            <div className="card-container">
            {dataArray.map(person => (
                console.log(person.id),
                <PersonCard key={person.id} person={person} />
            ))}
            </div>
        </main>
    )
}
export default ListOfPerson