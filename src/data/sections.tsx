import { motion } from 'framer-motion';
import { certifications, experiences, projects, skillGroups } from './portfolio';

const textMuted = 'text-gray-600 dark:text-gray-400';
const textStrong = 'text-gray-900 dark:text-gray-100';

export const sections = [
  {
    title: 'Timeline',
    content: (
      <div className="space-y-6 mb-8">
        {experiences.map((item) => {
          const dotColor = item.type === 'Current'
            ? 'bg-blue-500'
            : item.type === 'Internship'
              ? 'bg-amber-300'
              : item.type === 'Freelance'
                ? 'bg-purple-500'
              : item.type === 'Independent'
                ? 'bg-purple-500'
                : 'bg-emerald-500';

          return (
            <div key={`${item.company}-${item.role}`} className="relative">
              <div className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${dotColor} ring-4 ring-white dark:ring-gray-900`} />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ x: 4 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <p className={`font-medium ${textStrong}`}>{item.company}</p>
                    <p className={`text-sm ${textMuted} italic`}>{item.role}</p>
                  </div>
                  <p className={`text-xs ${textMuted} sm:text-right`}>{item.period}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {item.type}
                  </span>
                  <span className={`text-[11px] ${textMuted}`}>{item.location}</span>
                </div>
                <p className={`text-sm ${textMuted} mt-2`}>{item.summary}</p>
                <ul className={`list-disc list-outside ml-4 text-sm ${textMuted} mt-2 space-y-1`}>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </motion.div>
            </div>
          );
        })}

        <div className="relative">
          <div className="absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full bg-amber-300 ring-4 ring-white dark:ring-gray-900" />
          <motion.div className="py-1" whileHover={{ x: 4 }}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <p className={`font-medium ${textStrong}`}>Don Bosco Vocational High School</p>
                <p className={`text-sm ${textMuted} italic`}>Information Technology & Programming</p>
              </div>
              <p className={`text-xs ${textMuted}`}>2024 — 2028</p>
            </div>
            <p className={`text-sm ${textMuted} mt-2`}>
              Academic average: 9.3/10 · Focused on software development, database design, and network administration.
            </p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: 'Projects',
    content: (
      <div className="space-y-6 mb-8">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className={`font-medium ${textStrong}`}>{project.title}</h3>
                <p className={`text-sm ${textMuted} italic`}>{project.role}</p>
              </div>
              <span className={`text-xs ${textMuted}`}>{project.period}</span>
            </div>
            <p className={`text-sm ${textMuted} mt-2`}>{project.description}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">{project.proof}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit project ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    ),
  },
  {
    title: 'Skills',
    content: (
      <div className="space-y-6 mb-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className={`font-medium ${textStrong}`}>{group.label}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {group.skills.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Certifications',
    content: (
      <div className="divide-y divide-gray-200 dark:divide-gray-800 mb-8">
        {certifications.map((certificate) => (
          <motion.div
            key={certificate.name}
            className="py-3 first:pt-0 flex flex-col sm:flex-row sm:justify-between gap-1"
            whileHover={{ x: 4 }}
          >
            <div>
              <p className={`font-medium ${textStrong}`}>{certificate.name}</p>
              <p className={`text-xs ${textMuted} mt-1`}>{certificate.issuer}</p>
            </div>
            <span className={`text-xs ${textMuted}`}>{certificate.date}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
];
