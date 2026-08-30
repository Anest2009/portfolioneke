export type InsightCategory =
  | 'AI + agents'
  | 'Web platform'
  | 'Toolchain'
  | 'Systems'
  | 'Research';

export type InsightStatus = 'Watching' | 'Reading' | 'Testing next';

export interface TechInsight {
  id: string;
  title: string;
  summary: string;
  published: string;
  category: InsightCategory;
  status: InsightStatus;
  note: string;
  experiment: string;
  topics: string[];
  sourceLabel: string;
  sourceUrl: string;
}

export const insightCategories = [
  'All',
  'AI + agents',
  'Web platform',
  'Toolchain',
  'Systems',
  'Research',
] as const;

export const insights: TechInsight[] = [
  {
    id: 'webmcp-browser-agents',
    title: 'WebMCP could make browser agents less guessy',
    summary:
      'Chrome is experimenting with a way for websites to expose structured actions to browser agents instead of making an agent infer every click from the DOM.',
    published: 'Aug 26, 2026',
    category: 'Web platform',
    status: 'Watching',
    note:
      'The useful part is not simply giving an agent more power. It is giving the product a clear contract for what the agent can do, what context it needs, and where the user must confirm an action. That could make agentic flows feel much more reliable while keeping permission and prompt-injection risks visible.',
    experiment:
      'Add a small booking tool to a sandbox page with an explicit confirmation step, then compare its completion rate with a DOM-only agent flow.',
    topics: ['Browser agents', 'Product UX', 'Security'],
    sourceLabel: 'Chrome for Developers',
    sourceUrl: 'https://developer.chrome.com/docs/ai/webmcp/build-tools',
  },
  {
    id: 'wasi-03-native-async',
    title: 'WASI 0.3 makes async compose across languages',
    summary:
      'Native async functions, streams, and futures now live in the WebAssembly Component Model, so readiness can move cleanly across component boundaries.',
    published: 'Updated Aug 11, 2026',
    category: 'Systems',
    status: 'Reading',
    note:
      'I like this as a systems-design lesson. Moving async into the shared ABI means JavaScript promises, Rust futures, and Python coroutines can meet at a better-defined boundary. The interesting question is how much complexity disappears from the components and moves into the runtime.',
    experiment:
      'Build a tiny streamed HTTP pipeline with one Rust component and one JavaScript component, then trace how cancellation and backpressure behave.',
    topics: ['WebAssembly', 'Async', 'Components'],
    sourceLabel: 'WASI.dev',
    sourceUrl: 'https://wasi.dev/releases/wasi-p3',
  },
  {
    id: 'mcp-stateless-core',
    title: 'MCP is growing into ordinary infrastructure',
    summary:
      'The July MCP specification replaces hidden protocol sessions with self-describing requests that can land on any server instance behind a normal load balancer.',
    published: 'Jul 28, 2026',
    category: 'AI + agents',
    status: 'Testing next',
    note:
      'This feels like the point where an AI protocol starts borrowing the boring, useful ideas that make web infrastructure dependable. Stateless requests, cacheable tool lists, header-based routing, and clearer authorization rules should make MCP servers easier to scale and reason about.',
    experiment:
      'Run one tiny tool server behind two local instances and test reconnects, retries, cache behavior, and explicit state handles under failure.',
    topics: ['MCP', 'Infrastructure', 'Reliability'],
    sourceLabel: 'Model Context Protocol',
    sourceUrl: 'https://blog.modelcontextprotocol.io/posts/2026-07-28/',
  },
  {
    id: 'typescript-7-native',
    title: 'TypeScript 7 rewrites the feedback loop',
    summary:
      'Microsoft moved the compiler and language service to Go and reports full-build speedups of roughly 8 to 12 times on large codebases.',
    published: 'Jul 8, 2026',
    category: 'Toolchain',
    status: 'Testing next',
    note:
      'Fast type checking changes more than CI time. It changes how often a developer is willing to ask the compiler for feedback. The trade-off is equally interesting because 7.0 does not yet expose a stable compiler API, so some framework and editor tooling still needs TypeScript 6.',
    experiment:
      'Run TypeScript 6 and 7 side by side on one of my real projects, record cold build and editor timings, and document every compatibility gap I hit.',
    topics: ['TypeScript', 'Compilers', 'Developer tools'],
    sourceLabel: 'TypeScript team',
    sourceUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/',
  },
  {
    id: 'node-26-temporal',
    title: 'Temporal finally gives JavaScript time a better shape',
    summary:
      'Node.js 26 enables Temporal by default, offering a more deliberate date-and-time API than the legacy Date object.',
    published: 'May 5, 2026',
    category: 'Web platform',
    status: 'Testing next',
    note:
      'Booking software makes date bugs impossible to ignore. Time zones, daylight-saving transitions, and human-friendly calendar rules are product problems as much as technical ones. Temporal looks clearer, but the migration cost and browser support still matter.',
    experiment:
      'Rebuild a timezone-heavy booking test fixture with Temporal and compare the API, DST edge cases, bundle impact, and fallback strategy.',
    topics: ['JavaScript', 'Temporal', 'Date and time'],
    sourceLabel: 'Node.js',
    sourceUrl: 'https://nodejs.org/en/blog/release/v26.0.0/',
  },
  {
    id: 'scaling-agent-systems',
    title: 'More agents can make the answer worse',
    summary:
      'A study across 260 agent configurations found large gains on decomposable work and steep losses on sequential planning when the architecture did not match the task.',
    published: 'Revised Apr 8, 2026',
    category: 'Research',
    status: 'Reading',
    note:
      'The takeaway is refreshingly unglamorous: coordination has a cost. Before adding a manager, specialist agents, or a debate loop, it is worth understanding whether the work can actually be split and how errors will be verified.',
    experiment:
      'Give the same small benchmark to a single agent and a manager-worker setup, then compare answer quality, token use, latency, and error propagation.',
    topics: ['Agent systems', 'Evaluation', 'Architecture'],
    sourceLabel: 'Original paper on arXiv',
    sourceUrl: 'https://arxiv.org/abs/2512.08296',
  },
  {
    id: 'python-314-free-threading',
    title: 'Free-threaded Python is becoming a real option',
    summary:
      'Python 3.14 officially supports the free-threaded build, while keeping it optional and documenting the remaining performance and extension trade-offs.',
    published: 'Oct 7, 2025',
    category: 'Systems',
    status: 'Watching',
    note:
      'Removing the GIL is not an automatic speed button. The useful question is where normal threads genuinely simplify a workload and where synchronization, extension compatibility, or single-thread overhead make the traditional build the better choice.',
    experiment:
      'Benchmark a concurrent image-processing queue on both builds and measure throughput, memory, extension support, and how much synchronization code the workload really needs.',
    topics: ['Python', 'Concurrency', 'Runtime'],
    sourceLabel: 'Python 3.14 documentation',
    sourceUrl: 'https://docs.python.org/3/whatsnew/3.14.html',
  },
];
