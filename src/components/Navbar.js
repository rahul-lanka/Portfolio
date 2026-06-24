import "./NavbarStyles.css";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 24);
    };

    window.addEventListener("scroll", changeColor);
    changeColor();

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const handleChange = () => setClick((prevClick) => !prevClick);
  const closeMenu = () => setClick(false);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">RL</span>
        <div>
          <p>Rahul Lanka</p>
          <span>Software Developer</span>
        </div>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      <button className="hamburger" onClick={handleChange} aria-label="Toggle navigation">
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </header>
  );
};

export default NavBar;
