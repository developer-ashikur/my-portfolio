import React, { useEffect } from 'react';
import './ServiceDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = ({service}) => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [] );
    const {icon, title, description} = service;
    return (
        <div className='col-md-4 g-4 mb-3' data-aos="fade-up">
            <div className='p-4 service-item'>
                <span className='service-icon'><i className={icon}></i></span>
                <h4 className='py-3'>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;