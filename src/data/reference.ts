import { projects, experiences } from './portfolio';

export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  proof: string;
  tags: readonly string[];
  url: string | null;
  github?: string;
  image?: string;
  status: string;
};

export const referenceProjects: PortfolioProject[] = [
  ...projects.map((project, index) => ({
    id: ['megafoni', 'sanamy', 'energy'][index],
    title: project.title,
    subtitle: project.role,
    description: project.description,
    proof: project.proof,
    tags: project.tags,
    url: project.url,
    status: index === 0 ? 'Live' : 'Prototype',
  })),
  {
    id: 'kohela', title: 'Kohela', subtitle: 'Freelance Full-Stack Developer',
    description: experiences.find(item => item.company === 'Kohela')!.summary,
    proof: 'Built end-to-end · PostgreSQL & Supabase', tags: ['React', 'PostgreSQL', 'Supabase'],
    url: 'https://kohela.com', status: 'Client work',
  },
  {
    id: 'artcoffe', title: 'ArtCoffe', subtitle: 'Multi-role order tracking system',
    description: 'Order tracking system with separate dashboards for admins, staff, and clients. Real-time order management and role-based access control for restaurant operations.',
    proof: 'Admin, staff, and customer dashboards', tags: ['React', 'Node.js', 'PostgreSQL'],
    url: null, github: 'https://github.com/Anest2009/artcoffejunction', image: '/portfolio/artcoffe.png', status: 'Project',
  },
  {
    id: 'nanochat', title: 'Nano Chat', subtitle: 'Private E2EE chat app',
    description: 'An end-to-end encrypted chat application exploring secure messaging with React, Node.js, Socket.IO, and Libsodium.',
    proof: 'In development', tags: ['React', 'Node.js', 'Socket.IO', 'Libsodium'],
    url: null, image: '/portfolio/nanochat.png', status: 'In development',
  },
];

export const technologies = [
  { name: 'JavaScript', category: 'Frontend', icon: 0, color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', category: 'Frontend', icon: 1, color: '#3178c6', url: 'https://typescriptlang.org/' },
  { name: 'React', category: 'Frontend', icon: 2, color: '#61dafb', url: 'https://react.dev/' },
  { name: 'Next.js', category: 'Frontend', icon: 3, color: 'var(--foreground)', url: 'https://nextjs.org/' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 4, color: '#38bdf8', url: 'https://tailwindcss.com/' },
  { name: 'Node.js', category: 'Backend', icon: 6, color: '#339933', url: 'https://nodejs.org/' },
  { name: 'PostgreSQL', category: 'Backend', icon: 9, color: '#4169e1', url: 'https://postgresql.org/' },
  { name: 'Python', category: 'Backend', icon: null, color: '#ffd43b', url: 'https://python.org/' },
  { name: 'SQL', category: 'Backend', icon: null, color: '#4169e1', url: 'https://www.postgresql.org/docs/current/sql.html' },
  { name: 'Supabase', category: 'Backend', icon: null, color: '#3ecf8e', url: 'https://supabase.com/' },
  { name: 'Git', category: 'Tools', icon: 13, color: '#f05032', url: 'https://git-scm.com/' },
  { name: 'GitHub', category: 'Tools', icon: 14, color: 'var(--foreground)', url: 'https://github.com/Anest2009' },
  { name: 'Vercel', category: 'Tools', icon: 15, color: 'var(--foreground)', url: 'https://vercel.com/' },
  { name: 'Linux', category: 'Tools', icon: null, color: '#f7df1e', url: 'https://kernel.org/' },
  { name: 'n8n', category: 'AI & delivery', icon: null, color: '#ff6d5a', url: 'https://n8n.io/' },
  { name: 'Model Context Protocol', category: 'AI & delivery', icon: null, color: 'var(--foreground)', url: 'https://modelcontextprotocol.io/' },
  { name: 'xAI API', category: 'AI & delivery', icon: null, color: 'var(--foreground)', url: 'https://docs.x.ai/' },
];
