import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { certifications, education, profile } from '../data/profile';

export default function About() {
  return (
    <>
      <Seo title="About" description={`About ${profile.name}: backend-focused software engineer with 4+ years of experience.`} />
      <section className="section container narrow">
        <h1>About</h1>
        <p className="lead">{profile.summary}</p>
        <p>
          My primary stack is Java and Spring Boot. I also work on the frontend with React, and I use AI tools such as
          Claude as part of day-to-day engineering: investigating unfamiliar code, debugging and refactoring. Every
          AI-generated change is reviewed and validated with builds and automated tests before it ships.
        </p>
        <p>
          I joined both of my employers while they were early-stage startups, which meant owning design decisions,
          working directly with product managers, and mentoring newer engineers.
        </p>

        <h2>Education</h2>
        <div className="card">
          <h3>{education.degree}</h3>
          <p>{education.school}, {education.place}</p>
          <p className="muted">{education.period} · {education.detail}</p>
        </div>

        <h2>Certifications and activities</h2>
        <ul className="list">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <p>
          <Link className="btn" to="/contact">Get in touch</Link>
        </p>
      </section>
    </>
  );
}
