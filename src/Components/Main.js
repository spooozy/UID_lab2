import React from 'react';
import './Main.css';
import temp_pict from '../Images/temp_pict.jpg'
const Main = () => {
    return (
    <>
        <div class =  "person_wrapper">
            <h1>ДЕЯТЕЛЬ ДНЯ</h1>
            <div className = "persons_info">
                <img
                    src = {temp_pict}
                    alt = "temp"
                />
            <div class = "persons_bio">
                <h3>Name</h3>
                <h3>Years</h3>
                <h4>Short info</h4>
                <button>ПОДРОБДНЕЕ</button>
            </div>
            </div>
        </div>
    </>
    );
};

export default Main;
