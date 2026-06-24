import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import ProductionStack from "../components/ProductionStack";
import Trajectory from "../components/Trajectory";
import WorkCard from "../components/WorkCard";
import projects from "../data/projects";
import profile from "../data/profile";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />

      <section className="section">
        <div className="two-column-copy">
          <div className="surface-panel callout">
            <h2>Software engineering experience shaped by real product delivery.</h2>
            <p>
              At {profile.currentCompany}, I work across frontend architecture, data workflows,
              offline-first behavior, performance optimization, backend-connected product flows,
              and internal automation. This portfolio is designed to show engineering depth along
              with clean user-facing execution.
            </p>
          </div>

          <div className="page-grid">
            <div className="surface-panel info-card">
              <h3>Strengths I bring</h3>
              <div className="chip-row">
                <span>Frontend Systems</span>
                <span>TypeScript</span>
                <span>Node.js APIs</span>
                <span>Supabase & PostgreSQL</span>
                <span>Performance Optimization</span>
                <span>AI-Assisted Features</span>
              </div>
            </div>

            <div className="surface-panel info-card">
              <h3>Impact snapshot</h3>
              <ul className="stack-list">
                <li>Improved production data-fetch latency by 40% during backend migration work</li>
                <li>Reduced onboarding effort by 90% through workflow automation</li>
                <li>Improved load time by 60% with rendering and pagination optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-grid">
          <div className="surface-panel info-card">
            <h3>Engineering scope</h3>
            <ul className="stack-list">
              <li>Build reusable frontend systems and responsive product interfaces</li>
              <li>Work with APIs, authentication, database-backed workflows, and operational tooling</li>
              <li>Optimize performance, caching, and offline-first behavior for real users</li>
              <li>Explore AI integrations where they improve product usefulness and user outcomes</li>
            </ul>
          </div>
          <div className="surface-panel info-card">
            <h3>Role fit</h3>
            <p>
              I am best aligned with software engineering roles on product teams that value
              end-to-end ownership, strong UI execution, scalable data flows, performance, and
              pragmatic problem solving.
            </p>
            <div className="chip-row">
              <span>SDE Roles</span>
              <span>Product Engineering</span>
              <span>Full-Stack Collaboration</span>
              <span>Scalable Web Apps</span>
            </div>
          </div>
        </div>
      </section>

      <ProductionStack />

      <Trajectory />

      <WorkCard
        projects={projects}
        title="Featured projects"
        intro="A focused project set that highlights UI quality, product thinking, and early AI-oriented implementation, while my professional work also includes migrations, automation, and performance engineering."
      />

      <Footer />
    </div>
  );
};

export default Home;
