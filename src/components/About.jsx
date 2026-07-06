import { profile } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="path mono">~/about</span>
          <h2>A developer who started in IT support</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I build dynamic, responsive web applications using HTML5, CSS3, JavaScript (ES6),
              React.js, Redux, PHP, and MySQL — from role-based banking platforms to eCommerce
              systems and CMS tools.
            </p>
            <p>
              Before development, I spent five years as an IT/Technical Support Assistant for
              the Local Self Government Department, Kerala — troubleshooting government
              software, maintaining official data systems, and supporting internal
              infrastructure. That background shaped how I write code today: I debug
              systematically, document clearly, and care about the people on the other end of
              the interface.
            </p>
            <p>
              I'm comfortable owning a feature end to end — from a React component built with
              Hooks, to the REST API it calls, to the MySQL schema behind it.
            </p>
          </div>
          <div className="side-card">
            <h4>Quick Facts</h4>
            <ul>
              <li><span>Location</span><span>{profile.location}</span></li>
              <li><span>Role</span><span>Full Stack Dev</span></li>
              <li><span>Focus</span><span>React.js / PHP</span></li>
              <li><span>Email</span><span>{profile.email}</span></li>
              <li><span>Phone</span><span>{profile.phone}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
