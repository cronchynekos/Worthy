import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import "./LandingPage.css";


const LandingPage = () => {
    return (
    //    <section id="image-carousel" class="splide" aria-label="Beautiful Images">
    //         <div class="splide__track">
    //             <ul class="splide__list">
    //                 <li class="splide__slide">
    //                     <img src="./images/image001.jpg" alt="image1" />
    //                 </li>
    //                 <li class="splide__slide">
    //                     <img src="./images/image002.jpg" alt="image2" />
    //                 </li>
    //                 <li class="splide__slide">
    //                     <img src="./images/image003.jpg" alt="image3" />
    //                 </li>
    //             </ul>
    //         </div>
    //     </section>
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
            <img src="./images/image003.jpg" alt="Image2"/>
        </SplideSlide>
    </Splide>
        );
    };
    
    export default LandingPage;
