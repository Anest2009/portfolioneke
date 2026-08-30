import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InsightCategory,
  insightCategories,
  insights,
} from '../data/insights';
import { usePageTitle } from '../hooks/usePageTitle';

const TechInsights = () => {
  usePageTitle('Tech Insights');

  const [filter, setFilter] = useState<InsightCategory | 'All'>('All');
  const filteredInsights =
    filter === 'All'
      ? insights
      : insights.filter((insight) => insight.category === filter);

  return (
    <div className="pb-4">
      <motion.header
        className="mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600" aria-hidden="true" />
          <span>Updated August 2026</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em]">
          Things I’m curious about right now
        </h1>
        <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
          Short notes on tools, research, and platform changes I’m reading, plus
          the small experiment I’d run next. Curiosity is more useful when it
          turns into a test.
        </p>
      </motion.header>

      <div
        className="mb-2 flex flex-wrap gap-x-5 gap-y-2 border-b border-gray-200 dark:border-gray-800"
        aria-label="Filter tech notes"
      >
        {insightCategories.map((category) => {
          const isActive = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={isActive}
              className={
                isActive
                  ? 'border-b-2 border-gray-900 pb-2 text-sm font-medium text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:border-white dark:text-white dark:focus-visible:ring-offset-gray-950'
                  : 'border-b-2 border-transparent pb-2 text-sm text-gray-500 outline-none transition-colors hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:text-white dark:focus-visible:ring-offset-gray-950'
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <section aria-label="Tech notes" aria-live="polite">
        {filteredInsights.length > 0 ? (
          filteredInsights.map((insight) => (
            <motion.article
              key={insight.id}
              className="border-b border-gray-200 dark:border-gray-800"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={'/gear/' + insight.id}
                className="group block py-6 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-950"
              >
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <span className="inline-flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    {insight.status}
                  </span>
                  <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {insight.category}
                  </span>
                </div>

                <h2 className="text-lg font-semibold leading-snug text-gray-900 decoration-gray-300 underline-offset-4 group-hover:underline dark:text-white dark:decoration-gray-700 sm:text-xl">
                  {insight.title}
                </h2>
                <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {insight.summary}
                </p>

                <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500 dark:text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{insight.published}</span>
                    <span aria-hidden="true">·</span>
                    <span>{insight.topics.join(' · ')}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-medium text-gray-700 transition-colors group-hover:text-gray-950 dark:text-gray-300 dark:group-hover:text-white">
                    Open note
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))
        ) : (
          <p className="py-10 text-sm text-gray-600 dark:text-gray-400">
            No notes in this category yet.
          </p>
        )}
      </section>

    </div>
  );
};

export default TechInsights;
