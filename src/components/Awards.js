import React from "react";
import "./Awards.css";
function Awards(){
    return(
        <div>
            <div className="bg">
                <div className="awards">Awards</div>
                <div className="awards_sentance">Quality is not an act, it is a habit.</div>
                <div className="author">-Aristotel</div>
                <img src="gold23.png" alt="gold" className="gold23"></img>
                <div className="year">2023</div>
                <div className="award">BEST VFX AWARD</div>
                <img src="silver23.png" alt="silver" className="silver23"></img>
                <div className="silver_year1">2023</div>
                <img src="silver23.png" alt="silver" className="silver23_2"></img>
                <div className="silver_year2">2023</div>
                <div className="visual">BEST VISUAL DESIGN AWARD</div>
                <div className="animation_data">BEST ANIMATION AWARD</div>
                <div className="des1">Recognized by ArtistryFest for our exceptional visual storytelling, meticulous attention to detail, and the awe-inspiring beauty that our animations bring to life.</div>
                <div className="des2">Times Business Awards Excellence In Animation and Visual Effects </div>
            </div>
        </div>
    );
}

export default Awards;