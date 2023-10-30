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
                <div className="projects">Our Recent Projects</div>
                <div className="project_sentence">Our recent projects showcase the diverse range of industries we serve, from entertainment and advertising to education and gaming.</div>
                <div className="project-list">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <img src={project.img} alt={project.text} className="project_cards" />
                        </div>
                    ))}
                </div>
                <button className="view">VIEW ALL</button>
            </div>
            <div>
                <div className="color">
                    <img src="man.png" alt="man" className="man"/>
                    <div className="intern">INTERN</div>
                    <div className="para">Are you passionate about animation<br/> and eager to kick-start your career<br/>in the industry? Join our dynamic <br/>team through our internship<br/> program. At  IDA , we believe in<br/>
                        nurturing talent and providing<br/> hands-on experience in the exciting <br/>world of animation.
                     </div>
                     <button className="explore">Explore</button>
                     <button className="apply">Apply Now</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;