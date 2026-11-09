import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: '/experience', label: 'Experience' }];

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="wordmark" to="/" aria-label="Anest home">Anest</Link>
        <div className="nav-actions" ref={menu}>
          <div className="desktop-nav">{links.map(link => <NavLink key={link.to} to={link.to} end>{link.label}</NavLink>)}</div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          {open && <div className="mobile-nav" id="mobile-navigation">{links.map(link => <NavLink key={link.to} to={link.to} end>{link.label}</NavLink>)}</div>}
        </div>
      </nav>
    </header>
  );
}
