import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Navbar /> */}
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
