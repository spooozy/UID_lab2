import React from "react";
import Gallery from "../Components/Gallery";
import TimeLine from "../Components/Hrono";

const Info = ({ person }) => {
    const { name, years, img, gallery, biography } = person;

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
export default Info;
