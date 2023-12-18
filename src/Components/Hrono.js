import React from 'react'
import './Hrono.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const TimeLine = ({ element }) => {
    const {logo}=element;
    return(
        <>
            <VerticalTimeline>
                {element.map((biography) => {
                    return (
                        <VerticalTimelineElement
                            date={biography.time}
                            iconStyle={{ background: '#adb5bd', color: '#000' }}
                            icon={biography.logo === "success" ? <img src={process.env.PUBLIC_URL + '/Images/events/birth.png'}/> : biography.logo === "birth" ? <img src={process.env.PUBLIC_URL + '/Images/events/Great_Success.png'}/> : logo}
                        >
                            <h3 >{biography.title}</h3>
                            <p>
                                {biography.text}
                            </p>
                        </VerticalTimelineElement>
                    );
                })}

            </VerticalTimeline>
        </>
    )
}

export default TimeLine;