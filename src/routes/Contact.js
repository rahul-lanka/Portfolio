import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import profile from "../data/profile";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="Contact."
        text="Direct contact details, hiring links, and resume access for software engineering opportunities."
      />

      <section className="section">
        <div className="page-grid">
          <div className="surface-panel callout">
            <h2>Let&apos;s talk about software engineering, product development, or AI-assisted applications.</h2>
            <p>
              If you&apos;re hiring for a software engineering role, reviewing candidates for a
              product team, or want to discuss frontend, full-stack, or AI-assisted application
              work, I&apos;d be glad to connect.
            </p>
            <div className="chip-row">
              <span><a href={profile.resumeUrl} download>Download Resume</a></span>
              <span><a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a></span>
              <span><a href={profile.leetcodeUrl} target="_blank" rel="noreferrer">LeetCode</a></span>
            </div>
          </div>

          <div className="surface-panel info-card">
            <h3>Contact details</h3>
            <ul className="stack-list">
              <li>Email: {profile.email}</li>
              <li>Phone: {profile.phone}</li>
              <li>Location: {profile.location}</li>
              <li>Focus: SDE, frontend, and product engineering opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
