// File: /pages/projects.tsx
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of the project and your role in it.",
    image: "/api/placeholder/400/225",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://project-url.com"
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-zinc-400 max-w-2xl">
            A showcase of my personal projects and experiments in coding & automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-[16/9] bg-zinc-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-zinc-700 text-custom-cyan rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>

                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-custom-cyan hover:text-custom-cyan/80 text-sm"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
