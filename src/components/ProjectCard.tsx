import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    liveLink?: string;
    githubLink?: string;
    thumbnail: string;
    badge?: string;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex flex-col h-full w-full bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all shadow-lg"
    >
      {/* Image - 16:9 aspect ratio, full width */}
      <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content - flex-grow to push buttons to bottom */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Title & Badge */}
        <div className="flex items-start gap-2 flex-wrap">
          <h3 className="text-xl font-semibold text-white break-words flex-1 min-w-0">
            {project.title}
          </h3>
          {project.badge && (
            <span className="text-xs px-2.5 py-1 bg-blue-600/20 text-blue-400 rounded-md font-medium border border-blue-600/30 whitespace-nowrap flex-shrink-0">
              {project.badge}
            </span>
          )}
        </div>

        {/* Description - max 2 lines */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {project.description}
        </p>

        {/* Tech Stack - with breathing room */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg font-medium border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons - pushed to bottom with mt-auto */}
        {(project.liveLink || project.githubLink) && (
          <div className="flex gap-4 pt-4 mt-auto border-t border-gray-800">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Site</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
