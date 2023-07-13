import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../components/assets/pro1.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns"></div>
        <NavLink to={props.view} className="btn"> View </NavLink>
        <NavLink to="url.com" className="btn-light"> Source </NavLink>
    </div>
</div>
  )
}

export default WorkCard
