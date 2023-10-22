import React, { useState } from "react";
import "./Projects.css";
function Projects(){
    const [projects,setProject]=useState([
        {
            id:1,
            img:"project1.png",
            text:"project1"
        },
        {
            id:2,
            img:"project2.png",
            text:"project2"
        },
        {
            id:3,
            img:"project3.png",
            text:"project3"
        },
        {
            id:4,
            img:"project4.png",
            text:"project4"
        },
        {
            id:5,
            img:"project5.png",
            text:"project5"
        },
        {
            id:6,
            img:"project6.png",
            text:"project6"
        },
    ])
    return(
        <div>
            <div className="dark-section">
                <h1>Our Recent Projects</h1>
                <h1>Our recent projects showcase the diverse range of industries we serve, from entertainment and advertising to education and gaming.</h1>
                <div className="project-list">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <img src={project.img} alt={project.text} />
                        </div>
                    ))}
                </div>
                <button className="view">VIEW ALL</button>
            </div>
            <div className="color">
                <img src="man.png" alt="man" className="man"/>
            </div>
        </div>
    );
}

export default Projects;