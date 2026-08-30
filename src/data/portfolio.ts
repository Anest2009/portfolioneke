export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Current' | 'Independent' | 'Freelance' | 'Internship' | 'Experience';
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Bliss Therapy',
    role: 'Software Engineer · Frontend-focused',
    period: 'Jun 2026 — Present',
    location: 'Tirana, Albania',
    type: 'Current',
    summary: 'Shipping product experiences across AI Twin chat, voice-agent, and multilingual flows.',
    highlights: [
      'Build responsive React, TypeScript, and Tailwind CSS features while contributing backend changes and API integrations.',
      'Create n8n automations for voice-cloning deployment, troubleshoot production issues, and support releases.',
    ],
  },
  {
    company: 'Kohela',
    role: 'Freelance Full-Stack Developer',
    period: 'Jan 2025 — Present',
    location: 'Tirana, Albania',
    type: 'Freelance',
    summary: 'Designed and built a multi-tenant booking platform end-to-end for a client serving 20+ beauty businesses.',
    highlights: [
      'Owned the complete delivery—from product structure and interface design through the PostgreSQL and Supabase architecture, implementation, and deployment.',
      'Built authenticated customer and admin flows, resolved production defects, and improved weekly merchant onboarding.',
    ],
  },
  {
    company: 'SYNK',
    role: 'Technical Design Intern',
    period: 'May — Jun 2026',
    location: 'Tirana, Albania',
    type: 'Internship',
    summary: 'Optimized low-poly 3D avatars for browser-based spatial experiences.',
    highlights: [
      'Used flat shading and reduced vertex counts to meet three.js performance constraints.',
    ],
  },
  {
    company: 'Illyro Agency',
    role: 'AI Engineer',
    period: 'Feb — May 2025',
    location: 'Tirana, Albania',
    type: 'Experience',
    summary: 'Built and monitored generative-AI workflows for fashion photography.',
    highlights: [
      'Reduced production turnaround from three days to four hours through automated generation and review steps.',
      'Added cloud monitoring and real-time alerts while translating campaign briefs into technical requirements.',
    ],
  },
  {
    company: 'WEBXPRESSAL',
    role: 'Web Developer · Independent developer',
    period: 'Feb 2022 — May 2024',
    location: 'Tirana, Albania',
    type: 'Independent',
    summary: 'Owned client websites from design handoff through deployment and support.',
    highlights: [
      'Built and deployed 12 websites serving 500+ users with React, Next.js, Supabase, and REST APIs.',
      'Introduced release checklists, cross-browser testing, and structured diagnosis for hosting and network failures.',
    ],
  },
];

export const projects = [
  {
    title: 'Megafoni Tirana',
    role: 'Co-founder & Engineer',
    period: 'Jun 2026',
    description: 'A civic-reporting platform that turns public issues into traceable, source-backed cases instead of forgotten complaints.',
    proof: 'Built in 48 hours · Top 10 of 30 at VibeHack 2026',
    tags: ['Civic tech', 'AI automation', 'Rapid product delivery'],
    url: 'https://megafoni.al',
    tone: 'coral',
  },
  {
    title: 'SANAMY',
    role: 'Sole Developer',
    period: 'May 2026',
    description: 'An AI-assisted decision-support product that compares trade-offs and turns complicated choices into practical next steps.',
    proof: 'Prototype launched May 2026',
    tags: ['xAI API', 'Grok', 'Decision support', 'Responsive web'],
    url: 'https://www.sanamy.co/',
    tone: 'lavender',
  },
  {
    title: 'Energy Demand Forecasting',
    role: 'Engineer',
    period: 'Nov 2025',
    description: 'A Python prototype combining energy-demand forecasts with purchasing-strategy recommendations.',
    proof: 'Built during a 48-hour Junction Europe sprint',
    tags: ['Python', 'Machine learning', 'Forecasting'],
    url: null,
    tone: 'yellow',
  },
] as const;

export const certifications = [
  { name: 'Peer Counselor Against Human Trafficking', issuer: 'UNICEF', date: 'Aug 2026' },
  { name: 'Content Marketing Certified', issuer: 'HubSpot Academy', date: 'Jul 2026' },
  { name: 'Practical GitHub Actions', issuer: 'LinkedIn Learning', date: 'Apr 2026' },
  { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic Courses', date: 'Apr 2026' },
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic Courses', date: 'Apr 2026' },
  { name: 'Claude 101', issuer: 'Anthropic Courses', date: 'Apr 2026' },
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'Jan 2026' },
  { name: "CS50's Introduction to Computer Science", issuer: 'HarvardX', date: '2024' },
] as const;

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Product engineering',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Responsive UI', 'Cross-browser testing'],
  },
  {
    label: 'Data & platforms',
    skills: ['PostgreSQL', 'Supabase', 'Multi-tenant data modeling', 'Vercel', 'Linux'],
  },
  {
    label: 'AI & delivery',
    skills: ['xAI API', 'Generative-AI workflows', 'n8n', 'Git', 'Debugging', 'Release validation'],
  },
] as const;
