import React from "react";
import './Header.css';
function Header(){
    return(
        <div>
            <div className="navbar">
                <img src="ida.png" alt="ida" className="logo" />
                <a href="#">WhyUs</a>
                <a href="#">Service</a>
                <a href="#">OurProcess</a>
                <a href="#">Projects</a>
                <a href="#">Awards</a>
                <button className="login">Contact Us</button>
            </div>
      </div>
    )
}

export default Header;