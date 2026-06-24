import "./ProductionStackStyles.css";
import React from "react";
import {
  SiCss3,
  SiDocker,
  SiFirebase,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiStorybook,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FaBolt, FaBrain, FaCodeBranch, FaMobileAlt, FaPlug, FaShieldAlt, FaVial } from "react-icons/fa";
import productionStack from "../data/productionStack";

const iconMap = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Responsive UI": FaMobileAlt,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  "REST APIs": FaPlug,
  Authentication: FaShieldAlt,
  "GitHub Actions": SiGithubactions,
  Docker: SiDocker,
  Postman: SiPostman,
  Storybook: SiStorybook,
  Jest: FaVial,
  "Agile Delivery": FaCodeBranch,
  "Gemini API": FaBrain,
  "AI-Assisted Features": FaBrain,
  "Automation Workflows": FaBolt,
  "Performance Optimization": FaBolt,
};

const ProductionStack = () => {
  return (
    <section className="section production-section">
      <div className="section-heading production-heading">
        <span className="section-kicker">Production Stack</span>
        <h2>What I run in production.</h2>
        <p>
          A focused view of the technologies I use across product engineering work, delivery
          workflows, and AI-assisted application features.
        </p>
      </div>

      <div className="production-grid">
        {productionStack.map((group) => (
          <article className="production-card surface-panel" key={group.category}>
            <h3>{group.category}</h3>
            <div className="production-items">
              {group.items.map((item) => {
                const Icon = iconMap[item] || FaBolt;

                return (
                  <div className="production-item" key={item}>
                    <span className="production-icon">
                      <Icon />
                    </span>
                    <span className="production-label">{item}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductionStack;
