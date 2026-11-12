import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <p className="eyebrow">
        {project.kind === 'professional' ? 'Case study' : 'Personal project'} · {project.status}
      </p>
      <h3>
        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
      </h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Technologies">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <Link className="text-link" to={`/projects/${project.slug}`}>
        Read details <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
