import React from 'react';

const ProjectDetails = ({ project }) => {
    const { title, features, images, websiteLink, gitHubLink, technologyUsed, id } = project;
    const {image1, image2, image3} = images;
    return (
        <div className='col-lg-6 my-3'>
            <div className="card shadow rounded service-item" >
                <div id='carouselExampleControls' className="carousel slide" data-bs-ride="carousel">
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
                    <h5 className="card-subtitle py-2">Technology</h5>
                    {
                        technologyUsed.map(technology => <button className='btn btn-secondary m-2 mb-3'>{technology.name}</button>)
                    } <br />
                    <a href={websiteLink} className="default-btn me-3 ms-2">Website Link</a>
                    <a href={gitHubLink} className="default-btn">GitHub Link</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;