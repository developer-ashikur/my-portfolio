import React from 'react';
import Carousel from 'react-elastic-carousel'
import BlogDetails from '../BlogDetails/BlogDetails';

const Blog = () => {
    const blogData = [
        {
            title: 'JavaScript Fundamental Concepts & SSL',
            image: 'https://i.ibb.co/4RVGDFB/javascript1.png" alt="javascript1',
            description: 'JavaScript is a programming language that adds interactivity to your website. This article helps you get started with JavaScript and furthers your understanding of what is possible.',
            link: 'https://developerashikur01.medium.com/javascript-fundamental-concepts-ssl-b0535c18ae2e',
            id: 1
        },
        {
            title: 'Some Interesting Concepts You Have to Know About Web Programming',
            image: 'https://i.ibb.co/sK1dM9h/javascript-2jpg.jpg" alt="javascript-2jpg',
            description: 'JavaScript is a programming language that adds interactivity to your website. This article helps you get started with JavaScript.',
            link: 'https://developerashikur01.medium.com/some-interesting-concepts-you-have-to-know-about-web-programming-4f019d63880b',
            id: 2
        },
        {
            title: 'Basic Concepts About React',
            image: 'https://i.ibb.co/nm2bpT6/react-blog.jpg" alt="react-blog',
            description: 'React is a library for building composable user interfaces and encourages the creation of reusable UI components. This article helps you get started with React.',
            link: 'https://developerashikur01.medium.com/basic-concepts-about-react-e0ad3804765a',
            id: 3
        },
        {
            title: 'Most Common Interview Questions in JavaScript',
            image: 'https://i.ibb.co/xY8yY76/improve-interviewing-skills-featured.png',
            description: 'JavaScript is a programming language that adds interactivity to your website. This article helps you get started with JavaScript and furthers your understanding of what is possible.',
            link: 'https://developerashikur01.medium.com/most-common-interview-questions-in-b613b4e173b4',
            id: 4
        },
    ];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
    return (
        <div>
            <div className="container py-5">
                <h2 className='pt-4 text-center'>My Blogs</h2>
                <div className="underline mb-5"></div>
                <div className="row">
                <Carousel breakPoints={breakPoints}>
                    {
                        blogData.map(blog => <BlogDetails key={blog.id} blog={blog}></BlogDetails>)
                    }
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Blog;