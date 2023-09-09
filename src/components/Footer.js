import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem "}}/>
                    <div>
                        <p>Bhimavram</p>
                        <p>Andhra Pradesh</p>
                    </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem "}}/>9052752719</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem "}}/>lankarahul121@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About Myself</h4>
                <p>This is me Rahul Lanka.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1 rem "}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1 rem "}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1 rem "}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer