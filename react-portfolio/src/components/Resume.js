import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
const skills = [
    // list of skills
];

return (
    <section>
    <h2>Resume</h2>
    <a href="path-to-resume" download>Download My Resume</a>
    <h3>Skills:</h3>
    <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
    </section>
);
}

export default Resume;
