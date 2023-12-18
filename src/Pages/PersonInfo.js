import React from "react";
import ImageSlider from "../Components/ImageSlider";
import TimeLine from "../Components/Hrono";
import {useParams} from "react-router-dom";
import Data from "../Data/peopleData.json";
import YoutubeEmbed from "../Components/YoutubeEmbed";
import {useLanguage} from "../Components/Language";
const PersonInfo = () => {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const {id} = useParams();
    const selectedPerson=peopleData[id];
    const { name, years, img, gallery, biography, linkOnVideo } = selectedPerson;
    const slides = [
        {url: process.env.PUBLIC_URL+ gallery.img1},
        {url: process.env.PUBLIC_URL+ gallery.img2},
        {url: process.env.PUBLIC_URL+ gallery.img3}
    ];
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
            <div className="container-slider">
                <ImageSlider slides={slides} />
            </div>

            <TimeLine element={biography}/>
            <YoutubeEmbed embedId={linkOnVideo}/>
        </>

);
};
export default PersonInfo;
