import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const services = [
        {
            icon: 'far fa-file-code',
            title: 'Full website creation',
            description: 'I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.'
        },
        {
            icon: 'fas fa-shopping-cart',
            title: 'Online store & shopping',
            description: 'I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.'
        },
        {
            icon: 'fas fa-bug',
            title: 'Fixing problems',
            description: 'Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.'
        }
    ];
    return (
        <div className='container py-5 text-center'>
            <h2 className='pt-4'>What I Do</h2>
            <div className="underline mb-5"></div>
            <div className="row">
                
                {
                    services.map(service => <ServiceDetails key={service.title} service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;