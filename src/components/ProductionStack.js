import "./ProductionStackStyles.css";
import React from "react";
import {
  SiCss3,
  SiCloudflare,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiStorybook,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiPython,
} from "react-icons/si";
import { FaBolt, FaBook, FaBrain, FaCloud, FaCodeBranch, FaDatabase, FaJava, FaMobileAlt, FaPlug, FaProjectDiagram, FaShieldAlt, FaVial } from "react-icons/fa";
import productionStack from "../data/productionStack";

const iconMap = {
  React: SiReact,
  "React.js": SiReact,
  Redux: SiRedux,
  "Redux Toolkit": SiRedux,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "JavaScript (ES6+)": SiJavascript,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Responsive UI": FaMobileAlt,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Java: FaJava,
  SQL: FaDatabase,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  "Firebase Realtime Database": SiFirebase,
  "REST APIs": FaPlug,
  Authentication: FaShieldAlt,
  RBAC: FaShieldAlt,
  Git: SiGit,
  "GitHub Actions": SiGithubactions,
  Docker: SiDocker,
  "CI/CD": FaCodeBranch,
  Postman: SiPostman,
  Storybook: SiStorybook,
  Jest: FaVial,
  Jira: FaProjectDiagram,
  Confluence: FaBook,
  "Agile Delivery": FaCodeBranch,
  AWS: FaCloud,
  GCP: FaCloud,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  "Android Studio": FaMobileAlt,
  Capacitor: FaMobileAlt,
  "Gemini API": FaBrain,
  LangChain: FaBrain,
  RAG: FaBrain,
  "Prompt Engineering": FaBrain,
  Embeddings: FaBrain,
  "Vector Search": FaBrain,
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
