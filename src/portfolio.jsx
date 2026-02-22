import { useState, useCallback } from "react";
import "./styles/portfolio.css";

import Nav from "./components/Nav.jsx";
import TabBar from "./components/TabBar.jsx";
import AboutTab from "./components/tabs/AboutTab.jsx";
import ProjectsTab from "./components/tabs/ProjectsTab.jsx";
import ConnectTab from "./components/tabs/ConnectTab.jsx";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("about");

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  }, []);

  const handleTabChange = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="portfolio" data-theme={theme}>

      {/* Background */}
      <div className="noise" />
      <div className="blob blob1" />
      <div className="blob blob2" />

      {/* NAV */}
      <Nav theme={theme} toggleTheme={toggleTheme} />

      {/* TAB SECTION */}
      <div className="tabs-wrapper">
        <TabBar active={activeTab} onChange={handleTabChange} />
      </div>

      {/* ABOUT */}
      <section id="about" className="about-section hero-replacement">
        <div className="about-wrapper">
        <AboutTab />
          <div className="scroll-hint">
            <div className="scroll-line" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <ProjectsTab />
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <ConnectTab />
      </section>
      
      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">
          Rishita<span>.</span>
        </span>
        <span>Copyright © 2026 Bontha Rishita Reddy. All rights reserved.</span>
      </footer>

    </div>
  );
}