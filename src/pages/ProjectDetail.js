import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import { confidentialNote, projects } from '../data/profile';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  return (
    <>
      <Seo title={project.name} description={project.summary} />
      <article className="section container narrow">
        <p><Link className="text-link" to="/projects"><span aria-hidden="true">←</span> All projects</Link></p>
        <p className="eyebrow">
          {project.kind === 'professional' ? 'Case study' : 'Personal project'} · {project.status}
        </p>
        <h1>{project.name}</h1>
        {project.client && <p className="muted">{project.client}</p>}
        <p className="lead">{project.summary}</p>

        <h2>Technologies</h2>
        <ul className="tags">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2>My role</h2>
        <p>{project.role}</p>

        <h2>Contributions</h2>
        <ul className="list">
          {project.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        {project.challenges.length > 0 && (
          <>
            <h2>{project.kind === 'personal' ? 'Next steps' : 'Engineering challenges'}</h2>
            <ul className="list">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {project.outcome && (
          <>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </>
        )}

        {project.repo ? (
          <p>
            <a className="btn" href={project.repo} target="_blank" rel="noreferrer">View source on GitHub</a>
          </p>
        ) : (
          <p className="muted note">{confidentialNote}</p>
        )}
      </article>
    </>
  );
}
