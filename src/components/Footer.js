import "./FooterStyles.css";
import React from "react";
import { FaBriefcase, FaEnvelope, FaFileDownload, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import profile from "../data/profile";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copy">
          <span className="footer-kicker">{profile.name}</span>
          <h3>Software engineer focused on product-quality interfaces, backend-connected workflows, and scalable systems.</h3>
          <p>
            Open to software engineering roles where product sense, solid execution, performance,
            and end-to-end feature ownership matter.
          </p>
          <div className="footer-actions">
            <a href={profile.resumeUrl} download>
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-item">
            <FaMapMarkerAlt />
            <span>{profile.location}</span>
          </div>
          <div className="footer-item">
            <FaPhoneAlt />
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="footer-item">
            <FaEnvelope />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="footer-item">
            <FaBriefcase />
            <span>Open to SDE, frontend, and product engineering opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
