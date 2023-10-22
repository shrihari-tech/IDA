import React, { useState } from "react";
import "./Whyus.css";

function Whyus(){
    const [cards,setCard]=useState([
        {
            id:1,
            design:"design.png"
        },
        {
            id:2,
            design:"animation.png"
        },
        {
            id:3,
            text:"A Good Design is one that can reflect the business goals that we design and can be conveyed to consumers with the appropriate target."
        }
    ])
    return(
        <div>
            <h1>We Design</h1>
            <h1>Animat Amaze</h1>
            <img src="anime.png" alt="anime" className="anime"/>
            <h1>Creative</h1>
            <h1>Design</h1>
            <h1>Outstanding</h1>
            <h1>Animation</h1>
            <img src="grass.png" alt="grass" className="grass"/>
            <div className="flexbox">
                {cards.map((card)=>(
                <div key={card.id}>
                    <img src={card.design} alt={card.design} />
                    <p>{card.text}</p>
                </div>       
                ))
            }
            </div>
        </div>
    )
}

export default Whyus;