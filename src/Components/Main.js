import React from 'react';
import './Main.css'; // импорт стилей из верхнего сегмента
import temp_pict from '../Images/temp_pict.jpg'; // импорт изображения

const Main = ({ person }) => {
    const { name, years, img, biography } = person;
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
                        <button ><a href="/PersonInfo">ПОДРОБНЕЕ</a></button>
                    </right_side>
                </div>
            </div>
        </>
    );
};

export default Main;
