import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, CalendarDays } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ReferenceProjectCard from '../components/ReferenceProjectCard';
import TechStack from '../components/TechStack';
import GitHubActivity from '../components/GitHubActivity';
import Highlights from '../components/Highlights';
import { referenceProjects } from '../data/reference';
import { usePageTitle } from '../hooks/usePageTitle';

const roles = ['Product Engineer', 'Product & Partnerships', 'Technical Lead', 'Builder'];
const socials = [
  { name: 'GitHub', url: 'https://github.com/Anest2009', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anest-petollari-31158b338/', icon: Linkedin },
  { name: 'Mail', url: 'mailto:anestpetollari44@gmail.com', icon: Mail },
  { name: 'Book a call', url: 'https://calendar.app.google/kMgMeeiYA9ZdVd4f9', icon: CalendarDays },
];

export default function Home() {
  usePageTitle('');
  const [role, setRole] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setRole(current => (current + 1) % roles.length), 3000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="home-page">
      <div className="banner"><img src="/reference/banner.gif" alt="Animated forest and waterfalls" width="800" height="200" /></div>
      <section className="profile-section" aria-label="Introduction">
        <div className="profile-picture"><img src="/bitmoji.jpg" alt="Anest Petollari’s illustrated avatar" width="112" height="112" /></div>
        <div className="profile-copy"><h1>Anest Petollari</h1><div className="rotating-role"><AnimatePresence mode="wait"><motion.span key={role} initial={{ opacity: 0, filter: 'blur(4px)', y: 5 }} animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} exit={{ opacity: 0, filter: 'blur(4px)', y: -5 }} transition={{ duration: reducedMotion ? 0 : 0.3 }}>{roles[role]}</motion.span></AnimatePresence></div><p>Tirana, Albania</p></div>
      </section>
      <section className="about-section"><div className="section-heading"><h2>About</h2></div><ul className="about-copy"><li>I'm <strong>Anest</strong>, a product engineer from Tirana. At <strong>Bliss Therapy</strong>, I work across product engineering and partnerships, building therapist discovery and AI-powered experiences that help people find support in their own language and culture.</li><li>I'm also <strong>Technical Lead at Earth’s Own Heart</strong>, leading web development, technical infrastructure, and internal systems for a nonprofit organization.</li><li>I build and launch products like <strong>MEGAFONI and SANAMY</strong>, working with TypeScript, React, Next.js, PostgreSQL, Supabase, and AI-assisted engineering. I care about making things clear, useful, and thoughtful to use.</li></ul></section>
      <section className="social-section"><div className="section-heading"><h2>Contact</h2></div><div className="social-grid">{socials.map(({ name, url, icon: Icon }) => <a key={name} href={url} target={name === 'Mail' ? undefined : '_blank'} rel="noreferrer" aria-label={name}><span className="social-icon">{Icon ? <Icon size={21} /> : <span className="x-icon">𝕏</span>}</span><span className="social-name">{name}</span><ArrowUpRight className="social-arrow" size={16} /></a>)}</div></section>
      <section className="home-projects"><div className="section-heading"><h2>Projects</h2><Link className="view-all" to="/projects">View all <ArrowUpRight size={16} /></Link></div><div className="projects-grid">{referenceProjects.slice(0, 4).map(project => <ReferenceProjectCard key={project.id} project={project} />)}</div></section>
      <TechStack />
      <GitHubActivity />
      <Highlights />
      <section className="talk-section"><div className="section-heading"><h2>Scrolled Too Far</h2></div><div className="talk-content"><p>If you've read this far, you might be interested in what I do.</p><Link className="pill-button" to="/contact">Let’s Talk <ArrowRight size={18} /></Link></div></section>
    </div>
  );
}
