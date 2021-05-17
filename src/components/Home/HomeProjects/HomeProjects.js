import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../../Projects/ProjectDetails/ProjectDetails';

const HomeProjects = () => {
    const projectsData = [
        {
            id: 1,
            images:{
                image1: 'https://i.ibb.co/Y3fDdCq/Screenshot-2021-05-17-Kids-World-1.png',
                image2: 'https://i.ibb.co/r531YjG/Screenshot-2021-05-17-Kids-World-1.png',
                image3: 'https://i.ibb.co/w4GPtYX/Screenshot-2021-05-17-Kids-World.png'
            }
            ,
            title: 'Kids World – Educational Service Selling Website',
            features: [
                {feature: 'Responsive full-stack educational service selling website.'},
                {feature: 'An authenticated user can order his/her desired services.'},
                {feature: 'User can pay with a credit card and review our services.'},
                {feature: 'Admin / User Dashboard based on role. (Detected by Email)'},
                {feature: 'Admin can create new services and monitor placed orders.'}
            ],
            websiteLink: 'https://kids-world-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/kids-world-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 2,
            images:{
                image1: 'https://i.ibb.co/Y3fDdCq/Screenshot-2021-05-17-Kids-World-1.png',
                image2: 'https://i.ibb.co/r531YjG/Screenshot-2021-05-17-Kids-World-1.png',
                image3: 'https://i.ibb.co/w4GPtYX/Screenshot-2021-05-17-Kids-World.png'
            },
            title: 'Kids World – Educational Service Selling Website',
            features: [
                {feature: 'Responsive full-stack educational service selling website.'},
                {feature: 'An authenticated user can order his/her desired services.'},
                {feature: 'User can pay with a credit card and review our services.'},
                {feature: 'Admin / User Dashboard based on role. (Detected by Email)'},
                {feature: 'Admin can create new services and monitor placed orders.'}
            ],
            websiteLink: 'https://kids-world-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/kids-world-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 3,
            images:{
                image1: 'https://i.ibb.co/Y3fDdCq/Screenshot-2021-05-17-Kids-World-1.png',
                image2: 'https://i.ibb.co/r531YjG/Screenshot-2021-05-17-Kids-World-1.png',
                image3: 'https://i.ibb.co/w4GPtYX/Screenshot-2021-05-17-Kids-World.png'
            },
            title: 'Kids World – Educational Service Selling Website',
            features: [
                {feature: 'Responsive full-stack educational service selling website.'},
                {feature: 'An authenticated user can order his/her desired services.'},
                {feature: 'User can pay with a credit card and review our services.'},
                {feature: 'Admin / User Dashboard based on role. (Detected by Email)'},
                {feature: 'Admin can create new services and monitor placed orders.'}
            ],
            websiteLink: 'https://kids-world-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/kids-world-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 4,
            images:{
                image1: 'https://i.ibb.co/Y3fDdCq/Screenshot-2021-05-17-Kids-World-1.png',
                image2: 'https://i.ibb.co/r531YjG/Screenshot-2021-05-17-Kids-World-1.png',
                image3: 'https://i.ibb.co/w4GPtYX/Screenshot-2021-05-17-Kids-World.png'
            },
            title: 'Kids World – Educational Service Selling Website',
            features: [
                {feature: 'Responsive full-stack educational service selling website.'},
                {feature: 'An authenticated user can order his/her desired services.'},
                {feature: 'User can pay with a credit card and review our services.'},
                {feature: 'Admin / User Dashboard based on role. (Detected by Email)'},
                {feature: 'Admin can create new services and monitor placed orders.'}
            ],
            websiteLink: 'https://kids-world-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/kids-world-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        }
    ];
    return (
        <>
            <div className="container py-5">
                <h2 className='pt-4 text-center'>My Projects</h2>
                <div className="underline mb-5"></div>
                <div className="row d-flex justify-content-center">
                    {
                        projectsData.map(project => <ProjectDetails key={project.id} project={project}></ProjectDetails>)
                    }
                </div>
                <div className='text-center mt-3'>
                    <Link to="/projects" className='default-btn'>Show More</Link>
                </div>
            </div>
        </>
    );
};

export default HomeProjects;