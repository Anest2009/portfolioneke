import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
}

const TechBlog = () => {
  usePageTitle('Tech Insights');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 'why-react-typescript',
      title: 'Why React + TypeScript is My Go-To Stack',
      subtitle: 'How type safety transformed my development workflow',
      date: 'September 2025',
      readTime: '5 min read',
      category: 'Frontend',
      content: {
        intro: "After building multiple production apps, React with TypeScript has become my default choice. Here's why this combination is unbeatable for serious web development.",
        sections: [
          {
            heading: 'The Type Safety Game Changer',
            paragraphs: [
              "I used to write plain JavaScript React apps. Sure, they worked, but every refactor was a nightmare. Moving a prop? Breaking 5 components I didn't know existed. Renaming a function? Good luck finding all the references.",
              "TypeScript changed everything. Now my editor tells me exactly what's broken before I even run the code. Refactoring went from scary to satisfying. IntelliSense knows what props my components need. Auto-completion actually works."
            ]
          },
          {
            heading: 'Real Impact on My Projects',
            paragraphs: [
              "When building TIMORA.AL, TypeScript caught hundreds of potential bugs. User authentication? The types ensured I never passed undefined user data. API responses? I knew exactly what shape the data would be.",
              "Runtime errors dropped by 60%. Not exaggerating. The compiler became my pair programmer, catching mistakes before they reached production."
            ]
          },
          {
            heading: 'The Learning Curve Truth',
            paragraphs: [
              "Yeah, TypeScript has a learning curve. Generics, utility types, advanced patterns - it's real. But here's the thing: you don't need to master everything day one.",
              "Start with basic type annotations. Let your editor guide you. The ecosystem has gotten so good that most types are inferred automatically. Within a month, you'll wonder how you ever lived without it."
            ]
          }
        ],
        conclusion: "React gives you the component model. TypeScript gives you confidence. Together, they're the foundation of every serious project I build. If you're still writing JavaScript React in 2025, you're leaving productivity on the table."
      },
      tags: ['React', 'TypeScript', 'Frontend', 'Web Development']
    },
    {
      id: 'next-js-14-revolution',
      title: 'Next.js 14: Why I Switched from Create React App',
      subtitle: 'Server Components and App Router changed everything',
      date: 'August 2025',
      readTime: '6 min read',
      category: 'Frontend',
      content: {
        intro: "Create React App served me well, but Next.js 14 with App Router and Server Components is the future. Here's why I'm never going back.",
        sections: [
          {
            heading: 'The Performance Difference is Real',
            paragraphs: [
              "My Create React App projects were all client-side. Every API call happened in the browser. Every piece of data fetching meant loading spinners and skeleton screens.",
              "Next.js Server Components flip this. Data fetching happens on the server. Pages load with content already rendered. No loading states for initial data. The performance improvement is night and day."
            ]
          },
          {
            heading: 'SEO That Actually Works',
            paragraphs: [
              "Client-side React apps? Google sees an empty div. Sure, you can use react-helmet and hope for the best, but it's hacky.",
              "Next.js gives you proper SSR and SSG out of the box. Meta tags work. Social media previews work. SEO works. TIMORA.AL ranks immediately because search engines see actual content."
            ]
          },
          {
            heading: 'Developer Experience Is Unmatched',
            paragraphs: [
              "File-based routing means no more react-router configuration. API routes live right in your app. Image optimization is automatic. TypeScript works perfectly.",
              "The App Router with Server and Client Components took a week to understand, but now it's intuitive. Colocation of components, data fetching, and styling feels natural."
            ]
          }
        ],
        conclusion: "Next.js 14 isn't just a framework upgrade - it's a paradigm shift. Server Components, streaming, and App Router make React development feel modern again. Every new project starts with Next.js now."
      },
      tags: ['Next.js', 'React', 'SSR', 'Performance']
    },
    {
      id: 'supabase-firebase-alternative',
      title: 'Supabase: The Firebase Alternative I Actually Enjoy Using',
      subtitle: 'PostgreSQL, real-time subscriptions, and no vendor lock-in',
      date: 'July 2025',
      readTime: '7 min read',
      category: 'Backend',
      content: {
        intro: "I used Firebase for years. It's great until it isn't. Supabase gave me everything Firebase promised, plus the power of PostgreSQL and actual SQL. Here's why I made the switch.",
        sections: [
          {
            heading: 'PostgreSQL > NoSQL for My Use Cases',
            paragraphs: [
              "Firebase's NoSQL structure works until you need complex queries. Joining data? Denormalize everything and hope. Transactions? Limited. Aggregations? Write Cloud Functions.",
              "Supabase gives you PostgreSQL. Real joins. Real transactions. Real constraints. Foreign keys that actually enforce relationships. When TIMORA.AL needed booking availability logic with time conflicts, PostgreSQL made it trivial."
            ]
          },
          {
            heading: 'Authentication That Makes Sense',
            paragraphs: [
              "Supabase Auth is Firebase Auth but better. Email, OAuth, magic links - all there. But here's the key: users are just rows in a PostgreSQL table.",
              "Want to add custom user fields? Just add columns. Need to join user data with other tables? Use SQL. No more parallel Firestore collections trying to stay in sync."
            ]
          },
          {
            heading: 'Real-Time Without the Complexity',
            paragraphs: [
              "Firebase real-time is magic until you need fine-grained control. Supabase real-time subscriptions use PostgreSQL's built-in LISTEN/NOTIFY.",
              "Subscribe to specific rows, specific columns, or entire tables. The flexibility is insane. Nano Chat uses this for instant message delivery - works flawlessly."
            ]
          },
          {
            heading: 'Open Source and Self-Hostable',
            paragraphs: [
              "Firebase locks you in. Supabase is open source. Don't like their pricing? Self-host it. Need custom logic? Fork and modify.",
              "I sleep better knowing my stack isn't at the mercy of Google's product graveyard."
            ]
          }
        ],
        conclusion: "Supabase isn't perfect, but it's the first BaaS that feels like it was built by developers who actually build real apps. PostgreSQL + Auth + Real-time + Storage in one package. Every project uses it now."
      },
      tags: ['Supabase', 'PostgreSQL', 'Backend', 'Database']
    },
    {
      id: 'tailwind-css-productivity',
      title: 'How Tailwind CSS Made Me 3x Faster',
      subtitle: 'Utility-first CSS stopped being controversial and started being productive',
      date: 'June 2025',
      readTime: '4 min read',
      category: 'CSS',
      content: {
        intro: "I resisted Tailwind for months. 'Utility classes are ugly!' I said. Then I actually tried it on a real project. I was wrong. Here's what changed my mind.",
        sections: [
          {
            heading: 'No More Context Switching',
            paragraphs: [
              "Traditional CSS: Write HTML, switch to CSS file, name a class (what do I call this nav item?), write styles, switch back to HTML, add the class, realize it doesn't work, switch back...",
              "Tailwind: Write HTML. Add classes. Done. No naming. No file switching. No specificity wars. The speed increase is real."
            ]
          },
          {
            heading: 'Consistency by Default',
            paragraphs: [
              "Before Tailwind, every project had slightly different spacing, colors, and sizing. 16px here, 18px there, #3B82F6 in one place, #3B83F6 somewhere else.",
              "Tailwind's design system forces consistency. spacing-4 is always spacing-4. blue-500 is always blue-500. My designs look more cohesive without trying."
            ]
          },
          {
            heading: 'Responsive Design Is Trivial',
            paragraphs: [
              "Media queries used to be a pain. Tailwind's responsive prefixes make it instant. md:flex lg:grid - done. No CSS file, no breakpoint management, just works."
            ]
          }
        ],
        conclusion: "Tailwind isn't for everyone, but for rapid UI development with consistent design, nothing comes close. The productivity boost is real. Every project uses it."
      },
      tags: ['Tailwind CSS', 'CSS', 'Frontend', 'Productivity']
    },
    {
      id: 'vercel-deployment',
      title: 'Why Vercel Deployment Ruined Other Platforms for Me',
      subtitle: 'Git push to production in 30 seconds',
      date: 'April 2025',
      readTime: '3 min read',
      category: 'DevOps',
      content: {
        intro: "I've deployed to AWS, DigitalOcean, Netlify, and Heroku. Vercel made all of them feel ancient. Here's why deployment shouldn't be harder than coding.",
        sections: [
          {
            heading: 'Zero Configuration Deployment',
            paragraphs: [
              "Connect GitHub repo. Vercel detects Next.js automatically. Deploy. That's it. No Docker files, no build scripts, no server configuration.",
              "Every push deploys. Every PR gets a preview URL. Team members can see changes before merge. This workflow is what CI/CD should always be."
            ]
          },
          {
            heading: 'Edge Functions That Actually Work',
            paragraphs: [
              "Need serverless functions? Create an API route in Next.js. Vercel deploys it as an edge function globally. No AWS Lambda configuration, no cold starts to worry about.",
              "TIMORA.AL's booking API runs on Vercel Edge Functions. Response times from Albania to USA? Under 100ms."
            ]
          },
          {
            heading: 'The DX Is Unmatched',
            paragraphs: [
              "Real-time logs. One-click rollbacks. Automatic HTTPS. Custom domains in 60 seconds. Analytics built-in.",
              "Deployment went from 'that thing I dread' to 'git push and forget'. That's how it should be."
            ]
          }
        ],
        conclusion: "Vercel isn't perfect for every use case, but for Next.js apps? Nothing else comes close. Deploy fast, iterate faster, focus on code not infrastructure."
      },
      tags: ['Vercel', 'Deployment', 'DevOps', 'Next.js']
    }
  ];

  const categories = ['all', 'Frontend', 'Backend', 'CSS', 'DevOps'];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const selectedPostData = blogPosts.find(post => post.id === selectedPost);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {!selectedPost ? (
        <>
          <motion.div
            className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-3 text-black dark:text-white">
              Tech Insights
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real experiences from building real projects. No fluff, just honest takes on the technologies I use every day.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat === 'all' ? 'All Posts' : cat}
              </button>
            ))}
          </motion.div>

          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold mt-1 mb-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {post.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </>
      ) : (
                    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
            Back to all posts
          </button>

          {selectedPostData && (
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  {selectedPostData.category}
                </span>
                <h1 className="text-4xl font-bold mt-2 mb-3 text-black dark:text-white">
                  {selectedPostData.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  {selectedPostData.subtitle}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 pb-6 border-b border-gray-200 dark:border-gray-800">
                  <span>📅 {selectedPostData.date}</span>
                  <span>⏱️ {selectedPostData.readTime}</span>
                </div>
                  </div>

              <div className="space-y-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedPostData.content.intro}
                </p>

                {selectedPostData.content.sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {selectedPostData.content.conclusion}
                  </p>
                </div>
                    </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                {selectedPostData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                        </div>
            </article>
          )}
                      </motion.div>
                    )}
    </div>
  );
};

export default TechBlog;
