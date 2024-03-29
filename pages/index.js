import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
// import "./LandingPage.css";


const LandingPage = () => {
    return (
    <div> 
        <Splide aria-label="Frontpage Images" options={{
            arrows   : true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            drag: false,
            speed: 400,
            type: 'loop',
            rewind: 'true',
            height: 800
        }}> 
            <SplideSlide>
                <div className='FirstLayerInner'>
                    <h4 className='FirstLayerh4'>Extreme Corrosion Resistance</h4>
                    <h2 className='FirstLayerh2'>The Drift</h2>
                    <a href="./shop"><div className='FirstLayerButton'><h2 className='FirstLayerButtonText'>Shop Now</h2></div></a>
                </div>
                <img src="./images/frontpage1.webp" alt="Image1"/>
            </SplideSlide>
            <SplideSlide>
                <div className='FirstLayerInner'>
                    <h4 className='FirstLayerh4'>Extreme Corrosion Resistance</h4>
                    <h2 className='FirstLayerh2'>The Drift</h2>
                    <a href="./shop"><div className='FirstLayerButton'><h2 className='FirstLayerButtonText'>Shop Now</h2></div></a>
                </div>
                <img src="./images/frontpage6.jpg" alt="Image2"/>
            </SplideSlide>
            {/* <SplideSlide>
                <div className='FirstLayerInner'>
                    <h4 className='FirstLayerh4'>Extreme Corrosion Resistance</h4>
                    <h2 className='FirstLayerh2'>The Drift</h2>
                    <a href="./shop"><div className='FirstLayerButton'><h2 className='FirstLayerButtonText'>Shop Now</h2></div></a>
                </div>
                <img src="./images/frontpage3.jpg" alt="Image3"/>
            </SplideSlide> */}
        </Splide>
        <div className="LandingSecondLayer">
            <div className="SecondLayerLeft">
                <div className='SecondLayerText'>
                    <h4 class="subheading-text">SLIM PROFILE ∽ DEEP CARRY</h4>
                    <h1 class="heading-text">COMFORT</h1>
                    <p> 
                        <a href="/shop" title="THE CHASE" class="subheading-text">The Chase rides comfortably in the pocket.</a>
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
                        <img src="./images/frontpage3.jpg" alt="Image1"/>
                    </SplideSlide>
                    {/* <SplideSlide>
                        <img src="./images/image005.jpg" alt="Image2"/>
                    </SplideSlide> */}
                    {/* <SplideSlide>
                        <img src="./images/image003.jpg" alt="Image3"/>
                    </SplideSlide> */}
                </Splide>
            </div>
        </div>
        <Splide aria-label="Frontpage Images" options={{
            arrows   : false,
            pagination: false,
            autoplay: true,
            interval: 5000,
            speed: 400,
            type: 'loop',
            rewind: 'true'
        }}> 
            <SplideSlide>
                <div className='FirstLayerInner'>
                    <h4 className='FirstLayerh4'>Extreme Corrosion Resistance</h4>
                    <h2 className='FirstLayerh2'>The Drift</h2>
                    <a href="/collections"><div className='FirstLayerButton'><h2 className='FirstLayerButtonText'>Shop Now</h2></div></a>
                </div>
                <img src="./images/frontpage4.webp" alt="Image1"/>
            </SplideSlide>
            {/* <SplideSlide>
                <img src="./images/image002.jpg" alt="Image2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="./images/image003.jpg" alt="Image3"/>
            </SplideSlide> */}
        </Splide>
        <div className="LandingSecondLayer">
            <div className='SecondLayerRight'>
                <Splide className="SecondlayerImages" options={{
                    arrows   : false,
                    pagination: false,
                    autoplay: true,
                    interval: 5000,
                    speed: 400,
                    type: 'loop',
                    rewind: 'true',
                    height: 550
                }}> 
                    {/* <SplideSlide>
                        <img src="./images/image004.jpg" alt="Image1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./images/image005.jpg" alt="Image2"/>
                    </SplideSlide> */}
                    <SplideSlide>
                        <img src="./images/frontpage5.webp" alt="Image3"/>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="SecondLayerLeft">
                <div className='SecondLayerText'>
                    <h4 class="subheading-text">SLIM PROFILE ∽ DEEP CARRY</h4>
                    <h1 class="heading-text">COMFORT</h1>
                    <p> 
                        <a href="/collections/the-chase" title="THE CHASE" class="subheading-text">The Chase rides comfortably in the pocket.</a>
                    </p>
                </div>
            </div>
        </div>
        <div className='BrandLayer'>
            <h1 className='LandingBrandTitle'>Our Brand</h1>
            <p className='LandingBrandP'>At Bibisama, we focus on combining beautiful artwork with quality materials. 
                The result is Asian pop culture-inspired clothing; comfortable to wear at home yet stylish in the streets. 
                Our products are meticulously crafted, ensuring durability, and serving as a timeless companion.
            </p>
            <a href="/about" title="About" className="LandingBrandA">Read Our Story</a>
        </div>
    </div>
        );
    };
    
    export default LandingPage;
