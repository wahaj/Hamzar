import React from 'react';
import i1 from './1.png'
import i2 from './2.png'
import i3 from './3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function myCarousel() {
    return (
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000} showArrows={false}>
                <div>
                    <img src={i1} style={{objectFit: 'cover' }}/>
                </div>
                <div>
                    <img src={i2} style={{objectFit: 'cover' }}/>
                </div>
                <div>
                    <img src={i3} style={{objectFit: 'cover' }}/>
                </div>
            </Carousel>
    );
}

export default myCarousel;
