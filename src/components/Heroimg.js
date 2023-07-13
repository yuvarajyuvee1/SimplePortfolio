import "./HeroimgStyles.css";
import backgroundimg from "../components/assets/backgroundimg.jpg"
import {Link} from"react-router-dom"

import React from 'react'

const Heroimg = () => {
  return ( 
  <div className="hero">
    <div className="mask">
        <img className="intro-img" src={backgroundimg} alt ="backgroundimg" />

    </div>
    <div className="content">
        <p>Hi, I'm a Developer</p>
        <h1>Front-End Developer</h1>
        <div>
            <Link to="/projects" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
    </div>
  </div>
  )
}

export default Heroimg
