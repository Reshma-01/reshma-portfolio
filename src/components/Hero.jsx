import { profile, stats } from "../data";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow mono">{profile.location}</span>
            <h1>
              {profile.name}
              <span className="cursor"></span>
            </h1>
            <p className="role">{profile.role}</p>
            <p className="pitch">
              5+ years turning government IT support instincts — patience, precision, and a
              habit of chasing down root causes — into responsive web applications, REST API
              integrations, and dashboards people actually enjoy using.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-ghost" href="#contact">Get in Touch</a>
            </div>
            <div className="stat-row">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="avatar-wrap">
            <img className="avatar-img" src={profileImg} alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
