import { motion } from 'framer-motion';

const interests = [
  {
    title: 'Cooking',
    description: 'experimenting with recipes and perfecting techniques',
    stat: '13 favorite recipes',
    accent: 'text-rose-600 dark:text-rose-400',
  },
  {
    title: 'Videography',
    description: "documenting life's moments through film",
    stat: '223 videos',
    accent: 'text-amber-700 dark:text-amber-400',
  },
  {
    title: 'Investing',
    description: 'following financial markets and learning investment strategies',
    stat: 'stocks & crypto',
    accent: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    title: 'Adventure Sports',
    description: 'pushing my comfort zone through adrenaline-fueled activities',
    stat: '4 activities',
    accent: 'text-violet-700 dark:text-violet-400',
  },
] as const;

export const PersonalStats = () => {
  return (
    <section
      className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800"
      aria-labelledby="personal-stats-title"
    >
      <div className="mb-5">
        <h2 id="personal-stats-title" className="text-lg font-semibold">
          Away from the keyboard
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          A few small things that make me feel like me.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        {interests.map((interest) => (
          <motion.div
            key={interest.title}
            className="border-t border-gray-200 pt-3 dark:border-gray-800"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-medium">{interest.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {interest.description}
            </p>
            <p className={['mt-2 text-xs font-medium', interest.accent].join(' ')}>
              {interest.stat}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
