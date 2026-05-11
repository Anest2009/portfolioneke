import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import timoraImage from '../assets/images/Screenshot 2025-09-29 122213.png';
import artImage from '../assets/images/fotoja.png';
import nanoChatImage from '../assets/images/secret.png';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 'timora',
    title: 'TIMORA.AL',
    tagline: 'Beauty & wellness booking platform',
    description: 'A comprehensive booking platform for beauty and wellness services with real-time availability. Built to streamline appointment scheduling and service management for beauty professionals across Albania.',
    techStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://timora.al',
    githubLink: '',
    image: timoraImage
  },
  {
    id: 'artcoffe',
    title: 'ArtCoffe',
    tagline: 'Multi-role order tracking system',
    description: 'Order tracking system with separate dashboards for admins, staff, and clients. Features real-time order management and role-based access control for efficient restaurant operations.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: '',
    githubLink: 'https://github.com/Anest2009/artcoffejunction',
    image: artImage
  },
  {
    id: 'nanochat',
    title: 'Nano Chat',
    tagline: 'Private E2EE chat app',
    description: 'End-to-end encrypted chat application ensuring complete user privacy and security. Implements modern cryptography protocols for secure messaging with zero-knowledge architecture.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'Libsodium'],
    liveLink: '',
    githubLink: '',
    image: nanoChatImage,
    badge: 'In Development'
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  usePageTitle(project?.title || 'Project');

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <button
          onClick={() => navigate('/about')}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <button
          onClick={() => navigate('/about')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Projects</span>
        </button>
      </motion.div>

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & Badge */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            {project.badge && (
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">
                {project.badge}
              </span>
            )}
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {(project.liveLink || project.githubLink) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Live Site</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg font-semibold transition-all border border-gray-700 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View Code</span>
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
