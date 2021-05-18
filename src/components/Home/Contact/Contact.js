import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [] )
    return (
        <div className='py-5'>
            <div className="container">
            <h2 className='pt-4 text-center'>Contact Me</h2>
            <div className="underline mb-5"></div>
                <div className="row">
                    <div className="col-lg-5" data-aos="fade-right">
                        <div className="contact-details">
                            <ul>
                                <li className='mb-3'>
                                    <div className='row'>
                                        <div className="service-icon text-center col-lg-2 mx-auto">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div className="contact-item col-lg-10">
                                            <h5>Email</h5>
                                            <p>developerashikur01@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3'>
                                    <div className='row'>
                                        <div className="service-icon text-center col-lg-2 mx-auto">
                                        <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <div className="contact-item col-lg-10">
                                            <h5>Call Me</h5>
                                            <p>+880 185 605 5464</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3'>
                                    <div className='row'>
                                        <div className="service-icon text-center col-lg-2 mx-auto">
                                        <i className="fas fa-map-marked-alt"></i>
                                        </div>
                                        <div className="contact-item col-lg-10">
                                            <h5>My Location</h5>
                                            <p>Rajbari Sadar, Rajbari, Dhaka</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3'>
                                    <div className='row'>
                                        <div className="service-icon text-center col-lg-2 mx-auto">
                                        <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="contact-item col-lg-10">
                                            <h5>Time Zone</h5>
                                            <p>UTC +6 Asia/Dhaka</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7" data-aos="fade-left">
                        <form action="">
                            <input className='form-control mb-2' type="text" name="" placeholder='Name' id=""/>
                            <input className='form-control mb-2' type="text" name="" placeholder='Subject' id=""/>
                            <textarea className='form-control mb-3' name="" placeholder='Message' id="" cols="30" rows="6"></textarea>
                            <input type="submit" value="Send" className='default-btn'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;