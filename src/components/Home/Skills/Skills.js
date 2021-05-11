import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            type: 'JavaScript',
            progress: 70
        },
        {
            type: 'React.js',
            progress: 80
        },
        {
            type: 'Node.js',
            progress: 70
        },
        {
            type: 'Express.js',
            progress: 80
        },
        {
            type: 'MongoDB',
            progress: 80
        },
        {
            type: 'HTML',
            progress: 95
        },
        {
            type: 'CSS',
            progress: 90
        },
        {
            type: 'Bootstrap',
            progress: 85
        }
    ];
    return (
        <div className='py-5 bg-brand'>
            <div className='container'>
                <h2 className='text-center pt-4'>My Skills</h2>
                <div className="underline mb-4"></div>
                <div className="row">
                    {
                        skills.map(skill => <div className='col-md-3'>
                            <ProgressBar
                                className='mx-auto'
                                radius={70}
                                progress={skill.progress}
                                strokeWidth={8}
                                strokeColor="#ff2e80"
                                trackStrokeWidth={8}
                                pointerRadius={8}
                                pointerStrokeWidth={8}
                                pointerStrokeColor="#ff2e80"
                                initialAnimation={true}
                            >
                                <div className="indicator">
                                    <div>{skill.type} <br /> {skill.progress}%</div>
                                </div>
                            </ProgressBar>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;