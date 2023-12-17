import React from 'react';
import './Main.css'; // импорт стилей из верхнего сегмента
import temp_pict from '../Images/temp_pict.jpg'; // импорт изображения

const Main = ({ person }) => {
    const { name, years, img, link } = person;

    return (
        <>
            <div className="person_wrapper">
                <h1>ДЕЯТЕЛЬ ДНЯ</h1>
                <div className="persons_info">
                    <img src={temp_pict} alt="temp" />
                    <right_side>
                        <persons_bio>
                            <h3>{name}</h3>
                            <h3>{years}</h3>
                            <p>Short info</p>
                        </persons_bio>
                        <button>ПОДРОБНЕЕ</button>
                    </right_side>
                </div>
            </div>
        </>
    );
};

export default Main;
