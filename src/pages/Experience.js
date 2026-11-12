import Seo from '../components/Seo';
import { experience } from '../data/profile';

export default function Experience() {
  return (
    <>
      <Seo title="Experience" description="Professional experience: Software Engineer at 909 Technologies and Software Developer at Future Algorithms." />
      <section className="section container narrow">
        <h1>Experience</h1>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item">
              <div className="timeline-head">
                <h2>{job.role}</h2>
                <p className="period">{job.period}</p>
              </div>
              <p className="muted">{job.company} · {job.place} · {job.note}</p>
              <ul className="list">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
