import React from 'react';
import Blog from '../Blogs/Blog/Blog';
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
            <Blog />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;