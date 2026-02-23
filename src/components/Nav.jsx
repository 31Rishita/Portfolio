import { useState } from "react";

export default function Nav({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        Rishita<span>.</span>
      </div>

      {/* Desktop Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Connect</a>
      </div>

      <div className="nav-right">
        {/* Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme}>
          <span className={theme === "dark" ? "active" : ""}>🌙</span>
          <span className={theme === "light" ? "active" : ""}>☀️</span>
          <div className={`toggle-ball ${theme}`} />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}