import { useState } from 'react';
import { BriefcaseBusiness, ChevronDown } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { certifications, experiences, type Experience as WorkExperience } from '../data/portfolio';
import { usePageTitle } from '../hooks/usePageTitle';

function ExperienceEntry({ item, index }: { item: WorkExperience; index: number }) {
  const [open, setOpen] = useState(item.type === 'Current');
  return <article className="contribution">
    <div className="contribution-row"><BriefcaseBusiness size={20} className={item.type === 'Current' ? 'open-icon' : 'merged-icon'} /><div className="work-title"><h3>{item.company}</h3><p>{item.role}</p><span>{item.period} · {item.location}</span></div><button aria-label={`Toggle details for ${item.company}`} aria-expanded={open} aria-controls={`work-${index}`} onClick={() => setOpen(!open)}><ChevronDown size={18} className={open ? 'expanded' : ''} /></button></div>
    <p className="work-summary">{item.summary}</p>
    <div id={`work-${index}`} hidden={!open} className="contribution-description"><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>
  </article>;
}

export default function Experience() {
  usePageTitle('Experience');
  return <div className="inner-page experience-page"><PageHeader title="Experience" description="Product engineering, partnerships, and building useful software — from Tirana, Albania." /><div className="contributions">
    <div className="contributions-label"><BriefcaseBusiness size={14} /> Work experience</div>
    {experiences.map((item, index) => <ExperienceEntry key={item.company} item={item} index={index} />)}
    <section className="education-section"><h2>Education</h2><h3>Don Bosco Vocational High School</h3><p>Information Technology &amp; Programming · 2024 — 2028</p><p>Academic average: 9.3/10 · Software development, database design, and network administration.</p></section>
    <section className="certifications-section"><h2>Certifications</h2>{certifications.map(certificate => <div className="certificate-row" key={certificate.name}><div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div><span>{certificate.date}</span></div>)}</section>
  </div></div>;
}
