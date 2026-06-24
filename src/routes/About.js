import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import profile from "../data/profile";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="About Rahul."
        text="Software engineer with product experience across frontend systems, backend-integrated workflows, performance optimization, and AI-assisted applications."
      />

      <section className="section">
        <div className="two-column-copy">
          <div className="surface-panel callout">
            <h2>I build software that balances product thinking, reliable execution, and clear user experience.</h2>
            <p>
              I&apos;m Rahul Lanka, a software engineer with {profile.experience} of experience
              building web and mobile product features. My recent work has included frontend
              architecture, backend migration, offline-first systems, performance optimization, and
              internal tooling that removed repetitive operational work.
            </p>
            <p>
              I enjoy writing maintainable code, improving user journeys, and working on systems
              that are reliable at scale. Aptus is part of this portfolio because it reflects my
              interest in applying AI in a practical product flow, not just mentioning AI for the
              sake of it.
            </p>
          </div>

          <div className="page-grid">
            <div className="surface-panel info-card">
              <h3>Core strengths</h3>
              <div className="chip-row">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Supabase</span>
                <span>Firebase</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="surface-panel info-card">
              <h3>Engineering themes</h3>
              <div className="chip-row">
                <span>Offline-first UX</span>
                <span>Performance</span>
                <span>Automation</span>
                <span>AI-Assisted Features</span>
                <span>System Design</span>
                <span>System Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-grid">
          <div className="surface-panel info-card">
            <h3>Selected experience highlights</h3>
            <ul className="stack-list">
              <li>Architected Firebase to Supabase migration work that improved scalability and reduced latency by 40%</li>
              <li>Built onboarding automation flows that reduced manual operational effort by 90%</li>
              <li>Optimized rendering, lazy loading, and pagination strategies to improve load time by 60%</li>
              <li>Worked on offline-first synchronization and stability improvements for low-memory Android devices</li>
            </ul>
          </div>

          <div className="surface-panel info-card">
            <h3>Career direction</h3>
            <p>
              I&apos;m targeting software engineering teams where problem solving, code quality,
              system design, user impact, and ownership all matter. My strongest fit is on product
              teams that value both engineering rigor and practical execution.
            </p>
            <div className="chip-row">
              <span>Product Engineering</span>
              <span>Scalable Systems</span>
              <span>AI-Assisted Applications</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-grid">
          <div className="surface-panel info-card">
            <h3>Links</h3>
            <ul className="stack-list">
              <li><a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn profile</a></li>
              <li><a href={profile.leetcodeUrl} target="_blank" rel="noreferrer">LeetCode profile</a></li>
              <li><a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub profile</a></li>
              <li><a href={profile.resumeUrl} download>Download resume</a></li>
            </ul>
          </div>

          <div className="surface-panel info-card">
            <h3>What I bring to teams</h3>
            <ul className="stack-list">
              <li>End-to-end ownership from UI flow to data-backed product behavior</li>
              <li>Performance-minded engineering with attention to reliability and usability</li>
              <li>Experience collaborating through code reviews, sprint delivery, and iteration</li>
              <li>Practical interest in AI-assisted product features that solve real problems</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
