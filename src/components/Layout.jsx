import React from 'react';
import Header from '../components/headerComp.jsx';
import Container1 from '../components/container1.jsx';
import Container2 from '../components/container2.jsx';
import Container3 from '../components/container3.jsx';
import Container4 from '../components/container4.jsx';
import Footer from '../components/footerComp.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="index-wrapper">
            <Header />
            <Outlet />
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Footer />
        </div>
    );
};

export default Layout;
