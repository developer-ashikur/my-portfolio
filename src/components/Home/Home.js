import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomeProjects from './HomeProjects/HomeProjects';
import Services from './Services/Services';
import WorkingProcess from './WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <HomeProjects />
            <WorkingProcess />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;