import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="intro-img"
         src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
         <p>HI, I'M A RAHUL LANKA</p>
         <h1>SOFTWARE DEVELOPER.</h1>
         <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
         </div>
        </div>
    </div>
  )
}

export default Heroimg