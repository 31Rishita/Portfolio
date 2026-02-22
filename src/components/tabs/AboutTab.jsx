import PhotoCard from "../PhotoCard.jsx";

export default function AboutTab() {
  return (
    <div className="about-inner">
      <div>
        <div className="sec-label">About Me</div>

        <h2 className="sec-title">
          Hi! I am Bontha Rishita Reddy
        </h2>

        <div className="about-desc">
          <p>
            An undergraduate at BVRIT Hyderabad College of Engineering for Women 
            in the field of Computer Science in Artificial Intelligence and Machine Learning.
          </p>
          <p>
          I have leadership experience as the Vice Chair of the ACM-W Student Chapter at my college, 
          along with serving as a Tech Lead for a group of dev-interns at VISWAM.AI.
          </p>
        </div>

        {/* 🔥 CONNECT BUTTON */}
        <a
          href="https://www.linkedin.com/in/rishita-reddy-bontha/"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-btn"
        >
          Connect With Me
        </a>
      </div>

      <div className="about-photo-wrap">
        <PhotoCard />
      </div>
    </div>
  );
}