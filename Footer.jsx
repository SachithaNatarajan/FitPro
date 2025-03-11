import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; 

    const Footer = () => {
        return (
          <footer className="footer">
            <div className="footer-container">
              <h2>FitPro</h2>
              <p>
                Life’s too short for boring blogs! Here, we serve up fresh, witty, and
                thought-provoking takes on everything from tech trends to travel tales.
              </p>
      
              <div className="footer-links">
                <div>
                  <h3>Information</h3>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/contactus">Contact Us</Link>
                </div>
      
                <div>
                  <h3>Contact</h3>
                  <p><FaEnvelope /> info@pro.com</p>
                  <p><FaPhone /> 910 468 587 1235</p>
                  <p><FaMapMarkerAlt /> Coimbatore, India</p>
                </div>
      
                <div>
                  <h3>Follow Us</h3>
                  <a href="#"><FaLinkedin size={20} /></a>
                  <a href="#"><FaTwitter size={20} /></a>
                  <a href="#"><FaFacebook size={20} /></a>
                  <a href="#"><FaInstagram size={20} /></a>
                </div>
              </div>
      
              <p>© 2025 FitPro.com - All Rights Reserved.</p>
            </div>
          </footer>
        );
      };
      
export default Footer;  
