import Seo from '../components/Seo';
import ProjectCard from '../components/ProjectCard';
import { confidentialNote, projects } from '../data/profile';

export default function Projects() {
  const professional = projects.filter((p) => p.kind === 'professional');
  const personal = projects.filter((p) => p.kind === 'personal');
  return (
    <>
      <Seo title="Projects" description="Case studies from professional work and personal projects with public source." />
      <section className="section container">
        <h1>Projects</h1>
        <p className="muted">{confidentialNote}</p>

        <h2>Professional case studies</h2>
        <div className="grid">
          {professional.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <h2>Personal projects</h2>
        <div className="grid">
          {personal.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
