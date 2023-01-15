import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animatedNavBarpre');
//     } else {
//       entry.target.classList.remove('animatedNavBarpre');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.animatedNavBarpost');
// hiddenElements.forEach((el) => observer.observe(el));

  // window.addEventListener('load', MyApp, false);

  

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </div>
    
  )
}

export default MyApp
