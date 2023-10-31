import React from "react";
import './Header.css';
import {useState} from "react";
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

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="navbar">
                <img src="ida.png" alt="ida" className="logo" />
                {menuOpen ? (
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#10005; {/* Render a close icon when the menu is open */}
                    </div>
                ) : (
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776; {/* Render the hamburger icon when the menu is closed */}
                    </div>
                )}
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <a href="#">WhyUs</a>
                    <a href="#">Service</a>
                    <a href="#">OurProcess</a>
                    <a href="#">Projects</a>
                    <a href="#">Awards</a>
                    <button className="login">Contact Us</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
