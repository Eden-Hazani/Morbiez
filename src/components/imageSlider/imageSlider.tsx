import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './imageSlider.css'
import { Carousel } from 'react-responsive-carousel';



export class ImageSilder extends Component{
    render() {
        return (
            <Carousel className='carousel' showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} interval={3000}>
                <div>
                    <img src="Morbiez/assets/images/burger1.jpg" alt='burger'/>
                </div>
                <div>
                    <img src="Morbiez/assets/images/burger2.jpg" alt='burger'/>
                </div>
                <div>
                    <img src="Morbiez/assets/images/burger3.jpg" alt='burger'/>
                </div>
            </Carousel>
        );
    }
}
