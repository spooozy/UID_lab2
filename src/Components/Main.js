import React from 'react';
import './Main.css'; // импорт стилей из верхнего сегмента
import temp_pict from '../Images/temp_pict.jpg'; // импорт изображения
import {Link} from 'react-router-dom'
import people from '../Data/peopleData.json'
import { useHistory } from 'react-router-dom';




const Main = ({ person }) => {

    const { id, name, years, img, biography } = person;
    const { text} = biography[0];
    return (
        <>
            <div className="person_wrapper">
                <h1>ДЕЯТЕЛЬ ДНЯ</h1>
                <div className="persons_info">
                    <img src={process.env.PUBLIC_URL + img} alt="temp" />
                    <right_side>
                        <persons_bio>
                            <h3>{name}</h3>
                            <h3>{years}</h3>
                            <p>{text}</p>
                        </persons_bio>
                        <Link to={`/PersonInfo/${id}`}>
                        <button>ПОДРОБНЕЕ</button>
                        </Link>
                    </right_side>
                </div>
            </div>
        </>
    );
};

export default Main;
