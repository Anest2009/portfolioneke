import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Code2 } from 'lucide-react';
import { technologies } from '../data/reference';

export default function TechStack() {
  const [category, setCategory] = useState('All');
  const audio = useRef<AudioContext | null>(null);
  useEffect(() => () => { void audio.current?.close(); }, []);

  function playNote(index: number) {
    try {
      const context = audio.current ??= new AudioContext();
      void context.resume().catch(() => {});
      if (context.state !== 'running') return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 261.63 * 2 ** ([0, 2, 4, 7, 9, 12, 14][index % 7] / 12);
      gain.gain.setValueAtTime(0, context.currentTime);
      gain.gain.linearRampToValueAtTime(0.035, context.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.65);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.7);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    } catch {
      // Keep the links and filters usable if audio is unavailable.
    }
  }

  return <section className="tech-section"><div className="section-heading"><div className="tech-title"><h2>Tech Stack</h2><span className="desktop-hint">( hover to play )</span><span className="mobile-hint">( click to play )</span></div><div className="stack-filters" aria-label="Filter technologies">{['All', 'Frontend', 'Backend', 'Tools', 'AI & delivery'].map(filter => <button key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}</button>)}</div></div><div className="tech-list">{technologies.map((tech, index) => (category === 'All' || category === tech.category) && <a key={tech.name} className="tech-chip" href={tech.url} target="_blank" rel="noreferrer" style={{ '--tech-color': tech.color } as CSSProperties} onPointerEnter={event => { if (event.pointerType === 'mouse') playNote(index); }} onClick={event => { if (window.matchMedia('(pointer: coarse)').matches) event.preventDefault(); playNote(index); }}>{tech.icon === null ? <Code2 size={14} /> : <svg width="14" height="14" aria-hidden="true"><use href={`/reference/tech-icons.svg#tech-${tech.icon}`} /></svg>}{tech.name}</a>)}</div></section>;
}
