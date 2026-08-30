// Example usage of ProjectCard component
import { ProjectCard } from './ProjectCard';
import artImage from '../assets/images/fotoja.png';
import nanoChatImage from '../assets/images/secret.png';

// Example: Single project card
export const ExampleSingleCard = () => {
  const artCoffeProject = {
    title: "ArtCoffe",
    description: "Order tracking system with separate dashboards for admins, staff, and clients.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveLink: "",
    githubLink: "https://github.com/Anest2009/artcoffejunction",
    thumbnail: artImage
  };

  return <ProjectCard project={artCoffeProject} />;
};

// Example: Grid of multiple project cards
export const ExampleProjectGrid = () => {
  const projects = [
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
