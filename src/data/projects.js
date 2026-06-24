import aptusCover from "../assets/Aptus Project/Screenshot_20260624_210101.png";
import aptusShot2 from "../assets/Aptus Project/Screenshot_20260624_210346.png";
import aptusShot3 from "../assets/Aptus Project/Screenshot_20260624_210401.png";
import aptusShot4 from "../assets/Aptus Project/Screenshot_20260624_210419.png";
import chimpleCover from "../assets/Chimple Learning/Screenshot_20260624_231007.png";
import chimpleShot2 from "../assets/Chimple Learning/Screenshot_20260624_231109.png";
import chimpleShot3 from "../assets/Chimple Learning/Screenshot_20260624_231136.png";
import photoCover from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_210702.png";
import photoShot2 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_210759.png";
import photoShot3 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_210848.png";
import photoShot4 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_210906.png";
import photoShot5 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_211352.png";
import photoShot6 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_211416.png";
import photoShot7 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_211431.png";
import photoShot8 from "../assets/PhotoGrapher Portfolio/Screenshot_20260624_211458.png";

const projects = [
  {
    id: "chimple-learning",
    title: "Chimple Learning",
    category: "EdTech Product Platform",
    summary:
      "A product-focused learning platform tied to my professional engineering work, combining responsive interfaces, data-backed workflows, and performance-minded delivery for real users.",
    highlights: [
      "Frontend work connected to production product flows",
      "Performance, workflow, and delivery improvements",
      "EdTech experience shaped around real user scale and product needs",
    ],
    tech: ["React", "TypeScript", "Supabase", "Firebase", "Product Engineering"],
    liveUrl: "https://cuba-stage.web.app/",
    coverImage: chimpleCover,
    gallery: [chimpleCover, chimpleShot2, chimpleShot3],
  },
  {
    id: "sai-photography-portfolio",
    title: "SRI VISHWAKARMA PHOTOGRAPHY",
    category: "Responsive Portfolio Website",
    summary:
      "A visual-first photography portfolio built to present work with clarity, strong section flow, and a polished browsing experience across screen sizes.",
    highlights: [
      "Hero-led storytelling with immersive imagery",
      "Responsive gallery presentation",
      "Clear service and portfolio sections",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Responsive UI"],
    liveUrl: "https://rahul-lanka.github.io/Sai-Photography-Portfolio/",
    coverImage: photoCover,
    gallery: [
      photoCover,
      photoShot2,
      photoShot3,
      photoShot4,
      photoShot5,
      photoShot6,
      photoShot7,
      photoShot8,
    ],
  },
  {
    id: "aptus",
    title: "ApTuS",
    category: "AI-Powered Resume Analyzer",
    summary:
      "An AI-based ATS resume analyzer designed to evaluate resumes with keyword matching, ATS scoring, skill-gap analysis, and practical improvement suggestions.",
    highlights: [
      "Gemini-powered resume improvement assistance",
      "ATS scoring, keyword relevance, and skill-gap feedback",
      "Product-style UI designed for clarity and actionable output",
    ],
    tech: ["React", "TypeScript", "Gemini API", "AI-Assisted UX"],
    liveUrl: "https://rahul-lanka.github.io/aptus/",
    coverImage: aptusCover,
    gallery: [aptusCover, aptusShot2, aptusShot3, aptusShot4],
  },
];

export default projects;
