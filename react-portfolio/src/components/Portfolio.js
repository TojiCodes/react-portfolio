import React from 'react';
import '../styles/Portfolio.css';
import Project from './Project';

const Portfolio = () => {
const projects = [
    // Array of project objects here, each with title, description, etc.
];

return (
    <section>
    <h2>My Portfolio</h2>
    {projects.map(project => 
        <Project key={project.id} {...project} />
    )}
    </section>
);
}

export default Portfolio;
