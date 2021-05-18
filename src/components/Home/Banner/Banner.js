import React, { useEffect } from "react";
import bannerImage from '../../../images/image 12.png';
import Typewriter from 'typewriter-effect';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({duration: 2000,  offset: 120})
  }, [] )
  return (
    <div className='py-5 bg-brand'>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mb-5" data-aos="fade-right">
            <div className="banner-content">
              <h2>Hi, I am <span className='text-brand'>Md Ashikur Rahman</span></h2>
              <h4 className='py-3'>
                <Typewriter
                  options={{
                    strings: ['Front End Web Developer', 'React Developer', 'JavaScript Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>I am a self-motivated programmer. I count myself as a hardworking person and I am always ready to learn any technology. My core skill is based on JavaScript and I love to develop interactive front-end web applications using React.js. As a programmer, I love to take on challenges and always focus on learning new technology.</p>
              <a className='default-btn me-4' target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1EGSqc98Ss9Jktzu1D3EUle7TQ8OGyMVU/view?usp=sharing">Resume</a>
              <a className='default-btn' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/developerashikur01/">Hire Me</a>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={bannerImage} alt="" className="img-fluid banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
