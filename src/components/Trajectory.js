import "./TrajectoryStyles.css";
import React, { useEffect, useRef, useState } from "react";
import trajectory from "../data/trajectory";

const Trajectory = () => {
  const orderedTrajectory = [...trajectory].reverse();
  const sectionRef = useRef(null);
  const shellRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState("down");
  const [isScrolling, setIsScrolling] = useState(false);
  const lastProgressRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!shellRef.current) {
        return;
      }

      const rect = shellRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = viewportHeight * 0.82;
      const endPoint = viewportHeight * 0.18;
      const totalDistance = rect.height + (startPoint - endPoint);
      const traveled = startPoint - rect.top;
      const nextProgress = Math.min(Math.max(traveled / totalDistance, 0), 1);

      if (nextProgress > lastProgressRef.current + 0.001) {
        setDirection("down");
      } else if (nextProgress < lastProgressRef.current - 0.001) {
        setDirection("up");
      }

      lastProgressRef.current = nextProgress;
      setProgress(nextProgress);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 140);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="section trajectory-section" ref={sectionRef}>
      <div className="section-heading trajectory-heading">
        <span className="section-kicker">Experience Journey</span>
        <h2>The path so far.</h2>
        <p>
          A clearer view of how academic foundations, quality work, product engineering, and
          measurable impact have shaped my trajectory toward stronger software roles.
        </p>
      </div>

      <div
        className="trajectory-shell surface-panel"
        ref={shellRef}
        style={{ "--trajectory-progress": progress }}
      >
        <div className="trajectory-line" aria-hidden="true">
          <span
            className={`trajectory-signal ${direction === "up" ? "reverse" : "forward"} ${isScrolling ? "is-moving" : "is-idle"}`}
          ></span>
        </div>
        {orderedTrajectory.map((item, index) => (
          <article
            className={index === 0 ? "trajectory-item trajectory-item-current" : "trajectory-item"}
            key={`${item.year}-${item.title}`}
          >
            <div className="trajectory-year-wrap">
              <span className="trajectory-year">{item.year}</span>
              <span className="trajectory-dot" aria-hidden="true"></span>
            </div>

            <div className="trajectory-card">
              <div className="trajectory-meta">
                <span>{item.organization}</span>
                <span>{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Trajectory;
