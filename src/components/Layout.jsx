// Layout.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Modal from './Modal';

const Layout = ({ children }) => {
    const location = useLocation();

    const shouldHideFooter = () => {
        return location.pathname === '/';
    };

    return (
        <>
            <Nav />
            <main>{children}</main>
            {!shouldHideFooter() && <Footer />}
            <Modal />
        </>
    );
};

export default Layout;