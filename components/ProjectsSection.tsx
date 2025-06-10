import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-light-text">
           <span className="text-hydro-blue font-mono mr-2 text-xl md:text-2xl">03.</span>Some Things I’ve Built
        </h2>
        <div className="ml-4 h-px flex-grow bg-gamer-dark-secondary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;