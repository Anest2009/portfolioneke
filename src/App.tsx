import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ScrollToTop from './utils/ScrollToTop';

function Portfolio() {
  const { pathname } = useLocation();
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/experience" replace />} />
          <Route path="/gear" element={<Navigate to="/projects" replace />} />
          <Route path="/gear/:insightId" element={<Navigate to="/projects" replace />} />
          <Route path="/project/:projectId" element={<Navigate to="/projects" replace />} />
          <Route path="*" element={<div className="not-found"><h1>Page not found</h1><Link to="/">Back home →</Link></div>} />
        </Routes>
      </main>
      {pathname !== '/contact' && <Footer />}
      <ScrollToTop />
    </div>
  );
}
export default function App() {
  return <ThemeProvider><Portfolio /></ThemeProvider>;
}
