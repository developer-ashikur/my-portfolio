import React from "react";
import bannerImage from '../../../images/image 12.png';

const Banner = () => {
  return (
    <div className='py-5 bg-brand'>
      <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-md-6 mb-5">
                <div className="banner-content">
                    <h2>Hi, I am <span className='text-brand'>Md Ashikur Rahman</span></h2>
                    <h4 className='py-3'>React Developer</h4>
                    <p>I am a self-motivated programmer. I count myself as a hardworking person and I am always ready to learn any technology. My core skill is based on JavaScript and I love to develop interactive front-end web applications using React.js. As a programmer, I love to take on challenges and always focus on learning new technology.</p>
                    <a className='default-btn me-4' href="https://drive.google.com/file/d/14rKi1W7FFBaU_aHanBCuEG8ylqTyviut/view?usp=sharing">Resume</a>
                    <a className='default-btn' href="https://www.linkedin.com/in/developerashikur01/">Hire Me</a>
                </div>
            </div>
            <div className="col-md-6">
                <img src={bannerImage} alt="" className="img-fluid"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
