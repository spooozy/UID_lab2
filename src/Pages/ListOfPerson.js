import React from "react";

import peopleData from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard";
import '../App.css';
import './ListOfPerson.css';


function ListOfPerson() {
    const dataArray = Object.values(peopleData); // Преобразование объекта в массив

    return (
        <div className = "main">
        <>
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
            </>
        </div>
    )
}
export default ListOfPerson