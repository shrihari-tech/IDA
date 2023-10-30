import React, { useState } from "react";
import "./Process.css";
function Process(){
    const [cards,setCard]=useState([
        {
            id:1,
            logo:"disscussion.png"
        },
        {
            id:2,
            logo:"ideate.png"
        },
        {
            id:3,
            logo:"execution.png"
        }
    ])

    const [datas,SetData]=useState([
        {
            id:1,
            logo:"diamond.png",
            text:"Animation & Rigging "
        },
        {
            id:2,
            logo:"diamond.png",
            text:"Webdesign"
        },
        {
            id:3,
            logo:"diamond.png",
            text:"Print"
        },
        {
            id:4,
            logo:"diamond.png",
            text:"Illustrationion"
        },
        {
            id:5,
            logo:"diamond.png",
            text:"UI Design"
        },
        {
            id:6,
            logo:"diamond.png",
            text:"UX Design"
        },
        {
            id:7,
            logo:"diamond.png",
            text:"Motion Design"
        },
        {
            id:8,
            logo:"diamond.png",
            text:"AR/VR"
        }
    ])
    return(
        <div className="dark-section">
            <div className="ourprocess">OUR PROCESS </div>
            <div className="working">Working Process </div>
            <div className="sentence">A well-structured workflow with great design execution.</div>
            <img src="Work_flow.png" alt="work" className="work_flow"></img>
            <div className="flexBox_diamond">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.logo} alt={`Card ${card.id}`} />
                    </div>
                ))}
            </div>
            <div className="flexData">
                {datas.map((data)=>(
                    <div>
                        <img src={data.logo} alt={`Data ${data.id}`}/>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Process;