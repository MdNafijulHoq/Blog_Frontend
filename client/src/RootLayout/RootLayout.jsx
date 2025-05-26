import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className='min-h-[calc(100vh-117px)] max-w-7xl mx-auto px-4 py-8'>
                {
                    children
                }
            </div>
            <Footer/>
        </>
    );
};

export default RootLayout;