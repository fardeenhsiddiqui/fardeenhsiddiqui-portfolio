import Seo from '../components/Seo';
import { skills } from '../data/profile';

export default function Skills() {
  return (
    <>
      <Seo title="Skills" description="Technical skills grouped by backend, frontend, databases, messaging, cloud and AI-assisted engineering." />
      <section className="section container">
        <h1>Skills</h1>
        <p className="muted">Grouped by area. No ratings: the experience and projects pages show where each is used.</p>
        <div className="grid">
          {skills.map((group) => (
            <section key={group.category} className="card" aria-labelledby={`s-${group.category}`}>
              <h2 id={`s-${group.category}`} className="card-title">{group.category}</h2>
              <ul className="tags">
                {group.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
