import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const BlogDetails = ({blog}) => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [] );
        const {title, image, description, link} = blog;
        return (
        <div className='col-xs-11 col-md-11' data-aos="fade-up">
            <div className="card">
                <img src={image} className="card-img-top" style={{height: '13rem'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} target='_blank' rel="noreferrer" className="default-btn">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;