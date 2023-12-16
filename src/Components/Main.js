import './main.css';
import React from "react";

const Main = ({person})=>{
    const {name, years, img, link} = person;

    return(
        <div className="cont">
            <div className="pers-day-card">
                <div className="class-text">
                    <h2>
                        {name}
                    </h2>
                    <p>Годы жизни: {years}</p>
                </div>
                <img src={process.env.PUBLIC_URL + img} className={"day-image"}/>
                <a href = {link} target="_blank" rel="noopener noreferrer">
                    Learn more
                </a>

            </div>
        </div>
    )
}
export default Main;