import { skills } from "../data";

export default function Skills() {
  return (
    <section className="alt" id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="path mono">~/skills</span>
          <h2>Technical Skills</h2>
        </div>
        <div className="skill-groups">
          {skills.map((group) => (
            <div className="skill-card" key={group.title}>
              <h4>{group.title}</h4>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
