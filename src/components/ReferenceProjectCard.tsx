import { Globe } from 'lucide-react';
import { Github } from './SocialIcons';
import { PortfolioProject } from '../data/reference';

export default function ReferenceProjectCard({ project }: { project: PortfolioProject }) {
  const preview = project.image
    ? <div className="project-image-frame"><img className="project-art" src={project.image} alt={`${project.title} preview`} loading="lazy" width="360" height="400" /></div>
    : <div className="project-lettering"><span>{project.subtitle}</span><strong>{project.title}</strong><small>{project.tags.slice(0, 2).join(' / ')}</small></div>;
  return <article className={`reference-project project-${project.id}`}>
    {project.url ? <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>{preview}</a> : <div className="project-preview">{preview}</div>}
    <div className="project-title-row"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div><span className="live">{project.status === 'Live' && <i />}{project.status}</span></div>
    <p className="project-description">{project.description}</p>
    <p className="project-proof">{project.proof}</p>
    <div className="project-bottom"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.title} website`}><Globe size={20} /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={20} /></a>}</div></div>
  </article>;
}
