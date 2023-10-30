import React, { useState } from "react";
import "./Service.css";
function Service(){
    const [badges,setBadge]=useState([
        {
            id:1,
            logo:"mobile.png",
            text:"Mobile Game Development",
        },
        {
            id:2,
            logo:"PC.png",
            text:"PC Game Development"
        },
        {
            id:3,
            logo:"unity.png",
            text:"Unity Development"
        },
        {
            id:4,
            logo:"ARVR.png",
            text:"AR/VR Solutions"
        },
        {
            id:5,
            logo:"ARVR_design.png",
            text:"AR/VR Design"
        },
        {
            id:6,
            logo:"3d_modeling.png",
            text:"3D Modelings"
        },
        {
            id:7,
            logo:"unreal.png",
            text:"Unreal Development"
        },
        {
            id:8,
            logo:"animation_logo.png",
            text:"Animation"
        }

    ])
    return(
        <div className="service-container">
            <img src="darkbg.png" alt="darkbg" className="darkbg"></img>
            <div className="text-overlay">The service <br/>we provide        
            </div>
            <div className="data_overlay">Unleash your creativity and let your imagination soar<br/> with our world-class animation services and expert team.
            </div>
            <div className="cap">Captivating stories come to life through our animations, making every moment an unforgettable visual experience</div>
            <div className="logoes">
                {badges.map((badge) => (
                    <div key={badge.id} className="badge" style={badge.position}>
                        <img src={badge.logo} alt={badge.text} className="badge-logo" />
                        <div className="badge-text">{badge.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service;