import React from 'react';
import NavBar from './Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <section>
                <NavBar></NavBar>
            </section>
            <section className='min-h-screen mt-24'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;