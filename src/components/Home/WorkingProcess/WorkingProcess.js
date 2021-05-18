import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const WorkingProcess = () => {
    const workingProcess = [
        {
            icon: 'far fa-comments',
            title: '1. Discussion',
            description: 'To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.'
        },
        {
            icon: 'fas fa-users',
            title: '2. Planning',
            description: 'Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you.'
        },
        {
            icon: 'fas fa-pencil-ruler',
            title: '3. Design',
            description: 'I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website. A nice design can improve your business quality.'
        },
        {
            icon: 'fas fa-code',
            title: '4. Coding',
            description: 'The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.'
        },
        {
            icon: 'fas fa-calendar-check',
            title: '5. Submit for Review',
            description: 'After design and coding, I send for review to client. After client’s checking, If have to change or revision, I say client to send all of them in a list and I am happy to do all changes every time.'
        },
        {
            icon: 'fas fa-laptop-code',
            title: '6. Website Is Ready!',
            description: 'After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients.'
        }
    ];
    return (
        <div className='py-5 text-center bg-brand'>
            <div className="container">
            <h2 className='pt-4'>How Do I Work?</h2>
            <div className="underline mb-5"></div>
                <div className="row">
                    {
                        workingProcess.map(work => <ServiceDetails service={work} key={work.title}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;