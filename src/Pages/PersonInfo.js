import React from "react";
import Gallery from "../Components/Gallery";
import TimeLine from "../Components/Hrono";
import {useParams} from "react-router-dom";
import peopleData from "../Data/peopleData.json"
const PersonInfo = () => {
    const {id} = useParams();
    const selectedPerson=peopleData[id];
    const { name, years, img, gallery, biography } = selectedPerson;
    return (
        <>
            <div className="cont">
                <div className="person-card">
                    <div className="class-text">
                        <h2>{name}</h2>
                        <p>Годы жизни: {years}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + img} className="day-image" />
                </div>
            </div>
                <Gallery element={gallery} />
                <TimeLine element={biography}/>
        </>

);
};
export default PersonInfo;
