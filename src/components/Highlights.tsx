import { Award } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Highlights() {
  return <section className="highlights-section"><div className="section-heading"><h2>Certifications</h2></div><div className="highlights-window"><div className="highlights-track">{[0, 1].map(copy => <div className="highlights-set" key={copy} aria-hidden={copy === 1 || undefined}>{certifications.map(certificate => <div className="highlight-card" key={certificate.name}><div className="highlight-person"><Award size={28} /><div><strong>{certificate.issuer}</strong><span>{certificate.date}</span></div></div><p>{certificate.name}</p></div>)}</div>)}</div></div></section>;
}
