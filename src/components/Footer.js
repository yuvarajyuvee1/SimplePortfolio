import "./footerStyles.css"

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>No:232,Happy street</p>
                        <p>Chennai</p>
                    </div>
                </div>
                <div className="phone"> 
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    1-2345-676-36
                </h4>
                </div>
                <div className="email"> 
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    yuvarajparthiban2000@gmail.com
                </h4>
                
                </div>

            </div>
           <div className="right">
                <h4>About this company </h4>
                <p> This is me Yuvaraj Parthiban. CEO & Founder of Techzone.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}} />
                </div>
           </div>
        </div>
      
    </div>
  )
}

export default Footer
