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
            <div className="we">We</div>
            <div className="design_data">Design</div>
            <div className="animate">Animate Amaze</div>
            <img src="anime.png" alt="anime" className="anime"/>
            <div className="creative">Creative</div>
            <div className="design">Design</div>
            <div className="outstadning">Outstanding</div>
            <div className="animation">Animation</div>
            <img src="grass.png" alt="grass" className="grass"/>
            <div className="flexbox">
                {cards.map((card)=>(
                <div key={card.id}>
                    <img src={card.design} alt={card.design} />
                    <p className="text">{card.text}</p>
                </div>       
                ))
            }
            </div>
        </div>
    )
}

export default Whyus;