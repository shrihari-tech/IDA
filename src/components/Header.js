import React from "react";
import './Header.css';
function Header(){
    return(
        <div className="navbar">
            <img src="ida.png" alt="ida" className="logo" />
            <a href="#">WhyUs</a>
            <a href="#">Service</a>
            <a href="#">OurProcess</a>
            <a href="#">Projects</a>
            <a href="#">Awards</a>
            <button className="login">Login</button>
      </div>
    )
}

export default Header;