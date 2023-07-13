import "./AboutContentStyles.css"

import React from 'react'
import {Link} from 'react-router-dom'
import img1 from "../components/assets/img1.jpg"
import img2 from "../components/assets/img2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>I am a Front-End Developer,I create Responsive websites.</p>
            <Link to="/Contact">
                <button className="btn"> Contact</button>
            </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={img1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
              <img src={img2} className="img" alt="true" />
            </div>
          </div>

        </div>
    </div>
  )
}

export default AboutContent;
