import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ children }) => (
    <div className="App">
        <Header />
            {children}
        <Footer />
    </div>

);

export default Layout;