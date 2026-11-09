import DesignProjects from '../components/DesignProjects';
import PageHeader from '../components/PageHeader';
import ReferenceProjectCard from '../components/ReferenceProjectCard';
import { referenceProjects } from '../data/reference';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Projects() {
  usePageTitle('Projects');
  return <div className="inner-page"><PageHeader title="Projects" description="Products, client work, and design explorations — built by Anest Petollari." /><div className="projects-grid full-projects">{referenceProjects.map(project => <ReferenceProjectCard key={project.id} project={project} />)}</div><section className="design-work"><h2>Design explorations</h2><DesignProjects /></section></div>;
}
