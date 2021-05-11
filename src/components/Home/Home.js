import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import WorkingProcess from './WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Skills />
            <WorkingProcess />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;