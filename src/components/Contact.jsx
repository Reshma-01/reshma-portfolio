import { profile } from "../data";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="wrap">
        <span className="path mono" style={{ display: "block", textAlign: "center" }}>
          ~/contact
        </span>
        <h2>Let's build something.</h2>
        <p>Open to Full Stack / React.js Developer roles — happy to talk over email, phone, or LinkedIn.</p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email Me</a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {profile.name}</span>
          <span className="mono">Built with React.js</span>
        </div>
      </div>
    </footer>
  );
}
