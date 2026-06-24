import "./NavbarStyles.css";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>

      <button className="hamburger" onClick={handleChange} aria-label="Toggle navigation">
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </header>
  );
};

export default NavBar;
