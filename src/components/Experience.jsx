import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="path mono">~/experience</span>
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="tl-item" key={job.title + job.company}>
              <div className="tl-head">
                <h3>{job.title}</h3>
                <span className="dates mono">{job.dates}</span>
              </div>
              <div className="company">{job.company}</div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
