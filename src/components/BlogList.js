import React from "react";
import { useState } from "react";
import CardMaterial from "./CardMaterial";
function BlogList(){

    const [blogs,setBlogs]=useState([
        {
            id:1,
            image:"AR.png",
            name:"WHAT IS VIRTUAL REALITY?",
            text:"Virtual reality (VR) is a computer-generated simulation of a 3D environment that you can interact with in a realistic way using specialized equipment like VR headsets, gloves with sensors, and handheld controllers. Furthermore, the objective of VR is to provide an immersive.",
            link:"https://medium.com/tag/ukraine-war"
        },
        {
            id:2,
            image:"VR.png",
            name:"WHAT IS VR SIMULATION?",
            text:"Virtual Reality simulation for training are computer-generated representations of real-life situations that prepare individuals or groups for encounters in their work or daily life. They can be used in a wide range of fields, including healthcare, aviation, defense, oil and gas, automobiles, clean energy, manufacturing, and mining.",
            link:"https://medium.com/tag/artificial-intelligence"
        },
        {
            id:3,
            image:"Application.png",
            name:"APPLICATIONS OF VR",
            text:"Immersive Training with Virtual Reality is the field of training and education, providing users with an unparalleled level of immersion and interaction. Through its realistic environments, VR training delivers a new dimension of engagement and efficacy. Some of the applications of Virtual Reality Training.",
            link:"https://medium.com/swlh/all-you-need-to-know-about-5g-4c3fc6ad7124"
        },
    ])
    console.log(blogs);
    return(
        <>
            <h1>OUR IMPACT STUDIES</h1>
            <div className="flexbox">
            {
                blogs.map((blog)=>(
                    <div>
                        <CardMaterial blog={blog}/>
                    </div>
                ))
            }
        </div>
        </>
        
    );
}

export default BlogList;