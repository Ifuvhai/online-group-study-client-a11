import React from 'react';
import NavBar from './Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;