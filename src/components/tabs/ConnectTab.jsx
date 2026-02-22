import { useState } from "react";
import resumeFile from "../../assets/Resume.pdf";
export default function ConnectTab() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handle = e =>
    setForm(f => ({...f, [e.target.name]: e.target.value}));

  const submit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="connect-section">

      {/* HERO HEADER */}
      <div className="connect-hero">

        <h2 className="connect-title">
          Let’s connect <br />
        </h2>

        <a href="mailto:rishitabontha@gmail.com" className="connect-email">
        rishitabontha@gmail.com
        </a>

        <div className="connect-socials">
          <a href="https://github.com/31Rishita/">GitHub</a>
          <a href="https://www.linkedin.com/in/rishita-reddy-bontha/">LinkedIn</a>
          <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn active"
          >
              Resume ↗
          </a>
        </div>
      </div>
    </div>
  );
}