import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <div className="nav-inner">
        <div className="logo">
          reshma<span className="dot">.</span>babu
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={open ? "nav-open" : ""}>
          <ul>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}