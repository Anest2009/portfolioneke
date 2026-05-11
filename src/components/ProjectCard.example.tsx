// Example usage of ProjectCard component
import { ProjectCard } from './ProjectCard';
import timoraImage from '../assets/images/Screenshot 2025-09-29 122213.png';
import artImage from '../assets/images/fotoja.png';
import nanoChatImage from '../assets/images/secret.png';

// Example: Single project card
export const ExampleSingleCard = () => {
  const timoraProject = {
    title: "TIMORA.AL",
    description: "A comprehensive booking platform for beauty and wellness services with real-time availability.",
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://timora.al",
    githubLink: "", // Optional: leave empty if no GitHub link
    thumbnail: timoraImage
  };

  return <ProjectCard project={timoraProject} />;
};

// Example: Grid of multiple project cards
export const ExampleProjectGrid = () => {
  const projects = [
    {
      title: "TIMORA.AL",
      description: "A comprehensive booking platform for beauty and wellness services with real-time availability.",
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
      liveLink: "https://timora.al",
      githubLink: "",
      thumbnail: timoraImage
    },
    {
      title: "ArtCoffe",
      description: "Order tracking system with separate dashboards for admins, staff, and clients.",
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveLink: "",
      githubLink: "https://github.com/Anest2009/artcoffejunction",
      thumbnail: artImage
    },
    {
      title: "Nano Chat",
      description: "End-to-end encrypted chat application ensuring complete user privacy and security.",
      techStack: ["React", "Node.js", "Socket.IO", "Libsodium"],
      liveLink: "",
      githubLink: "",
      thumbnail: nanoChatImage
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

// Example: Using in your sections.tsx format
export const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      <ExampleProjectGrid />
    </div>
  );
};
