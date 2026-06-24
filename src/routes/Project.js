import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import WorkCard from "../components/WorkCard";
import projects from "../data/projects";
import profile from "../data/profile";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="Projects."
        text="Selected projects that show UI quality, product thinking, and early AI-oriented implementation."
      />

      <section className="section">
        <div className="page-grid">
          <div className="surface-panel callout">
            <h2>These projects highlight visible product work, while my day-to-day engineering scope goes broader.</h2>
            <p>
              Alongside personal projects, my professional work includes backend migration,
              database workflows, offline-first synchronization, performance optimization, and
              internal automation at {profile.currentCompany}.
            </p>
          </div>
          <div className="surface-panel info-card">
            <h3>Beyond the UI layer</h3>
            <ul className="stack-list">
              <li>Backend-connected data flows and operational tooling</li>
              <li>Authentication, access control, and workflow automation</li>
              <li>Offline sync and stability improvements for constrained devices</li>
              <li>Product-minded AI features that improve user outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      <WorkCard
        projects={projects}
        title="Selected developer work"
        intro="Each project includes a live link and screenshot previews, while the broader portfolio positioning reflects software engineering scope beyond frontend presentation alone."
        showGallery
      />

      <Footer />
    </div>
  );
};

export default Project;
