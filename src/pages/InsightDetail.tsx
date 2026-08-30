import { ArrowLeft, ArrowUpRight, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { insights } from '../data/insights';
import { usePageTitle } from '../hooks/usePageTitle';

const InsightDetail = () => {
  const { insightId } = useParams<{ insightId: string }>();
  const insight = insights.find((item) => item.id === insightId);

  usePageTitle(insight?.title || 'Tech note');

  if (!insight) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold">That note is not here.</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          It may have moved while I was reorganizing the notebook.
        </p>
        <Link
          to="/gear"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 focus-visible:ring-2 focus-visible:ring-gray-500 dark:text-white dark:decoration-gray-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Tech Insights
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-4"
    >
      <Link
        to="/gear"
        className="inline-flex items-center gap-2 text-sm text-gray-600 outline-none transition-colors hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-500 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to all notes
      </Link>

      <header className="mt-8 border-b border-gray-200 pb-8 dark:border-gray-800">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600" aria-hidden="true" />
            {insight.status}
          </span>
          <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">
            ·
          </span>
          <span className="text-gray-500 dark:text-gray-400">{insight.category}</span>
          <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">
            ·
          </span>
          <span className="text-gray-500 dark:text-gray-400">{insight.published}</span>
        </div>

        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em]">
          {insight.title}
        </h1>
        <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {insight.summary}
        </p>
      </header>

      <div className="space-y-8 py-8">
        <section aria-labelledby="caught-my-eye">
          <h2 id="caught-my-eye" className="text-lg font-semibold">
            What caught my eye
          </h2>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base">
            {insight.note}
          </p>
        </section>

        <section
          className="border-y border-gray-200 bg-gray-50/80 py-6 dark:border-gray-800 dark:bg-gray-900/60"
          aria-labelledby="next-experiment"
        >
          <div className="px-4">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
              <h2 id="next-experiment" className="text-base font-semibold text-current">
                The experiment I’d run
              </h2>
            </div>
            <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {insight.experiment}
            </p>
          </div>
        </section>

        <section aria-labelledby="source-title">
          <h2 id="source-title" className="text-lg font-semibold">
            Read the source
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            The original work is linked below. My part is the question I pulled
            from it and the experiment I would try next.
          </p>
          <a
            href={insight.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 outline-none transition-colors hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-500 dark:text-white dark:decoration-gray-700 dark:hover:text-gray-300"
          >
            {insight.sourceLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </div>
    </motion.article>
  );
};

export default InsightDetail;
