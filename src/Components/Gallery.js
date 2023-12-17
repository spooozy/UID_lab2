import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';

const Gallery = ({ element }) => {
    const {img1, img2, img3} = element;
    return(
        <>
            <div class="gallery-container">
                <h2 >gallery</h2>
                <div>
                    <Carousel >
                        <CarouselItem >
                            <img  src={process.env.PUBLIC_URL + img1} />
                        </CarouselItem>
                        <CarouselItem>
                            <img  src={process.env.PUBLIC_URL + img2} />
                        </CarouselItem>
                        <CarouselItem>
                            <img  src={process.env.PUBLIC_URL + img3}  />
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Gallery;