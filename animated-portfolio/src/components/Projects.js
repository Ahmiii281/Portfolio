import React from 'react';

function Projects() {
    const projectList = [
        {
            title: "Personal Portfolio Website",
            description: "A responsive portfolio website showcasing my projects and skills.",
            technologies: "HTML, CSS, JavaScript, React",
        },
        {
            title: "E-commerce Platform",
            description: "An online shopping platform with user authentication and payment integration.",
            technologies: "React, Node.js, Express, MongoDB",
        },
        {
            title: "Weather App",
            description: "A web application that provides weather forecasts using a third-party API.",
            technologies: "HTML, CSS, JavaScript, OpenWeather API",
        },
        {
            title: "Task Management Tool",
            description: "A tool for managing tasks with features like adding, editing, and deleting tasks.",
            technologies: "React, Redux, Firebase",
        },
    ];

    return (
        <div className="section">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <strong>{project.title}</strong>
                        <p>{project.description}</p>
                        <p><em>Technologies used: {project.technologies}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;