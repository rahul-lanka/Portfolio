import "./HeroimgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";
import profile from "../data/profile";

const Heroimg = () => {
  return (
    <section className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Rahul Lanka portfolio background" />
      </div>
      <div className="content">
        <span className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true"></span>
          Open to software engineering opportunities
        </span>
        <h1>{profile.headline}</h1>
        <p className="hero-copy">
          {profile.summary}
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn">View Projects</Link>
          <a href={profile.resumeUrl} className="btn btn-light" download>
            Download Resume
          </a>
        </div>
        <div className="hero-links">
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.leetcodeUrl} target="_blank" rel="noreferrer">LeetCode</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>{profile.experience}</strong>
            <span>Experience shipping product features in production</span>
          </div>
          <div>
            <strong>{profile.impactScale}</strong>
            <span>Scale supported through migration and operations tooling</span>
          </div>
          <div>
            <strong>AI + Web</strong>
            <span>Product development with practical AI-assisted features</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroimg;
