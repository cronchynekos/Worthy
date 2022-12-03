import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import "./LandingPage.css";


const LandingPage = () => {
    return (
    <div>
        <Splide aria-label="Frontpage Images" options={{
            arrows   : true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            speed: 400,
            type: 'loop',
            rewind: 'true'
        }}> 
            <SplideSlide>
                <img src="./images/image001.jpg" alt="Image1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="./images/image002.jpg" alt="Image2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="./images/image003.jpg" alt="Image3"/>
            </SplideSlide>
        </Splide>
        <div className="LandingSecondLayer">
            <div className="SecondLayerLeft">
                <div className='SecondLayerText'>
                    <h4 class="subheading-text">SLIM PROFILE ∽ DEEP CARRY</h4>
                    <h1 class="heading-text">COMFORT</h1>
                    <p> 
                        <a href="/collections/the-chase" title="THE CHASE" class="subheading-text">The Chase rides comfortably in the pocket.</a>
                    </p>
                </div>
            </div>
            <div className='SecondLayerRight'>
                <Splide className="SecondlayerImages" options={{
                    arrows   : true,
                    pagination: false,
                    autoplay: true,
                    interval: 5000,
                    speed: 400,
                    type: 'loop',
                    rewind: 'true',
                    height: 550
                }}> 
                    <SplideSlide>
                        <img src="./images/image004.jpg" alt="Image1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./images/image005.jpg" alt="Image2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./images/image003.jpg" alt="Image3"/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
        <Splide aria-label="Frontpage Images" options={{
            arrows   : true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            speed: 400,
            type: 'loop',
            rewind: 'true'
        }}> 
            <SplideSlide>
                <img src="./images/image001.jpg" alt="Image1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="./images/image002.jpg" alt="Image2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="./images/image003.jpg" alt="Image3"/>
            </SplideSlide>
        </Splide>
        <div className="LandingSecondLayer">
            <div className="SecondLayerLeft">
                <div className='SecondLayerText'>
                    <h4 class="subheading-text">SLIM PROFILE ∽ DEEP CARRY</h4>
                    <h1 class="heading-text">COMFORT</h1>
                    <p> 
                        <a href="/collections/the-chase" title="THE CHASE" class="subheading-text">The Chase rides comfortably in the pocket.</a>
                    </p>
                </div>
            </div>
            <div className='SecondLayerRight'>
                <Splide className="SecondlayerImages" options={{
                    arrows   : true,
                    pagination: false,
                    autoplay: true,
                    interval: 5000,
                    speed: 400,
                    type: 'loop',
                    rewind: 'true',
                    height: 550
                }}> 
                    <SplideSlide>
                        <img src="./images/image004.jpg" alt="Image1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./images/image005.jpg" alt="Image2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./images/image003.jpg" alt="Image3"/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
        );
    };
    
    export default LandingPage;
