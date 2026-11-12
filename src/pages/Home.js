import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Seo from '../components/Seo';
import ProjectCard from '../components/ProjectCard';
import { highlights, profile, projects } from '../data/profile';

export default function Home() {
  const featured = projects.filter((p) => ['ppm', 'fusion', 'micro-commerce'].includes(p.slug));
  return (
    <>
      <Seo
        description={`${profile.name} is a Software Engineer specializing in Java and Spring Boot, full-stack development and AI-assisted engineering.`}
      />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{profile.title} · {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="lead">{profile.headline}</p>
          <div className="actions">
            <Link className="btn" to="/projects">View projects</Link>
            <a className="btn btn-outline" href={profile.resume} download>
              <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download resume
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="highlights-h">
        <div className="container">
          <h2 id="highlights-h" className="sr-only">Highlights</h2>
          <ul className="stats">
            {highlights.map((h) => (
              <li key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-h">
        <div className="container">
          <h2 id="featured-h">Selected work</h2>
          <div className="grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <p><Link className="text-link" to="/projects">All projects <span aria-hidden="true">→</span></Link></p>
        </div>
      </section>
    </>
  );
}
