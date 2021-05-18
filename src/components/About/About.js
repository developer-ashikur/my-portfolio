import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Skills from '../Home/Skills/Skills';
import bannerImage from '../../images/image 12.png';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='py-5 bg-brand'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <img src={bannerImage} alt="" className="img-fluid banner-image" />
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="banner-content">
                                <h2>I am <span className='text-brand'>Md Ashikur Rahman</span></h2>
                                <p>I am a self-motivated programmer. I count myself as a hardworking person and I am always ready to learn any technology. My core skill is based on JavaScript and I love to develop interactive front-end web applications using React.js. As a programmer, I love to take on challenges and always focus on learning new technology.</p>
                                <a className='default-btn me-4' target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1EGSqc98Ss9Jktzu1D3EUle7TQ8OGyMVU/view?usp=sharing">Resume</a>
                                <a className='default-btn' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/developerashikur01/">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
            <Footer />
        </>
    );
};

export default About;