import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetails = ({ project }) => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [] );
    const { title, features, images, websiteLink, gitHubLink, technologyUsed, id } = project;
    const {image1, image2, image3} = images;
    return (
        <div className='col-lg-6 my-3' data-aos="fade-up">
            <div className="card shadow rounded service-item" >
                <div id='carouselExampleControls' className="carousel slide m-4 border-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100 card-img-top" style={{ height: '20rem' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100 card-img-top" style={{ height: '20rem' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100 card-img-top" style={{ height: '20rem' }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-subtitle py-2">Features</h5>
                    <p className="card-text">
                        <ol>
                            {
                                features.map(feature => <li>{feature.feature}</li>)
                            }
                        </ol>
                    </p>
                    <h5 className="card-subtitle py-2">Technology Used</h5>
                    {
                        technologyUsed.map(technology => <button className='btn btn-secondary m-2 mb-3'>{technology.name}</button>)
                    } <br />
                    <a href={websiteLink} target='_blank' rel="noreferrer" className="default-btn me-3 ms-2">Website Link</a>
                    <a href={gitHubLink} target='_blank' rel="noreferrer" className="default-btn ms-2 mt-2">GitHub Link</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;