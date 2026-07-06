import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <span className="path mono">~/education</span>
          <h2>Education &amp; Certifications</h2>
        </div>
        <div className="edu-grid">
          <div className="edu-card">
            <h4>Education</h4>
            <div className="edu-row">
              <div className="t">{education.degree.title}</div>
              <div className="s">{education.degree.school}</div>
              <div className="d">{education.degree.dates}</div>
            </div>
          </div>
          <div className="edu-card">
            <h4>Certifications</h4>
            {education.certifications.map((cert) => (
              <div className="edu-row" key={cert.title}>
                <div className="t">{cert.title}</div>
                <div className="s">{cert.school}</div>
                <div className="d">{cert.dates}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
