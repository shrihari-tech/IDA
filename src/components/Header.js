import React from "react";
import './Header.css';
import {useState} from "react";
import { Link } from 'react-router-dom';

// function Header(){
//     return(
//         <div>
//             <div className="navbar">
//                 <img src="ida.png" alt="ida" className="logo" />
//                 <a href="#">WhyUs</a>
//                 <a href="#">Service</a>
//                 <a href="#">OurProcess</a>
//                 <a href="#">Projects</a>
//                 <a href="#">Awards</a>
//                 <button className="login">Contact Us</button>
//             </div>
//       </div>
//     )
// }

// export default Header;

// function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             <div className="navbar">
//                 <img src="ida.png" alt="ida" className="logo" />
//                 {menuOpen ? (
//                     <div className="menu-icon" onClick={toggleMenu}>
//                         &#10005; {/* Render a close icon when the menu is open */}
//                     </div>
//                 ) : (
//                     <div className="menu-icon" onClick={toggleMenu}>
//                         &#9776; {/* Render the hamburger icon when the menu is closed */}
//                     </div>
//                 )}
//                 <ul className={menuOpen ? "nav-links active" : "nav-links"}>
//                     <a href="#">WhyUs</a>
//                     <a href="#">Service</a>
//                     <a href="#">OurProcess</a>
//                     <a href="#">Projects</a>
//                     <a href="#">Awards</a>
//                     <button className="login">Contact Us</button>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Header;



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="ida.png" alt="Logo" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#why-us" className="nav-button">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-button">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#our-process" className="nav-button">
              Our Process
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-button">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/BlogList" className="nav-button">
              Blogs
            </a>
            {/* <Link to="/BlogList" className="nav-button">
                Blogs
            </Link> */}
          </li>
        </ul>
      </div>
      <a className="contact-button" href="#footer">Contact Us</a>
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;