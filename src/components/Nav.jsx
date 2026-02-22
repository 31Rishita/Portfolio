import { useState } from "react";

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className="nav">

      {/* LEFT LOGO */}
      <div className="nav-logo">
        Rishita<span>.</span>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* THEME TOGGLE */}
        <button className="theme-toggle" onClick={toggleTheme}>
          <span className={theme === "light" ? "active" : ""}>☀</span>
          <span className={theme === "dark" ? "active" : ""}>🌙</span>
          <div className={`toggle-ball ${theme}`} />
        </button>

      </div>
    </nav>
  );
}