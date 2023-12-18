import React from 'react';
import './Main.css'; // импорт стилей из верхнего сегмента
import temp_pict from '../Images/temp_pict.jpg'; // импорт изображения
import {Link} from 'react-router-dom'
import people from '../Data/peopleData.json'
import { useHistory } from 'react-router-dom';
import Info from "./Info";




const Main = ({ person }) => {

    const { id, name, years, img, biography } = person;
    const { text} = biography[0];
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (1000 / 80); // 1000 - время прокрутки в миллисекундах, 15 - чем меньше, тем медленнее
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <>
            <Info/>
            <div className="person_wrapper">
                <h1>ДЕЯТЕЛЬ ДНЯ</h1>
                <div className="persons_info">
                    <img src={process.env.PUBLIC_URL + img} alt="temp" />

                        <div className = "persons_bio">
                            <h3>{name}</h3>
                            <h3>{years}</h3>
                            <h4>{text}</h4>

                        <Link  to={`/PersonInfo/${id}`}>
                        <button onClick={scrollToTop}>ПОДРОБНЕЕ</button>
                        </Link>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Main;
