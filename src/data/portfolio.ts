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
    role: 'Product & Partnerships · Full-time',
    period: 'Jul 2026 — Present',
    location: 'Tirana, Albania · Remote',
    type: 'Current',
    summary: 'Build and ship therapist discovery and AI-powered therapist experiences at a mental-health technology startup.',
    highlights: [
      'Build responsive React, TypeScript, and Tailwind CSS features while contributing backend changes and API integrations.',
      'Create n8n automations for voice-cloning deployment, troubleshoot production issues, and support releases.',
      'Support strategic partnerships, B2B initiatives, and go-to-market projects alongside product engineering.',
    ],
  },
  {
    company: "Earth's Own Heart",
    role: 'Technical Lead · Part-time',
    period: 'Jul 2026 — Present',
    location: 'Tirana, Albania · Remote',
    type: 'Current',
    summary: 'Lead web development for a nonprofit organization.',
    highlights: [
      'Own technical infrastructure and internal systems to support the organization’s work.',
    ],
  },
  {
    company: 'SYNK',
    role: 'Technical Design Intern',
    period: 'May — Jun 2026',
    location: 'Tirana, Albania · Remote',
    type: 'Internship',
    summary: 'Optimized low-poly 3D avatars for browser-based spatial experiences.',
    highlights: [
      'Used flat shading and reduced vertex counts to meet three.js performance constraints.',
    ],
  },
  {
    company: 'Black Bear Solutions AL',
    role: 'Full-Stack Developer · Full-time',
    period: 'Jan — Jun 2026',
    location: 'Tirana, Albania · Remote',
    type: 'Experience',
    summary: 'Built and shipped 12 production web applications for 20+ clients.',
    highlights: [
      'Delivered full-stack development, performance improvements, and technical SEO across client projects.',
    ],
  },
  {
    company: 'Illyro',
    role: 'Lead Full-Stack Developer · Full-time',
    period: 'Oct — Dec 2025',
    location: 'Albania · Remote',
    type: 'Experience',
    summary: 'Built and launched an AI-powered visual production platform serving 20 clients and generating €5K in its first 90 days.',
    highlights: [
      'Reduced production turnaround from three days to four hours through automated generation and review steps.',
      'Added cloud monitoring and real-time alerts while translating campaign briefs into technical requirements.',
    ],
  },
  {
    company: 'Kohela',
    role: 'Freelance Full-Stack Developer',
    period: 'Started Jan 2025',
    location: 'Tirana, Albania',
    type: 'Freelance',
    summary: 'Designed and built a multi-tenant booking platform end-to-end for a client serving 20+ beauty businesses.',
    highlights: [
      'Owned the complete delivery—from product structure and interface design through the PostgreSQL and Supabase architecture, implementation, and deployment.',
      'Built authenticated customer and admin flows, resolved production defects, and improved weekly merchant onboarding.',
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
    description: 'A live civic-reporting platform where citizens submit public issues with photos and locations. Reports are reviewed, routed to the responsible institution, and tracked in a public case file.',
    proof: 'Live at megafoni.al · Started at VibeHack 2026, Top 10 of 30',
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
  { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: 'Apr 2026' },
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', date: 'Apr 2026' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'Apr 2026' },
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'Jan 2026' },
  { name: "CS50x: Introduction to Computer Science", issuer: 'Harvard University', date: 'Feb 2024' },
] as const;

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Product engineering',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Responsive UI', 'Cross-browser testing', 'Technical SEO'],
  },
  {
    label: 'Data & platforms',
    skills: ['PostgreSQL', 'Supabase', 'Multi-tenant data modeling', 'Vercel', 'Linux'],
  },
  {
    label: 'AI & delivery',
    skills: ['xAI API', 'AI agent orchestration', 'Model Context Protocol', 'Generative-AI workflows', 'n8n', 'Git', 'Debugging', 'Release validation'],
  },
  {
    label: 'Product & partnerships',
    skills: ['Product management', 'Strategic partnerships', 'B2B initiatives', 'Go-to-market', 'Technical leadership'],
  },
] as const;
