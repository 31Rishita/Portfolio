import { PROJECTS } from "../../data/projects.js";

export default function ProjectsTab() {
  return (
    <div className="projects-section">

      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="proj-card">

            {/* BODY ONLY */}
            <div className="proj-body">

              {/* TITLE */}
              <h3 className="proj-title">{p.title}</h3>

              {/* DESCRIPTION */}
              <p className="proj-desc">{p.desc}</p>

              {/* SKILLS */}
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-btn"
                >
                  View on GitHub →
                </a>
              )}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}