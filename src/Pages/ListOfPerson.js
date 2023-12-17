import React from "react";

import peopleData from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard";
import '../App.css';



function ListOfPerson() {
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