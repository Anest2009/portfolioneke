import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import artImage from '../assets/images/fotoja.png';
import nanoChatImage from '../assets/images/secret.png';

interface Project {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'artcoffe',
    title: 'ArtCoffe',
    tagline: 'Multi-role order tracking system',
    image: artImage
  },
  {
    id: 'nanochat',
    title: 'Nano Chat',
    tagline: 'Private E2EE chat app',
    image: nanoChatImage,
    badge: 'In Development'
  }
];

export const ProjectsShowcase = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full space-y-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => navigate(`/project/${project.id}`)}
          className="group relative w-full aspect-[21/9] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-12 max-w-2xl">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500/50">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-lg md:text-xl text-gray-200 font-medium">
                {project.tagline}
              </p>
              <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors pt-2">
                <span className="text-sm font-medium">View Project</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
