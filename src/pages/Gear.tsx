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
      id: 'architecting-autonomous-ai-agents',
      title: 'Architecting Autonomous AI Agents with MCP and LangChain',
      subtitle: 'Bypassing context limits and securely integrating Gemini APIs for production agents',
      date: 'June 2026',
      readTime: '8 min read',
      category: 'AI ENGINEERING',
      content: {
        intro: "Building toy AI wrappers is easy. Architecting autonomous agents that can securely interact with local environments and external APIs without leaking context is a distributed systems challenge. Here is how I engineered a production-ready agent harness using the Model Context Protocol (MCP).",
        sections: [
          {
            heading: 'Overcoming the Machine ID Hurdle',
            paragraphs: [
              "When deploying agents at scale, static machine IDs become a bottleneck for security and API rate limiting. I implemented a dynamic fingerprinting bypass that rotates hardware profiles per session, ensuring uninterrupted API access to Gemini and Claude models without triggering anti-bot mechanisms."
            ]
          },
          {
            heading: 'The Model Context Protocol (MCP) Integration',
            paragraphs: [
              "Traditional LangChain setups struggle with state management across disparate tools. By implementing an MCP server, I decoupled the LLM reasoning loop from the execution environment. The agent now dynamically discovers tools at runtime, reducing prompt bloat by 40% and significantly improving token efficiency."
            ]
          },
          {
            heading: 'Stateful LangChain Harnesses in Production',
            paragraphs: [
              "I built a custom LangChain harness that persists agent state to a PostgreSQL database. This allows for asynchronous, long-running agent tasks. We reduced perceived latency by offloading heavy tool execution to background workers, dropping the median response time from 15s to under 2s for complex multi-step reasoning."
            ]
          }
        ],
        conclusion: "Scaling AI isn't about better prompts; it's about robust system architecture. By leveraging MCP and custom LangChain harnesses, we transformed brittle scripts into resilient, autonomous systems capable of executing complex workflows reliably."
      },
      tags: ['AI Agents', 'MCP', 'LangChain', 'Python']
    },
    {
      id: 'real-time-b2b-saas-dashboard',
      title: 'Building a Real-Time B2B SaaS Dashboard with Next.js and Supabase',
      subtitle: 'Handling 10k+ concurrent connections with PostgreSQL real-time subscriptions and Server Components',
      date: 'May 2026',
      readTime: '10 min read',
      category: 'SYSTEMS DESIGN',
      content: {
        intro: "B2B dashboards live and die by their data freshness and performance. Polling a database every 5 seconds is an anti-pattern. Here is a technical deep-dive into how I engineered a real-time analytics dashboard using Next.js App Router and Supabase, scaling to handle massive concurrent event streams.",
        sections: [
          {
            heading: 'Streaming Architectures with React Server Components',
            paragraphs: [
              "Instead of blocking the initial render with massive payload queries, I utilized Next.js Server Components and React Suspense. We stream the critical UI instantly and progressively load the heavy analytical aggregations. This reduced our First Contentful Paint (FCP) by 75%, vastly improving the perceived performance."
            ]
          },
          {
            heading: 'PostgreSQL Real-Time Subscriptions at Scale',
            paragraphs: [
              "We bypassed traditional WebSocket servers by connecting directly to PostgreSQL's WAL (Write-Ahead Log) via Supabase real-time. By filtering changes at the database level using Row Level Security (RLS) policies, we ensure that clients only receive the delta payloads they are authorized to see, drastically cutting down network bandwidth."
            ]
          },
          {
            heading: 'Optimizing the Database for Time-Series Data',
            paragraphs: [
              "Real-time updates are useless if the underlying queries are slow. I implemented materialized views and continuous aggregations in PostgreSQL. This meant the dashboard wasn't calculating metrics on the fly from millions of raw event rows, resulting in query times dropping from 800ms to a consistent 15ms."
            ]
          }
        ],
        conclusion: "Building real-time dashboards requires a full-stack optimization strategy. By pushing the heavy lifting to the database layer and utilizing React's streaming capabilities, we delivered a B2B product that feels instantaneous under heavy load."
      },
      tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Architecture']
    },
    {
      id: 'securing-multi-tenant-architecture-rls',
      title: 'Securing Multi-Tenant Architecture with PostgreSQL Row Level Security',
      subtitle: 'A zero-trust approach to data isolation in SaaS applications',
      date: 'April 2026',
      readTime: '7 min read',
      category: 'FULL-STACK',
      content: {
        intro: "Data leakage in a multi-tenant B2B SaaS is a catastrophic failure. Application-level filtering is prone to human error. Here is a post-mortem of how I ripped out fragile application logic and implemented a bulletproof zero-trust architecture using PostgreSQL Row Level Security (RLS).",
        sections: [
          {
            heading: 'The Flaw of Application-Level Isolation',
            paragraphs: [
              "Relying on ORMs or API endpoints to append tenant filters is a ticking time bomb. One missed where clause in a complex join, and Tenant A sees Tenant B's financial data. I audited our previous codebase and found multiple edge cases where implicit joins bypassed these superficial checks."
            ]
          },
          {
            heading: 'Implementing Database-Level Zero Trust',
            paragraphs: [
              "I moved the security perimeter to the database itself using PostgreSQL RLS. By injecting the authenticated user's JWT directly into the database transaction context, we established policies that physically prevent unauthorized row access at the lowest level. Even if a developer writes a broad SELECT query, the database only returns the authorized subset."
            ]
          },
          {
            heading: 'Performance Impact and Policy Optimization',
            paragraphs: [
              "Initial RLS implementation caused a 30% performance degradation due to subqueries in policies. I engineered a solution using PostgreSQL session variables and indexed structural tables, bypassing the expensive EXISTS checks. We achieved true data isolation with zero measurable impact on query latency."
            ]
          }
        ],
        conclusion: "Security should never be an afterthought or an application-layer patch. By leveraging the advanced features of PostgreSQL, we mathematically guaranteed tenant isolation, satisfying stringent enterprise compliance requirements."
      },
      tags: ['PostgreSQL', 'Security', 'SaaS', 'Supabase']
    },
    {
      id: 'advanced-state-management-nextjs',
      title: 'Advanced State Management in Next.js App Router',
      subtitle: 'Bridging the gap between Server Components and complex client interactivity',
      date: 'March 2026',
      readTime: '6 min read',
      category: 'FRONTEND',
      content: {
        intro: "Next.js App Router fundamentally changed how we build React applications. But managing complex, highly interactive state across Server and Client Components introduces new architectural challenges. Here is how I designed a hybrid state management system for a data-intensive web application.",
        sections: [
          {
            heading: 'The Server-Client Boundary Dilemma',
            paragraphs: [
              "Passing large JSON blobs via props from Server Components to Client Components bloats the HTML payload and defeats the purpose of SSR. I engineered a pattern using React Context and initial state hydration that allows Server Components to pass only the minimal necessary identifiers, while Client Components independently manage their volatile interactive state."
            ]
          },
          {
            heading: 'Type-Safe Data Mutations with Server Actions',
            paragraphs: [
              "Traditional API routes require duplicated type definitions and manual cache invalidation. I transitioned our mutation layer to Next.js Server Actions, utilizing Zod for strict runtime validation. This created an end-to-end type-safe bridge between the client UI and the database, eliminating an entire class of serialization errors."
            ]
          },
          {
            heading: 'Optimistic UI for Zero-Latency Interactions',
            paragraphs: [
              "To mask the network latency of complex backend AI generations, I implemented the useOptimistic hook combined with a custom queueing system. The UI responds instantaneously to user input, gracefully handling and reverting state in the rare event of a server failure or API timeout."
            ]
          }
        ],
        conclusion: "Mastering the App Router requires a deep understanding of what belongs on the server and what belongs on the client. By strictly enforcing this boundary and leveraging optimistic updates, we built an application that is both SEO-perfect and highly interactive."
      },
      tags: ['Next.js', 'React', 'TypeScript', 'State Management']
    },
    {
      id: 'tailwind-css-enterprise-scale',
      title: 'Tailwind CSS at Enterprise Scale',
      subtitle: 'Engineering a maintainable design system without the utility class chaos',
      date: 'February 2026',
      readTime: '5 min read',
      category: 'FRONTEND',
      content: {
        intro: "Utility classes are incredibly fast for prototyping, but in a large-scale enterprise codebase, long strings of Tailwind classes become an unreadable maintenance nightmare. Here is how I architected a scalable, type-safe design system over Tailwind CSS for a complex web platform.",
        sections: [
          {
            heading: 'Taming the Class String Monster',
            paragraphs: [
              "Components with 30+ utility classes inline lead to merge conflicts and visual regressions. I implemented cva (Class Variance Authority) combined with tailwind-merge and clsx. This allowed us to define strictly typed component APIs with variants, automatically handling specificity conflicts without writing custom CSS."
            ]
          },
          {
            heading: 'Dynamic Theming with CSS Variables',
            paragraphs: [
              "Hardcoding Tailwind color classes breaks down when supporting multiple enterprise brands and dark mode. I engineered a semantic token system using CSS variables mapped to the tailwind config. We can now swap entire brand themes at runtime by updating a single CSS class on the root element, with zero JavaScript overhead."
            ]
          },
          {
            heading: 'Performance and the JIT Compiler',
            paragraphs: [
              "By standardizing our design tokens and strictly analyzing the JIT compiler output, we reduced our final CSS bundle size by 45%. We eliminated arbitrary values in favor of defined theme extensions, ensuring design consistency and optimal browser rendering performance."
            ]
          }
        ],
        conclusion: "Tailwind CSS isn't just about utility classes; it's a compiler for your design system. By adding strict typing and semantic tokens, we achieved the speed of utility-first CSS with the maintainability of a mature component library."
      },
      tags: ['Tailwind CSS', 'Design Systems', 'Architecture', 'Frontend']
    }
  ];

  const categories = ['all', 'AI ENGINEERING', 'SYSTEMS DESIGN', 'FULL-STACK', 'FRONTEND'];

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
