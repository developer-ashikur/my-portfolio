import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetails = ({blog}) => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [] );
        const {title, image, description, link} = blog;
        return (
        <div className='col-xs-11 col-md-11' data-aos="fade-up">
            <div class="card">
                <img src={image} class="card-img-top" style={{height: '13rem'}} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href={link} target='_blank' rel="noreferrer" class="default-btn">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;