import "./Heroimg2Styles.css";
import React from "react";

const Heroimg2 = ({ heading, text }) => {
  return (
    <section className="hero-img">
      <div className="heading">
        <span className="page-label">Portfolio</span>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Heroimg2;
