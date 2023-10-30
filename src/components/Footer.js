import React from "react";
import "./Footer.css";
function Footer(){
    return(
        <div>
            <div className="footer_bg">
                <img src="ida_footer.png" alt="footer_ida" className="ida_footer"></img>
                <ul class="services">Services
                    <li class="service-item">3D Modeling</li>
                    <li class="service-item">Animation</li>
                    <li class="service-item">AR/VR Modeling</li>
                    <li class="service-item">Design</li>
                </ul>
                <ul className="support">Support
                    <li className="support-item">Customer Service</li>
                    <li className="support-item">FAQ</li>
                    <li className="support-item">Contact Us</li>
                </ul>
                <ul className="Company">Company
                    <li className="company-item">About Us</li>
                </ul>
                <img src="facebook_icon.png" alt="facebook" className="facebook"></img>
                <img src="instagram.png" alt="instagram" className="instagram"></img>
            </div>
        </div>
    );
}

export default Footer;