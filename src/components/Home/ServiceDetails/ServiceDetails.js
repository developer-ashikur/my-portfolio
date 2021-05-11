import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const {icon, title, description} = service;
    return (
        <div className='col-md-4 g-4 mb-3'>
            <div className='p-4 service-item'>
                <span className='service-icon'><i className={icon}></i></span>
                <h4 className='py-3'>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;