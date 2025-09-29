import { useState } from 'react';
import FadeIn from '../utils/FadeIn';

interface DesignProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  dribbbleUrl: string;
  featured?: boolean;
}

const DesignProjects = () => {
  // Sample projects - replace with your actual projects
  const [projects] = useState<DesignProject[]>([
    {
      id: '1',
      title: 'Featured Design Project',
      description: 'Website Design',
      imageUrl: 'https://cdn.dribbble.com/userupload/37435982/file/original-e074e01f7560ce82a45251c53d8c4958.png?resize=1200x675&vertical=center',
      category: 'UI',
      dribbbleUrl: 'https://dribbble.com/shots/25704855-Ana-Brewing-Web-Design',
      featured: true
    },
    {
      id: '2',
      title: 'Architectural Portfolio',
      description: 'Clean and modern interface Website Design',
      imageUrl: 'https://cdn.dribbble.com/userupload/37371238/file/original-bd136eefdfc1137d92a64ca8cd6c6627.png?resize=1200x675&vertical=center',
      category: 'UI',
      dribbbleUrl: 'https://dribbble.com/shots/25699407-Minimalistic-Web-development'
    },
    {
      id: '3',
      title: 'Portfolio',
      description: 'Website Design',
      imageUrl: 'https://cdn.dribbble.com/userupload/37371126/file/original-3619d210375314ab773f72544c861e3d.png?resize=1200x675&vertical=center',
      category: 'UI',
      dribbbleUrl: 'https://dribbble.com/shots/25699404-Creative-Developer-Web-Design'
    },
    {
      id: '4',
      title: 'Gala Of Hope',
      description: 'Wbesite Design',
      imageUrl: 'https://cdn.dribbble.com/userupload/37375161/file/original-5dc6cb141f82ebf43b2ef0a36c3df94c.png?resize=1200x675&vertical=center',
      category: 'UI',
      dribbbleUrl: 'https://dribbble.com/shots/25699511-Gala-of-Hope'
    },
    {
      id: '5',
      title: 'Red House',
      description: 'Abstract & Modern',
      imageUrl: 'https://cdn.dribbble.com/userupload/40776943/file/original-796d8f2f81270bedc12c623f3d41436a.png?resize=1200x675&vertical=center',
      category: 'Web Design',
      dribbbleUrl: 'https://dribbble.com/shots/25733675-Season-Red-BANZANIA'
    }
  ]);

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full space-y-6">
      {/* Featured Project */}
      {featuredProject && (
        <FadeIn>
          <div 
            onClick={() => handleProjectClick(featuredProject.dribbbleUrl)}
            className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <img 
              src={featuredProject.imageUrl} 
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-2xl font-semibold mb-3">{featuredProject.title}</h3>
                <p className="text-lg mb-4">{featuredProject.description}</p>
                <span className="inline-block px-3 py-1.5 bg-white/20 rounded-full text-sm">{featuredProject.category}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {otherProjects.map((project) => (
          <FadeIn key={project.id}>
            <div 
              onClick={() => handleProjectClick(project.dribbbleUrl)}
              className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-2">{project.description}</p>
                  <span className="inline-block text-xs px-2 py-1 bg-white/20 rounded-full">{project.category}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default DesignProjects;